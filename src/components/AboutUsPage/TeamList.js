import React from 'react';
import TeamCard from './TeamCard';
import { TeamV1, TeamV2 } from './seeds';

const TeamVersion1 = () => {
  return (
    <div className='about-container'>
      <div className='team-list'>
        {TeamV1.map((member) => (
          <TeamCard member={member} />
        ))}
      </div>
    </div>
  );
};

const TeamVersion2 = () => {
  return (
    <div className='about-container'>
      <div className='team-list'>
        {TeamV2.map((member) => (
          <TeamCard member={member} />
        ))}
      </div>
    </div>
  );
};

export { TeamVersion1, TeamVersion2 };
