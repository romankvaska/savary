import React, { Component } from 'react';

class Callback extends Component {
    componentDidMount() {
        // Handle Authentication if expected values are in the URL
        if (/access_token|idtoken|error/.test(this.props.location.hash)) {
            this.props.auth.handleAuthentication();
        } else {
            throw new Error("Invalid callback URL!");
        }
    }

    render() {
        return (
            <h1>
                Loading...
            </h1>
        );
    }
}

export default Callback