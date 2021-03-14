import React, { Component, useEffect, useState } from "react";
import axios from 'axios';
import List from './List';
import "./App.css";
import "bulma/css/bulma.css";

export default function Search() {
  const [books, setBooks] = useState([])  
  const [search, setSearch] = useState("");

  useEffect(() => {
      const API_
  })
  

  return (
    <div>
      <h5>Search</h5>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
