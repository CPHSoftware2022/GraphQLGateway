const { buildSchema, Source } = require('graphql');

const source = new Source(/* GraphQL */`
schema {
  query: Query
  mutation: Mutation
});

type Query{
  # Fetch All Couriers
  findAllCouriers: [Courier]
  findOneCourier(id: ID): [Courier]
  findAvailableCouriers(available: Boolean): [Courier]

}

type Mutation {
#    # Update the courier status
  addCourier(firstName: String, lastName: String, email: String, password: String, available: Boolean): Courier
  update(id: ID, firstName: String, lastName: String, email: String, password: String, available: Boolean): Courier
  delete(id: ID): Courier
}

type Courier {
  courierId: ID!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  available: Boolean!
}

`, `.mesh/sources/order_gateway/schema.graphql`);

module.exports = buildSchema(source, {
  assumeValid: true,
  assumeValidSDL: true
});