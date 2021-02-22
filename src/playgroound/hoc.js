//Higher Order Component - A component { HOC } that renders another component
//Reuse code
//Render Hijacking
//Prop Manipulation
//Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
return (props) => (
    <div>
        { props.isAdmin && <p>This is private info. Please Don't share</p>}
        <WrappedComponent {...props} />
    </div>
);
};

const AdminInfo = withAdminWarning(Info);

const requiredAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? 
        (<WrappedComponent {...props} /> ):
        (<p>Please Log in to see info</p>)
        }
        </div>
    );
};

const AuthInfo = requiredAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the detail"/>, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is the detail"/>, document.getElementById('app'));