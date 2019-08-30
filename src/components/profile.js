import React from 'react';
import {Link} from 'react-router-dom';

const Profile = (props) => {

    const redirectUser = () => {
        props.history.push('/');
    }
    return (
        <>
            <button onClick= { () => redirectUser() }>Redirect to Home</button>
            <Link to={{
                pathname: `${props.match.url}/posts`
            }}>Go to posts</Link>
        </>
    )
}

export default Profile;