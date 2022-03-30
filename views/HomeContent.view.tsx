import Benefits from '../features/Benefits'
import Landing from '../features/Landing'
import OMulch from '../features/OMulch'
import WhatIs from '../features/WhatIs'
import Why from '../features/Why'
import WhoUse from '../features/WhoUse'
import WhatType from '../features/WhatType'

export default function HomeContent(props: any) {

    return (
        <>
            <Landing />
            <WhatIs />
            <Benefits />
            <WhatType />
            <OMulch />
            <WhoUse />
            <Why />
        </>
    )
}