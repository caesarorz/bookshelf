# MyReads Project

This is a digital bookshelf, where the readings are divided in 3 main categories: **Currently Reading**,  **Want to read** and  **Read**. Also **none** is present although is not a categorization. 
Books belong to a single bookshelf (category), and that category can be visualized, modified or changed by using the _select_ option for every book. The round-green button at the bottom the of the website leads to the **Search** section of the site. Inside th search section an input is used to type any searched criteria and visualize any amount of books (if any). As before, the _selector_ in every book is given, so visualization, modification of category or remove a book from a given category is also possible. Any change in the **Search** section is reflected in the main site (where all categories or bookshelf is). 

## Instructions

### To run the project locally please

1. Copy the entire workspace without the node_modules or clone the repository.
2. Execute in the CLI: `cd workspace` run `npm install`.
3. To run it, simply `yarn start` or `npm start`.

### Usage

* Starting page: Group of books categorize in **Currently Reading**,  **Want to read** and  **Read**. 
* Every single book has a selector (green button) where:
  1. Visualize the category the book is in.
  2. Change the category.
  3. Remove the book from any category (**none** option).
* At the bottom of the page there is a green circle with an add symbol. That button leads to a **Search** section. 
  1. The _input_ present is used to type any searched criteria and render an amount of books if any. 
  2. As before, visualization, change or remove a book is possible using the _select_.
  3. The arrow in the input take the page back to the book's categories. 

Note: For search criteria use the `SEARCH_TERMS.md`.

## License
The content of this repository is licensed under a Creative Commons Attribution License


<hr>

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
