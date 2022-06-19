import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { users, locations, events, participants } from "./data.js";
import { nanoid } from "nanoid";

const typeDefs = gql`
  #  Event
  type Event {
    id: ID!
    title: String!
    desc: String
    date: String!
    from: String!
    to: String!
    location_id: ID
    user_id: ID
    user: User
    location: Location
  }
  input CreateEventInput {
    title: String!
    desc: String!
    date: String!
    from: String!
    to: String!
  }

  input UpdateEventInput {
    title: String
    desc: String
    date: String
    from: String
    to: String
  }

  # Location
  type Location {
    id: ID!
    name: String!
    desc: String
    lat: Float
    lng: Float
  }
  input CreateLocationInput {
    name: String!
    desc: String
    lat: Float
    lng: Float
  }
  input UpdateLocationInput {
    name: String
    desc: String
    lat: Float
    lng: Float
  }

  # User
  type User {
    id: ID!
    username: String!
    email: String!
  }

  input CreateUserInput {
    username: String!
    email: String!
  }
  input UpdateUserInput {
    username: String
    email: String
  }

  # Participant
  type Participant {
    id: ID!
    user_id: ID!
    event_id: ID!
    user: User!
    event: Event!
  }

  type Query {
    # Event
    events: [Event!]!
    event(id: ID!): Event!

    # Location
    locations: [Location!]!
    location(id: ID!): Location!

    # User
    users: [User!]!
    user(id: ID!): User!

    #Participant
    participants: [Participant!]!
    participant(id: ID!): Participant!
  }

  type Mutation {
    # Event
    createEvent(data: CreateEventInput!): Event!
    updateEvent(id: ID!, data: UpdateEventInput!): Event!
    deleteEvent(id: ID!): Event!
    deleteAllEvents: DeleteAllOutput!
    # Location
    createLocation(data: CreateLocationInput!): Location!
    updateLocation(id: ID!, data: UpdateLocationInput!): Location!
    deleteLocation(id: ID!): Location!
    deleteAllLocations: DeleteAllOutput!

    # User
    createUser(data: CreateUserInput!): User!
    updateUser(id: ID!, data: UpdateUserInput!): User!
    deleteUser(id: ID!): User!
    deleteAllUsers: DeleteAllOutput!
  }
  type DeleteAllOutput {
    deletedCount: Int!
  }
`;

const resolvers = {
  Mutation: {
    // event
    createEvent: (parent, { data }) => {
      const newEvent = {
        id: nanoid(),
        ...data,
      };

      events.push(newEvent);
      return newEvent;
    },
    updateEvent: (parent, { id, data }) => {
      const updated_index = events.findIndex((ev) => ev.id == id);
      if (updated_index === -1) {
        return new Error("event not found");
      }
      const updatedEvent = (events[updated_index] = {
        ...events[updated_index],
        ...data,
      });
      return updatedEvent;
    },
    deleteEvent: (parent, { id }) => {
      const deleted_index = events.findIndex((ev) => ev.id == id);
      if (deleted_index === -1) {
        return new Error("event not found");
      }
      const deletedItem = events[deleted_index];
      events.splice(deleted_index, 1);
      return deletedItem;
    },
    deleteAllEvents: () => {
      const length = events.length;
      events.splice(0, length);
      return { deletedCount: length };
    },

    // location
    createLocation: (parent, { data }) => {
      const newLocation = {
        id: nanoid(),
        ...data,
      };
      locations.push(newLocation);
      return newLocation;
    },
    updateLocation: (parent, { id, data }) => {
      const updated_index = locations.findIndex((lo) => lo.id == id);
      if (updated_index === -1) {
        return new Error("location not found");
      }
      const updatedLocation = (locations[updated_index] = {
        ...locations[updated_index],
        ...data,
      });
      return updatedLocation;
    },
    deleteLocation: (parent, { id }) => {
      const deleted_index = locations.findIndex((lo) => lo.id == id);
      if (deleted_index === -1) {
        return new Error("location not found");
      }
      const deletedItem = locations[deleted_index];
      locations.splice(deleted_index, 1);
      return deletedItem;
    },
    deleteAllLocations: () => {
      const length = locations.length;
      locations.splice(0, length);
      return { deletedCount: length };
    },
    // user
    createUser: (parent, { data }) => {
      const newUser = {
        id: nanoid(),
        ...data,
      };
      users.push(newUser);
      return newUser;
    },
    updateUser: (parent, { id, data }) => {
      const updated_index = users.findIndex((us) => us.id == id);
      if (updated_index === -1) {
        return new Error("user not found");
      }

      const updatedUser = (users[updated_index] = {
        ...users[updated_index],
        ...data,
      });
      return updatedUser;
    },
    deleteUser: (parent, { id }) => {
      const deleted_index = users.findIndex((us) => us.id == id);
      if (deleted_index === -1) {
        return new Error("user not found");
      }
      const deletedItem = users[deleted_index];
      users.splice(deleted_index, 1);
      return deletedItem;
    },
    deleteAllUsers: () => {
      const length = users.length;
      users.splice(0, length);
      return { deletedCount: length };
    },
  },

  Query: {
    // event
    events: () => events,
    event: (parent, args) => events.find((event) => event.id == args.id),

    // location
    locations: () => locations,
    location: (parent, args) =>
      locations.find((location) => location.id == args.id),

    // user
    users: () => users,
    user: (parent, args) => users.find((user) => user.id == args.id),

    // participant
    participants: () => participants,
    participant: (parent, args) =>
      participants.find((participant) => participant.id == args.id),
  },

  Participant: {
    user: (parent, args) => users.find((user) => user.id == parent.user_id),
    event: (parent, args) => events.find((e) => e.id == parent.event_id),
  },

  Event: {
    user: (parent, args) => users.find((user) => user.id == parent.user_id),
    location: (parent, args) =>
      locations.find((loc) => loc.id == parent.location_id),
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log("server is up");
});
