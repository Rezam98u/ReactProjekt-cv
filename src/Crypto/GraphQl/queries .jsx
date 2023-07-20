import { gql } from '@apollo/client'



/////////////////////////////
// const GET_Data = gql(`
// query GET_Data {
//    coins ( markets { where: { vs_currency : usd  }   }  )

//         {
//             id
//              symbol
//                 name
//              current_price
//         }

// } `

// )


/////////////////////////////
// export const GET_Data = gql`

//     type Coin {
//         id: ID
//         name: String
//         symbol: String
//         rank: Int
//         quotes: Quotes
//     }

//     type Quotes {
//         USD: USD
//     }

//     type USD {
//         price: Float
//         market_cap: Float
//         percent_change_1h: Float
//     }

//     type CoinById {
//         id: ID
//         name: String
//         symbol: String

//         rank: Int
//         is_new: Boolean

//         is_active: Boolean
//         type: String
//         tags: [Tag]

//         team: [Team]

//         description: String
//         message: String
//         open_source: Boolean
//         hardware_wallet: Boolean
//         started_at: String
//         development_status: String
//         proof_type: String
//         org_structure: String
//         hash_algorithm: String
//         platform: String
//         whitePaper: Object
//         links: Link
//         links_extended: Object
//     }

//     type Tag {
//         id: String
//         name: String
//         coin_counter: Int   # Number of currencies with this tag
//         ico_counter: Int    # Number of ic projects with this tag
//     }

//     type Team {
//         name: String
//         position: String
//     }

//     type Link {
//         explorer: [String]
//         facebook: [String]
//         reddit: [String]
//         source_code: [String]
//         website: [String]
//         youtube: [String]
//     }

//     type Query {
//         coins: [Coin]
//         coin(id: String!): CoinById!
//     }
// `


//////////////////////////// https://rickandmortyapi.com/graphql
// export const GET_Data = gql`
// query {
//     characters(page: 2, filter: { name: "rick" }) {
//       info {
//         count
//       }
//       results {
//         name
//       }
//     }
//     location(id: 1) {
//       id
//     }
//     episodesByIds(ids: [1, 2]) {
//       id
//     }
//   }
// `


////////////////////////////
// export const GET_Data = gql `
// query {
//     coin (id: "bitcoin") {
//       marketData {
//         currentPrice {
//           usd
//         }
//       }
//     }
//   }
//   `


// export const GET_Data = gql`
// query {
//   bitcoin: cryptocurrency(id: "bitcoin") {
//     symbol
//     marketData {
//       currentPrice {
//         usd
//       }
//     }
//   }
//   ethereum: cryptocurrency(id: "ethereum") {
//     symbol
//     marketData {
//       currentPrice {
//         usd
//       }
//     }
//   }
// }
// `
