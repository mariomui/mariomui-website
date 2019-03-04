import React from 'react'
import IconListEntry from './IconListEntry'
import backEndIconSkillsCss from '../styles/icon-skills.module.css'
const backEndIconSkills = require('../assets/resume').backEndSkills

const BackEndIconList = () => {

  return (
    <div className={backEndIconSkillsCss.row}>
      {
        backEndIconSkills.map((iconSkill, key) => {
          return (
            <IconListEntry key={key} iconSkill={iconSkill} />
          )
        })
      }
    </div>
  )
}
export default BackEndIconList