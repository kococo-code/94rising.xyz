import React from 'react';
import { Route } from 'react-router-dom'
import MainPage from 'pages/MainPage'
import AboutPage from 'pages/AboutPage'
const Routes = (): JSX.Element => {
    return (
        <>
            <Route exact path='/' component={MainPage}/>
            <Route path='/about' component={AboutPage}/>
        </>
    )
}
export default Routes
 