import BandDiscover from "./components/BandDiscover"
import BandMap from "./components/BandMap"
import ChatBoard from "./components/ChatBoard"
import CurrentEvent from "./components/CurrentEvent"
import Footer from "./components/Footer"
import CubeSection from "./components/CubeSection"
import NavBar from "./components/NavBar"
import PersonalCalendar from "./components/PersonalCalendar"
import BandMapPage from "./pages/BandMapPage"
import { Route, Routes } from "react-router-dom"
import ChatBoardPage from "./pages/ChatBoardPage"
import MemberPage from "./pages/MemberPage"
import Home from "./pages/Home"
import BandDiscoverPage from "./pages/BandDiscoverPage"
import PersonalCalendarPage from "./pages/PersonalCalendarPage"
import CurrentEventPage from "./pages/CurrentEventPage"
import EventOne from "./pages/EventOne"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/search' element={<BandMapPage />}></Route>
      <Route path='/event' element={<CurrentEventPage />}></Route>
      <Route path='/band' element={<BandDiscoverPage />}></Route>
      <Route path='/chatboard' element={<ChatBoardPage />}></Route>
      <Route path='/calendar' element={<PersonalCalendarPage />}></Route>
      <Route path='/member' element={<MemberPage />}></Route>
      <Route path='/event/:event1' element={<EventOne />}></Route>
    </Routes>
  )
}

export default App
