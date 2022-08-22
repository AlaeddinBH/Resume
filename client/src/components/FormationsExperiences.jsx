import React from 'react'
import "./FormationsExperiences.css"
import Formations from "./Formations"
import dataExperiences from '../datas/Experiences'
import Experiences from "./Experiences"
import AddFormation from './AddFormation'

const FormationsExperiences = () => {
    
  return (
    <>
     
     <Formations />
     <Experiences datas={dataExperiences}/>
    </>
  )
}

export default FormationsExperiences
