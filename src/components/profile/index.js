import React, { Component } from 'react';

class Profile extends Component {
    state = {
        profile: null,  
        error: ""
    };

    componentDidMount() {
      this.loadUserProfile();  
    }

    loadUserProfile() {
        this.props.auth.getProfile((profile, error) =>
            this.setState({profile, error})
        );
    }

    render() {
        const { profile } = this.state;
        if (!profile) return null;
    
        return (
            <>
                <h1>User Profile</h1>
                <div><img style={{maxWidth:50, maxHeight:50}} src={profile.picture} alt="Profile picture"/>Welcome back {profile.nickname}!</div>
                <div>{JSON.stringify(profile, null, 2)}</div>
            </>
        );
    }
}

export default Profile;