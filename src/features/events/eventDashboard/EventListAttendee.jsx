import { Image, List } from "semantic-ui-react";

export default function EventListAttendee({ attendee }) {
  return (
    <List.Item>
      <Image src={attendee.photoURL} circular size="mini" />
    </List.Item>
  );
}
