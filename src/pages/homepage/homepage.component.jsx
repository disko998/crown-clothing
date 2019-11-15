import React, { Component } from 'react'

import './homepage.styles.scss'
import { Directory } from '../../components'

export class Homepage extends Component {
    render() {
        return (
            <div className='homepage'>
                <Directory />
            </div>
        )
    }
}
