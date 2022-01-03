import { Link } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedInMenu({ signOut }) {
  return (
    <Menu.Item position="right">
      <Image src="/assets/user.png" avatar spaced="right" />
      <Dropdown pointing="top left" text="Bob">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item onClick={signOut} text="Logout" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
