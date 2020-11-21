import React from 'react';
import { Route } from 'react-router-dom'
import MainPage from 'pages/MainPage'
const Routes = (): JSX.Element => {
    return (
        <>
            <Route exact path='/' component={MainPage}/>
        </>
    )
}
export default Routes
 