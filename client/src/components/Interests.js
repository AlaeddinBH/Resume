import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HikingIcon from '@mui/icons-material/Hiking';
function Interests() {
  return (
    <div className='skills'>
        <h2 className="h2">Centres d'intérèts</h2>
        <ul>
            <li>  informatique</li>
            <li>  Musique</li>
            <li>  football</li>
            <li>  Randonnée</li>
        </ul>
        <div className="interests">
            <CodeIcon style={{ fontSize: 40 }}/>
            <MusicNoteIcon style={{ fontSize: 40 }}/>
            <SportsSoccerIcon style={{ fontSize: 40 }}/>
            <HikingIcon style={{ fontSize: 40 }}/>
        </div>
      
    </div>
  )
}

export default Interests
