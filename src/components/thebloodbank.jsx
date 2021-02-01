import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import HomePage from './HomePage'
import AboutUs from './AboutUs'
import BecomeDonar from './BecomeDonar'
import SearchBlood from './SearchBlood'
import Login from './Login'
import ContactUs from './ContactUs'
import Footer from './Footer'
import BreadCrumbs from './BreadCrumbs'
import DashBoard from './adminDashboard/DashBoard'
import ManageBloodGroup from './adminDashboard/ManageBloodGroup'
import ContactUsQuery from './adminDashboard/ContactUsQuery'
import DonarList from './adminDashboard/DonarList'
import AddDonar from './adminDashboard/AddDonar'

function TheBloodBank() {
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/" component={(props) => <HomePage {...props} />} />
                    <Route exact path="/home" component={(props) => <HomePage {...props} />} />
                    <Route exact path="/aboutUs" component={(props) => <AboutUs {...props} />} />
                    <Route exact path="/becomeDonar" component={(props) => <BecomeDonar {...props} />} />
                    <Route exact path="/searchBlood" component={(props) => <SearchBlood {...props} />} />
                    <Route exact path="/contactUs" component={(props) => <ContactUs {...props} />} />
                    <Route exact path="/login" component={(props) => <Login {...props} />} />
                    <Route exact path="/admin/Dashboard" component={(props) => <DashBoard {...props} />} />
                    <Route exact path="/admin/ManageBloodGroup" component={(props) => <ManageBloodGroup {...props} />} />
                    <Route exact path="/admin/ContactUsQuery" component={(props) => <ContactUsQuery {...props} />} />
                    <Route exact path="/admin/DonarList" component={(props) => <DonarList {...props} />} />
                    <Route exact path="/admin/AddDonar" component={(props) => <AddDonar {...props} />} />
                </Switch>
            </div>
        </>
    )
}
export default TheBloodBank
