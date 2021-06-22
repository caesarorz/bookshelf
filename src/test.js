// const bookshelf = {}

// const books = [
//     {title: "My", shelf: "wantToRead"},
//     {title: "My Good read", shelf: "read"},
//     {title: "My Good read 2", shelf: "read"},
//     {title: "My Good read 3", shelf: "read"},
//     {title: "My Ness curre", shelf: "currentlyReading"},
//     {title: "My Ness curre", shelf: "currentlyReading"}
// ]

// const categories = [
//     { shelfID: 'currentlyReading', title: 'Currently Reading' },
//     { shelfID: 'wantToRead', title: 'Want to Read' },
//     { shelfID: 'read', title: 'Read' }
// ]

// categories.forEach(category => {
//     const filteredBooks = books.filter(book => book.shelf === category.shelfID)
//     console.log(category.shelfID)
//     console.log(filteredBooks)
//     bookshelf[category.shelfID] = [...filteredBooks]
//     //bookshelf[category.shelfID].listOfBooks = 
// })
// console.log("--------------------------------")
// console.log(bookshelf)


// const treeState = {
//     recipes: [
//       {}
//     ],
//     ingredients: [
//       {}
//     ],
//     products: [
//       {},
//     ]
//   }

/* Create A Reducer
 *
 * You need to create a reducer called "appReducer" that accepts two arguments:
 * - First, an array containing information about ice cream 
 * - Second, an object with a 'DELETE_FLAVOR' `type` key
 * (i.e., the object contains information to delete the flavor from the state)
 *
 * The action your reducer will receive will look like this:
 * { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }
 *
 * And the initial state will look something like this (as such, refrain 
 * from passing in default values for any parameters!):
 * [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }];
*/
const state = [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }]
const action = { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }

function appReducer(state=[], action) {
  if(action.type === 'DELETE_FLAVOR') { 
      state.splice(state.findIndex(ice => ice.flavor === action.flavor), 1)
    }
    return state
}



appReducer(state, action)

console.log(state)





