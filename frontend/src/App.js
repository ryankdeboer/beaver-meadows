import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TournamentsPage from "./pages/TournamentsPage";
import EventsPage from "./pages/EventsPage";
import LeagueStandingsPage from "./pages/LeagueStandingsPage";

import DailyRatesPage from "./pages/DailyRatesPage";
import MembershipsPage from "./pages/MembershipsPage";
import ClubhouseRentalPage from "./pages/ClubhouseRentalPage";

import Hole1Page from "./pages/holes/Hole1Page";
import Hole2Page from "./pages/holes/Hole2Page";
import Hole3Page from "./pages/holes/Hole3Page";
import Hole4Page from "./pages/holes/Hole4Page";
import Hole5Page from "./pages/holes/Hole5Page";
import Hole6Page from "./pages/holes/Hole6Page";
import Hole7Page from "./pages/holes/Hole7Page";
import Hole8Page from "./pages/holes/Hole8Page";
import Hole9Page from "./pages/holes/Hole9Page";


import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";




export default function App() {

  return (
      <div className="App">
        <Navbar />
        
          <Routes>
            <Route exact path="/" element={
              <HomePage />
            }/>
            <Route path="/about" element={
              <AboutPage/>
            }/>
            <Route path="/tournaments" element={
              <TournamentsPage/>
            }/>
            <Route path="/events" element={
              <EventsPage/>
            }/>
            <Route path="/contact" element={
              <ContactPage/>
            }/>
            <Route path="/league-standings" element={
              <LeagueStandingsPage/>
            }/>
            <Route path="/daily-rates" element={
              <DailyRatesPage/>
            }/>
            <Route path="/memberships" element={
              <MembershipsPage/>
            }/>
            <Route path="/clubhouse-rental" element={
              <ClubhouseRentalPage/>
            }/>
            <Route path="/hole-1" element={
              <Hole1Page/>
            }/>
            <Route path="/hole-2" element={
              <Hole2Page/>
            }/>
            <Route path="/hole-3" element={
              <Hole3Page/>
            }/>
            <Route path="/hole-4" element={
              <Hole4Page/>
            }/>
            <Route path="/hole-5" element={
              <Hole5Page/>
            }/>
            <Route path="/hole-6" element={
              <Hole6Page/>
            }/>
            <Route path="/hole-7" element={
              <Hole7Page/>
            }/>
            <Route path="/hole-8" element={
              <Hole8Page/>
            }/>
            <Route path="/hole-9" element={
              <Hole9Page/>
            }/>
            <Route path="*" element={
              <NotFoundPage/>
            } />
          </Routes>
        <Footer />
      </div>
  )
}