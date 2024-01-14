import React from 'react';

const ClubSquad = ({ squad }) => (
    <div>
        <h2>Current Squad</h2>
        <ul>
            {squad.map(player => (
                <li key={player.id}>{player.name}</li>
            ))}
        </ul>
    </div>
);

export default ClubSquad;