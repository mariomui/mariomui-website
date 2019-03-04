import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from "@fortawesome/free-brands-svg-icons"
// import Helm from '../components/Helm'
import { FaLambda } from "react-icons/fa"


library.add(fab, fas);
const ri = {
  'FaLambda': <FaLambda />,
}
const IconListEntry = (props) => {
  const [prefix, iconName, iconNameOverride] = props.iconSkill.split('.');
  let t1 = (prefix === 'fizz') ? 1 : 0;
  let t2 = (prefix === 'reacticons') ? 2 : 0;
  let t3 = (prefix === 'fas') ? 3 : 0;
  let t4 = (prefix === 'fab') ? 4 : 0;

  return (
    <div>
      <div className="card border-primary mb-3" style={{ display: "inline-block" }}>
        <div className="card-header">{(iconNameOverride || iconName).toUpperCase()}</div>
        <div className="card-body">
          {
            !!t1 ?
              <i className={`icon-${iconName}`} style={{ fontSize: "2em" }}></i> : null
          }
          {
            !!t2 ? ri[iconName] : null
          }
          {
            !!t3 ? <FontAwesomeIcon icon={[prefix, iconName]} size="3x" /> : null
          }
          {
            !!t4 ? <FontAwesomeIcon icon={[prefix, iconName]} size="3x" /> : null
          }
          <p className="card-text">
          </p>
        </div>
      </div>

    </div >
  )
}

export default IconListEntry;