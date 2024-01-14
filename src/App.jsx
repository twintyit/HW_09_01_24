import ClubInfo from './ClubInfo'
import ClubAchievements from './ClubAchievements'
import ClubSquad from './ClubSquad'
import React, { useState } from 'react';
import MagicBall from './MagicBall';
import './App.css'

function App() {
  const [clubs, setClubs] = useState([
    {
      id: 1,
      name: 'Real Madrid',
      city: 'Madrid',
      foundationDate: '1902',
      emblem: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
      medals: 33,
      cups: 19,
      goalsScored: 6548,
      squad: [
        { id: 1, name: 'Sergio Ramos' },
        { id: 2, name: 'Karim Benzema' },
      ],
    },
    {
      id: 2,
      name: 'FC Barcelona',
      city: 'Barcelona',
      foundationDate: '1899',
      emblem: 'https://upload.wikimedia.org/wikipedia/de/thumb/a/aa/Fc_barcelona.svg/1200px-Fc_barcelona.svg.png',
      medals: 26,
      cups: 30,
      goalsScored: 6672,
      squad: [
        { id: 1, name: 'Lionel Messi' },
        { id: 2, name: 'Gerard Piqué' },
      ],
    }
  ]);

  return (
    <div>
      <div className='container'>
        {clubs.map(club => (
          <div key={club.id} className="info-container">
            <ClubInfo {...club}/>
            <ClubAchievements {...club}/>
            <ClubSquad squad={club.squad}/>
          </div>
        ))}

      </div>
      <div>
        <MagicBall></MagicBall>
      </div>
    </div>
  );
}

export default App
