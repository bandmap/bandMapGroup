import BandDiscover from "../components/BandDiscover"
import BandMap from "../components/BandMap"
import ChatBoard from "../components/ChatBoard"
import CubeSection from "../components/CubeSection"
import CurrentEvent from "../components/CurrentEvent"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import PersonalCalendar from "../components/PersonalCalendar"

function Home() {
    return (
        <>
        <CubeSection/>
        <NavBar/>
        <BandMap/>
        <BandDiscover/>
        <CurrentEvent/>
        <ChatBoard/>
        <PersonalCalendar/>
        <Footer/>
        </>
    )
}

export default Home