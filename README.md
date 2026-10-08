# React Dropdown

A small React practice project that shows two ways to build a dropdown menu: a hand-made component written with React state and CSS, and one built with the [react-select](https://react-select.com/) library. The page asks "Should you use a dropdown ?" and offers the options "Yes" and "Probably not".

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- `Dropdown` (`src/Dropdown.js`): a custom dropdown that toggles its option list on click and stores the selected value through `selected` / `setSelected` props. Styled in `src/Dropdown.css`.
- `Dropdown2` (`src/Dropdown2.js`): the same two options rendered with the `Select` component from `react-select`.

`App.js` currently renders `Dropdown2`. The custom `Dropdown` is imported but commented out; to try it, uncomment this line in `src/App.js`:

```jsx
{/* <Dropdown selected={selected} setSelected={setSelected} /> */}
```

## Tech Stack

- React 18
- react-select 5
- Create React App (`react-scripts` 5)

## Project Structure

```
React-Dropdown/
├── public/            # index.html, icons, manifest
├── src/
│   ├── App.js         # Page heading and the active dropdown
│   ├── App.css
│   ├── Dropdown.js    # Custom dropdown component
│   ├── Dropdown.css
│   ├── Dropdown2.js   # react-select dropdown
│   ├── index.js       # Entry point
│   └── index.css
└── package.json
```

## Prerequisites

- [Node.js](https://nodejs.org/) and npm

## Installation

```bash
git clone https://github.com/iSouvikKhan/React-Dropdown.git
cd React-Dropdown
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page reloads when you make changes.

### `npm test`

Launches the test runner in interactive watch mode. The project currently contains no test files.

### `npm run build`

Builds the app for production into the `build` folder.

### `npm run eject`

**Note: this is a one-way operation.** Copies the Create React App build configuration (webpack, Babel, ESLint, etc.) into the project so you can customize it.

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [react-select documentation](https://react-select.com/home)
