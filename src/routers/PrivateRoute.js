import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/header';

/* Route privée permettant de rediriger comme on le souhaite, ici en fonction de logged ou non */
export const PrivateRoute = ({
    isAuthenticated,
    component: Component/* destructure le component passer dans la route de base */,
    ...rest /* spread operator pour récupérer toute ce qui reste comme paramètre dans rest */
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>

        ) : (
            <Redirect to="/" />
        )
    )} />

);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);