import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TeamCard from './TeamCard';
​
​
const TeamList = () =>  {

const team = [
    {
        name: "Hira Khan",
        image: "https://ca.slack-edge.com/T4JUEB3ME-UG8U1EMQC-23707ef54cc3-512",
        title: "Data Science",
        linkedin:"https://www.linkedin.com/in/hira-shahid-991b1583/",
        github: "Hira63S"

    },
    {
        name: "Levi Simpson" ,
        image: "https://ca.slack-edge.com/T4JUEB3ME-UDCJB03RD-0e87fb5029cc-48",
        title: "Team Lead",
        linkedin: "n/a",
        github: "Levi-Huynh"
    },
    {
        name: "Sheila Eichenberger",
        image: "https://ca.slack-edge.com/T4JUEB3ME-UHZCNQY3Y-a25cb56e80d9-48",
        title: "Web Developer",
        linkedin: "N/A",
        github: "EpiceneDev"
    },
    {
        name: "Connor R Sullivan",
        image: "https://ca.slack-edge.com/T4JUEB3ME-ULVE6L3TJ-5b9eaad31d15-48",
        title: "Web Developer",
        linkedin: "n/a",
        github: "crsullivan"
    },
    {
        name: "Gabrial Romero",
        image: "https://ca.slack-edge.com/T4JUEB3ME-UEFKRMPCP-4d6c51049ae9-48",
        title: "UX Designer" ,
        linkedin: "www.linkedin.com/in/gabe-romero-design",
        github: "n/a"
    },
    {
        name: "Rob Hamilton",
        image: "https://ca.slack-edge.com/T4JUEB3ME-ULJ9DTDKL-246bfe8730a9-48",
        title: "Data Scientist" ,
        linkedin: "https://www.linkedin.com/in/rob1ham/" ,
        github: "Rob1Ham"
    },
    {
        name: "Rudy Enriquez",
        image: "https://ca.slack-edge.com/T4JUEB3ME-UD2LGR18A-7c6caf1a9c21-24",
        title: "Data Scientist" ,
        linkedin: "n/a",
        github: "RNEnriquez"
    },
    {
        name: "Johana Luna",    
        image: "https://ca.slack-edge.com/T4JUEB3ME-ULJAKAQ66-88214d54e62a-48",
        title: "Data Scientist",
        linkedin: "https://www.linkedin.com/in/johanaluna/?locale=en_US",
        github: "johanaluna"
    },
    {
        name: "Akak Almaz",
        image: "https://ca.slack-edge.com/T4JUEB3ME-ULK6ULQ0J-b2b2713290b3-48",
        title: "Web Developer",
        linkedin: "n/a",
        github: "Aakak"
    },
]

    return (
      <div className="team-list">
        {team.map(member => (
          <TeamCard key={} member={member} />
        ))}
      </div>
    );
}
​
export default TeamList;