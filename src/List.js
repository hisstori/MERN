import React, { Component, useEffect, useState } from "react";

export default function List({ books }) {
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            Title:
            <span>{book.title}</span>
            Year:
            <span>{book.year}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}