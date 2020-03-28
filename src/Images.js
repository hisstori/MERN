// import React, { Component } from "react";
// import "./App";
// // import ReactDOM from 'react-dom';
// // import axios from 'axios';
// // import { render } from '@testing-library/react';

// class Image extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null
//     };
//   }
//   componentDidMount() {
//     if (!this.state.data) {
//       fetch("http://localhost:8000/")
//         .then(res => res.json())
//         .then(res => {
//           this.setState({
//             data: res
//           });
//           console.log(res);
//         });
//     }
//   }
//   render() {
//     if (this.state.data) {
//       let info = this.state.data.map(item => {
//         return (
//           <div> key={item.id}
//             <div>{item.thumbnailUrl}</div>
//             <div>{item.title}</div>
//           </div>
//         );
//       });
//       return (
//         <div>{info}</div>
//       );
//     }
//     return null;
//   }
// }

// export default Image;
