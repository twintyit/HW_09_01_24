import React from 'react';

const ClubInfo = ({ name, city, foundationDate, emblem }) => (
    <div>
        <h2>{name}</h2>
        <p>City: {city}</p>
        <p>Founded: {foundationDate}</p>
        <img src={emblem} alt="Club Emblem" className='emblem' />
    </div>
);

export default ClubInfo;