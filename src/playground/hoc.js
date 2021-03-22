import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
        <h2>This is the info: {props.info}</h2>
    </div>
);

const adminWarningInfo = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Admin version</p>}
            <h1>INFO</h1>
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ?
                <WrappedComponent {...props} /> :
                <p>Please authenticate to see the info</p>}
        </div>
    );
};

const AdminInfo = adminWarningInfo(Info);
const AuthentificatedInfo = requireAuthentification(Info);

//ReactDOM.render(<AdminInfo info='test' isAdmin={true} />, document.getElementById('app'));
ReactDOM.render(<AuthentificatedInfo info='test' isAuthenticated={false} />, document.getElementById('app'));