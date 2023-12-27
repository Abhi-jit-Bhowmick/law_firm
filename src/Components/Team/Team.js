import React from 'react';
import "./Team.css";
import { team } from '../../data/Data';
import TeamCard from '../TeamCard/TeamCard';

function Team() {
    return (
        <div className='teams-wrapper'>
            <div className='heading'>
                <p>Our Team</p>
            </div>
            <div className='teams'>
                {
                    team.map((item) => (
                        <TeamCard
                            key={item.id}
                            data={item}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default Team