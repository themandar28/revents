import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm({ setFormOpen }) {
  return (
    <Segment clearing>
      <Header>Create New Event</Header>
      <Form>
        <Form.Field>
          <input type="text" placeholder="Enter event name" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Enter Category" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Description" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="City" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Venue" />
        </Form.Field>
        <Form.Field>
          <input type="date" placeholder="Date" />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          type="submit"
          floated="right"
          content="Cancel"
          onClick={() => setFormOpen(false)}
        />
      </Form>
    </Segment>
  );
}
