import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

import { useNavigate } from "react-router-dom";

export default function NavBar({ setFormOpen }) {
  const [authenticated, setAuthenticated] = useState(false);
  let navigate = useNavigate();

  function handleSignout() {
    setAuthenticated(false);
    navigate("/");
  }

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact="true" to="/" header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        {authenticated && (
          <React.Fragment>
            <Menu.Item as={NavLink} to="/events" name="Events" />
            <Menu.Item as={NavLink} to="/createEvent">
              <Button positive inverted content="Create Event" />
            </Menu.Item>
          </React.Fragment>
        )}

        {authenticated ? (
          <SignedInMenu signOut={handleSignout} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
}
