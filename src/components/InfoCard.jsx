import React from 'react'

import { Icon } from '@ricons/utils'

export default function InfoCard({ title = "", icon = "", iconSize = 32 }) {
    return (
        <div className='info-card'>
            <div>
                <Icon size={iconSize}>
                    {icon}
                </Icon>
                <h5>{title}</h5>
                <p>Lorem, ipsum dolor sit amet consectetur?</p>
            </div>
        </div>
    )
}
