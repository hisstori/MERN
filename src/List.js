import React, { Component, useEffect, useState } from "react";

export default function List({ books }) {
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            Title: 
            <span> {book.title}</span>
            <br />
            Authors: 
            <span> {book.authors[0]}, {book.authors[1]} </span>
            <br />
            =====
          </li>
        ))}
      </ul>
    </div>
  )
}