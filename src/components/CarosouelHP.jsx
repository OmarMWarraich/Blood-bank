import { Card , CardMedia, makeStyles } from '@material-ui/core';
import React from 'react'
import Carousel from 'react-material-ui-carousel';


const useStyles = makeStyles({
    root: {
        //   maxWidth: 345,
    },
    media: {
        width: "100%",
        height: "500px",
    },
});

function CarosouelHP() {
    var items = [
        {
            src: "../../images/banner.png",
            title:"BllodDonateDay"
        },
        {
            src: "../../images/BDTP.jpg",
            title:"DonateBlood"

        }
    ]

    const classes = useStyles();

    return (

        <Carousel>

            {
               items.map( (item)=>(
                <Card >
               <CardMedia className={classes.media}
                    image={item.src}
                    title={item.title} />
                    </Card>
                    ))
            }
        </Carousel>

    )
}

export default CarosouelHP