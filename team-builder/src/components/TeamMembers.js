import React from 'react'
import '../App.css';

function TeamMembers(props) {
    return (
        <div className='team-list'>
            {props.members.map(newMember => (
                <div className='newMember' key={newMember.id}>
                    <h2>{newMember.name}</h2>
                    <p>{newMember.email}</p>
                    <p>{newMember.role}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamMembers;