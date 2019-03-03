import React from 'react'
import IconListEntry from './IconListEntry'
import frontEndIconSkillsCss from '../styles/icon-skills.module.css'
const frontEndIconSkills = require('../assets/resume').frontEndSkills

const FrontEndIconList = () => {

  return (
    <div className={frontEndIconSkillsCss.row}>
      {
        frontEndIconSkills.map((iconSkill, key) => {
          return (
            < IconListEntry key={key} iconSkill={iconSkill} />
          )
        })
      }
    </div>
  )
}
export default FrontEndIconList