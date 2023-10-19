

const typeDefs = `
    # Types
    
    type Token {
        content: String
        index: Int
        isTappable: Boolean
        token: String
    }

    type Page {
        content: String
        pageIndex: Int
        tokens: [Token]
        
    }

    type Book {
        title: String
        author: String
        pages: [Page]
    }

    # Queries

    type Query {
        book(title: String!): Book
    }


    type Query {
        books: [Book]
      }


    `

    export default typeDefs 