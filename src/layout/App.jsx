import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";

import EventDashboard from "../features/events/eventDashboard/EventDashboard";
import EventDetails from "../features/events/eventDetail/EventDetails";
import EventForm from "../features/events/eventForm/EventForm";
import Home from "../features/home/Home";
import NavBar from "../features/nav/NavBar";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/*" element={<Application />} />
      </Routes>
    </Fragment>
  );
}

export default App;

function Application() {
  return (
    <React.Fragment>
      <NavBar />
      <Container className="main">
        <Routes>
          <Route path="/events" element={<EventDashboard />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/manage/:id" element={<EventForm />} />
          <Route path="/createEvent" element={<EventForm />} />
        </Routes>
      </Container>
    </React.Fragment>
  );
}
