import Beneficios from '../features/Beneficios'
import Landing from '../features/Landing'
import OMulch from '../features/OMulch'
import OQueE from '../features/OQueE'
import PorQue from '../features/PorQue'
import QuemUsa from '../features/QuemUsa'
import QueTipo from '../features/QueTipo'

export default function HomeContent(props: any) {

    return (
        <>
            <Landing />
            <OQueE />
            <Beneficios />
            <QueTipo />
            <OMulch />
            <QuemUsa />
            <PorQue />
        </>
    )
}