import React from 'react';

const ClubAchievements = ({ medals, cups, goalsScored }) => (
    <div>
        <h2>Achievements</h2>
        <p>Medals: {medals}</p>
        <p>Cups: {cups}</p>
        <p>Goals Scored: {goalsScored}</p>
    </div>
);

export default ClubAchievements;