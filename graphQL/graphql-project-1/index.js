const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { events, locations, users, participants } = require("./data");

const typeDefs = gql`
  type Event {
    id: ID!
    title: String!
    desc: String
    date: String!
    from: String!
    to: String!
    location_id: ID!
    user_id: ID!
    location: Location!
    user: User!
  }
  type Location {
    id: ID!
    name: String!
    desc: String
    lat: Float
    lng: Float
  }

  type User {
    id: ID!
    username: String!
    email: String!
  }
  type Participant {
    id: ID!
    user_id: ID!
    event_id: ID!
    event: Event!
    user: User!
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
    participant(id: ID): Participant!
  }
`;

const resolvers = {
  Query: {
    // event
    events: () => events,
    event: (args) => events.find((event) => event.id == args.id),

    // location
    locations: () => locations,
    location: (args) => locations.find((location) => location.id == args.id),

    // user
    users: () => users,
    user: (args) => users.find((user) => user.id == args.id),

    // participant
    participants: () => participants,
    participant: (args) =>
      participants.find((participant) => participant.id == args.id),
  },

  Event: {
    location: (parent) =>
      locations.find((location) => location.id == parent.location_id),
    user: (parent) => users.find((user) => user.id == parent.user_id),
  },
  Participant: {
    user: (parent) => users.find((user) => user.id == parent.user_id),
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
