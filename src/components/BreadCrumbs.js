import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Box, Breadcrumbs as MUIBreadcrumbs } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { withRouter } from 'react-router-dom';


const BreadCrumbs = (props) => {
    const { history, location } = props;
    const { pathname } = location
    const pathnames = pathname.split("/").filter(x => x);
    return (
        <Box component="span" m={1}>
            <MUIBreadcrumbs aria-label="breadcrumb">
                <Link onClick={() => history.push("/")}>
                    Home
        </Link>
                {
                    pathnames.map((pname, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
                        const isLast = index === pathnames.length - 1;
                        return isLast ? (<Typography>{pname}</Typography>) : (<Link onClick={() => history.push(routeTo)}>{pname}</Link>)
                    })
                }
            </MUIBreadcrumbs>
        </Box>
    )
}

export default withRouter(BreadCrumbs)