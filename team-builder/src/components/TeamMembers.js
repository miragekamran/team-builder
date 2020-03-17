import React from 'react'
import '../App.css';

function TeamMembers(props) {
    return (
        <div className='team-list'>
            {props.friends.map(friend => (
                <div className='friend' key={friend.id}>
                    <h2>{friend.title}</h2>
                    <p>{friend.body}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamMembers;