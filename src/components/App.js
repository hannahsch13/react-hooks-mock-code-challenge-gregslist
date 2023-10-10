import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const list = 'http://localhost:6001/listings'

  return (
    <div className="app">
      <Header />
      <ListingsContainer list={list}/>
    </div>
  );
}

export default App;
