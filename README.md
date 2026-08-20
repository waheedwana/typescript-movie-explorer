# TypeScript Movie Explorer

A movie search application built with **TypeScript**, using the **OMDb API** to search for movies and display useful movie information.

## Live Demo

[View Live Website](https://waheedwana.github.io/typescript-movie-explorer/)

## Features

* Search for movies by name
* Display movie title, release year, poster, and IMDb rating
* Load a default movie when the app starts
* Fetch movie details using the IMDb ID
* Handle API errors with `try...catch`
* Responsive and simple user interface

## Built With

* HTML5
* CSS3
* TypeScript
* Fetch API
* Async/Await
* OMDb API

## TypeScript Practice

This project was built to practice using TypeScript in a real project rather than only studying individual concepts.

I practiced:

* Interfaces and type definitions
* Type assertions
* Optional chaining and nullish coalescing
* DOM manipulation with TypeScript
* Functions and typed parameters
* Modules and imports/exports
* Async/await and API requests
* Error handling with `try...catch`

## How It Works

The user searches for a movie, and the application sends a request to the OMDb API.

The app first gets the movie search result and IMDb ID, then uses that ID to request the movie's detailed information.

```text
Search movie
     ↓
Get IMDb ID
     ↓
Get movie details
     ↓
Display information
```

## Project Structure

```text
src/
├── api.ts
├── main.ts
└── type.ts
```

* `api.ts` — handles API requests
* `main.ts` — handles application logic and DOM updates
* `type.ts` — contains TypeScript interfaces

## Author

**Waheedullah Ameen**

Self-taught web developer focused on JavaScript, TypeScript, and React.

[GitHub Profile](https://github.com/waheedwana)

> **Code. Learn. Build. Repeat.**
