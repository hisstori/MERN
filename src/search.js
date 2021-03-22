import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import List from "./List";
import "./App.css";
import "bulma/css/bulma.css";

export default function Search() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const API_URL =
      "https://infinite-fjord-09219.herokuapp.com/";
    axios.get(API_URL).then((res) => {
      const books = res.data;
      setBooks(books);
    });
  }, []);

  const filteredBooks =
    search.length === 0
      ? books
      : books.filter((book) =>
          books.title.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div>
      <h5>Search</h5>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <List books={filteredBooks}/>
    </div>
  );
}
