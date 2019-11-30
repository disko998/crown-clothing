import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import './directory.styles.scss'
import { MenuItem } from '../'
import {selectSections} from '../../redux/directory/directory.selectors'

const DirectoryComponent = ({sections}) => {
    return (
      <div className='directory-menu'>
          {sections.map(({id, ...sectionOtherProps}) => (
              <MenuItem key={id} {...sectionOtherProps} />
          ))}
      </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectSections
})

export const Directory = connect(mapStateToProps)(DirectoryComponent)
