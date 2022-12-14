const { buildSchema, Source } = require('graphql');
const source = new Source(/* GraphQL */`

schema {
    query: Query,
    mutation: Mutation,
}

type Query {
    findAllCustomerOrders: [CustomerOrderResponse]
    findOneCustomerOrder(id: Int): CustomerOrderResponse
}

type Mutation {
    # Add a new customer order to the database.
    addCustomerOrder(
        order_start : String
        order_end : String
        total_price : Float
        accepted : Boolean
        canceled_reason : String
        delivered : Boolean
        customer_id : Int
        restaurant_id : Int
        feedback_id : Int
        employee_id : Int
    ) : CustomerOrderResponse

    # update a customer order in the database.
    updateCustomerOrder(
        id: ID
        order_start : String
        order_end : String
        total_price : Float
        accepted : Boolean
        canceled_reason : String
        delivered : Boolean
        customer_id : Int
        restaurant_id : Int
        feedback_id : Int
        employee_id : Int
    ) : CustomerOrderResponse

    # delete a customer order from the database.
    deleteCustomerOrder(id: ID) : CustomerOrderResponse
}


# This is the entire customer order entity.
type CustomerOrderResponse {
    id : ID
    order_start : String
    order_end : String
    total_price : Float
    accepted : Boolean
    canceled_reason : String
    delivered : Boolean
    customer_id : Int
    restaurant_id : Int
    feedback_id : Int
    employee_id : Int
}

# This is the entire customer order items entity.
type CustomerOrderItemsResponse {
    customer_order_id: Int
    item_id: Int
}
`, `.mesh/sources/courier_gateway/schema.graphql`);

module.exports = buildSchema(source, {
  assumeValid: true,
  assumeValidSDL: true
});