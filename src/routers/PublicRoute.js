import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/header';

/* Route public permettant de rediriger comme on le souhaite, ici en fonction de logged ou non */
export const PublicRoute = ({
    isAuthenticated,
    component: Component/* destructure le component passer dans la route de base */,
    ...rest /* spread operator pour récupérer toute ce qui reste comme paramètre dans rest */
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? ( /* redirect to dashboard if logged */
            <Redirect to="/dashboard" />
        ) : ( /* displayu login page if not logged */
                <Component {...props} /> 
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);