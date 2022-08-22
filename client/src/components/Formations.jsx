import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFormation } from '../redux/FormationAction';
import AddFormation from './AddFormation'
import './FormationsExperiences.css'


function Formations() {
    const { formation } = useSelector(state=>state);
    const dispatch = useDispatch();
    useEffect(() => {
        
          dispatch(getFormation());
        
    }, [])
    console.log(formation)
  return (
    <div className='cursus mb3'>
        <div className='button__modal'>
        <h2 className="h2">Formations</h2>
        {/* <AddFormation/> */}
        </div>
         {formation.map((el) =>(
            <div className="grid__row" key={el._id}>
            <div className="grid__item">
                <p className="grid__date">{el.date}</p>
            </div>
            <div className="grid__item">
                <h3 className="grid__title">{el.title}</h3>
                <p className="grid__institut">{el.Institut}</p>
                <p className="grid__location">{el.location}</p>
            </div>
            </div> 
          ) )
            
       }
    </div>
  )
}

export default Formations
