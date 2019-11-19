import React from 'react'
import { withRouter } from 'react-router-dom'

import './menu-item.styles.scss'

const MenuItemComponent = ({title, imageUrl, size, history, match, linkUrl}) => (
     <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div 
            style={{backgroundImage: `url(${imageUrl})`}}
            className='background-image'
        >
        </div>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export const MenuItem = withRouter(MenuItemComponent)


