import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Page1/Home";
import { About } from "../Page1/About";
import { Signup, } from "../Signup/Signup";
import { Deshbord } from "../Page2/Deshboard";
import { Flightsearch } from "../Page2/Flights/Flightsearch";
import { Hotelsearch } from "../Page2/Hotels/Hotelsearch";
import { Booking } from "../Page2/Flight-Booking/Booking";
import { Ticket } from "../Page2/Flight-Booking/Ticket";
import { Credit } from "../Page2/Flight-Booking/Creditnotes";
import { Hotelbooking } from "../Page2/Hotel-Booking/Hotelbooking";
import { Hotelcredit } from "../Page2/Hotel-Booking/Hotelcredit";
import { Flightmarkup } from "../Page2/Manage-Markup/Flightmarkup";
import { Hotelmarkup } from "../Page2/Manage-Markup/Hotelmarkup";
import { Viewnews } from "../Page2/Viewnews/Viewnews";
// import { Route, Routes } from "react-router-dom";
// import { Home } from "../page/Home";
// import { About } from "../page/About";
// import { Deshbord } from "../page2/Deshbord";
// import { Singup } from "../Signup/Signup";
// import { Flightsearch } from "../page2/flightsearch";
// import { Hotelsearch } from "../page2/hotelsearch";
// import { Flightbooking } from "../page2/flightbooking";
// import { Flightticket } from "../page2/flightticket";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/feature" element={<Deshbord/>} />
        
        <Route path="/deshbord" element={<Deshbord/>}/>
        <Route path="/search" element={<Flightsearch/>}/>
        <Route path="/hotelsearch" element={< Hotelsearch/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/ticket" element={<Ticket/>}/>
        <Route path="/credit" element={<Credit/>}/>
        <Route path="/hotelbooking" element={< Hotelbooking/>}/>
        <Route path="/hotelcredit" element={<Hotelcredit/>}/>
        <Route path="/flightmarkup" element={<Flightmarkup/>}/>
        <Route path="/hotelmarkup" element={<Hotelmarkup/>}/>
        <Route path="/viewnews" element={< Viewnews/>}/>
      </Routes>
    </>
  );
}
export { Routing };