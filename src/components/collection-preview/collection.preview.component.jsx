import React from 'react'

import './collection-preview.styles.scss'
import {CollectionItem} from '../index'

export const CollectionPreview = ({title, items}) => {
        return (
            <div className='collection-preview'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <div className='preview'>
                    {
                        items.filter((item, idx) => idx < 4)
                        .map((item) => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        )
    }
