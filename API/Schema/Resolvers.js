// Import books
import { book_a, book_b } from "../data/exporter.js"


// Functions to manipulate the existing data in tokens
const createToken = (obj) => obj.value
const createContent = (item, obj) => item.content.slice(obj.position[0], obj.position[1])
const creatIsTappable = (obj) => {
  if ( obj.value.length === 0 ) return false
  else return true
}


// Data conversion logic into a consumable token; takes in a book as a argument. This function returns the complete converted book
const logic = ( book ) => {

  // Converted contents of all the pages
  var covertedBookContents = new Array()
  
  // Iteration over the pages filed of the bool
  book.pages.map(item => {

    // page_content holds the page contents
    var page_content = new Array()

    for ( let i=0; i<item.tokens.length; i++ ){
      var index = i
      var token = createToken( item.tokens[i] )
      var content = createContent( item, item.tokens[i] )
      var isTappable = creatIsTappable( item.tokens[i] )

      const obj = new Object()

      obj.index = index
      obj.token =  token
      obj.content =  content,
      obj.isTappable= isTappable
      
      page_content.push(obj)

    }

    const covertedPageContents = new Object();

    covertedPageContents.pageIndex =  item.pageIndex
    covertedPageContents.content = item.content
    covertedPageContents.tokens= page_content

    covertedBookContents.push( covertedPageContents )

  })

  const completeConvertedBook = new Object()

  completeConvertedBook.title = book.title
  completeConvertedBook.author = book.author
  completeConvertedBook.pages = [ ...covertedBookContents ]

  return completeConvertedBook

}


// Converted books
const convertedBooks = [ logic(book_a), logic(book_b) ]

// Resolvers
const resolvers = {
    Query: {
        books: () => convertedBooks,
        book: ( parent, args, context, info ) => convertedBooks.find( b => b.title === args.title )
      },
}


export default resolvers 

