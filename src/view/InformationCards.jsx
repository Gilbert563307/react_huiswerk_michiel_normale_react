import React from 'react'
import "../assets/css/InformationCards.css"

import SecurityFilled from '@ricons/material/SecurityFilled'
import PrivateConnectivityFilled from "@ricons/material/PrivateConnectivityFilled";
import SupportAgentFilled from "@ricons/material/SupportAgentFilled";
import RocketLaunchFilled from "@ricons/material/RocketLaunchFilled";
import AddLinkFilled from "@ricons/material/AddLinkFilled";
import SyncRound from "@ricons/material/SyncRound";
import InfoCard from '../components/InfoCard'


export default function InformationCards() {
    return (
        <article className='information-cards'>
            <h1 className='text-center'>Why QuantumSky?</h1>
            <article>
                <div className='info-cards-parent'>
                    <InfoCard title='DDos protection' icon={<SecurityFilled />} />
                    <InfoCard title='Wide infrastructure' icon={<AddLinkFilled />} />
                    <InfoCard title='Automated Synchronization' icon={<SyncRound />} />
                </div>
                <div className='info-cards-parent'>
                    <InfoCard title='Secure Remote Access' icon={<PrivateConnectivityFilled />} />
                    <InfoCard title='24/7 Support' icon={<SupportAgentFilled />} />
                    <InfoCard title='Automatic Deployment' icon={<RocketLaunchFilled />} />
                </div>
            </article>
        </article>
    )
}
