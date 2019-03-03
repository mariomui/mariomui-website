import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from "@fortawesome/free-brands-svg-icons"
// import Helm from '../components/Helm'

library.add(fab, fas);
const IconListEntry = (props) => {
  const [prefix, iconName, iconNameOverride] = props.iconSkill.split('.');
  const toggleImportedIcons = (prefix === 'fizz');
  return (
    <div>
      <div className="card border-primary mb-3" style={{ display: "inline-block" }}>
        <div className="card-header">{(iconNameOverride || iconName).toUpperCase()}</div>
        <div className="card-body">
          {
            toggleImportedIcons ?
              <i className={`icon-${iconName}`} style={{ fontSize: "2em" }}></i> :
              <FontAwesomeIcon icon={[prefix, iconName]} size="3x" />
          }

          <p className="card-text">
          </p>
        </div>
      </div>
    </div >
  )
}

export default IconListEntry;