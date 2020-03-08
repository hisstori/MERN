import React, { Component } from "react";
import "./App.css";
import "./App.sass";
import "bulma/css/bulma.css";
import Title from "./Titles";
import Categories from "./Categories";
import Descriptions from "./Descriptions";
import Home from "./Home";
import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <section class="hero is-success is-fullheight">
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Documentation
            </a>
            <span class="navbar-item">
              <a class="button is-success is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
        Title
      </h1>
      <h2 class="subtitle">
        Subtitle
      </h2>
    </div>
  </div>

  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section> 
  /* /* //   <div className="App">
    //     <Link to="/">
    //     <h1 className="title">Home</h1>
    //     </Link>

    //     <p className="subtitle"></p>

    //     <div class="tabs">
    //       <ul>
    //         <li class="is-active">
    //           <Link to="/titles">
    //             <span class="icon is-medium">
    //               <i class="fas fa-image" aria-hidden="true"></i>
    //             </span>
    //             <span>Titles</span>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/categories">
    //             <span class="icon is-medium">
    //               <i class="fas fa-image" aria-hidden="true"></i>
    //             </span>
    //             <span>Categories</span>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/descriptions">
    //           <span class="icon is-medium">
    //             <i class="fas fa-image" aria-hidden="true"></i>
    //           </span>
    //           <span>Descriptions</span>
    //           </Link>
    //         </li>
    //         <li>
    //           <a>Documents</a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="field">
    //       <div className="control">
    //         <input className="input" type="text" placeholder="Input" />
    //       </div>
    //     </div>

    //     <div className="field">
    //       <p className="control">
    //         <span className="select">
    //           <select>
    //             <option>Select dropdown</option>
    //           </select>
    //         </span>
    //       </p>
    //     </div>

    //     <div className="buttons">
    //       <div className="button is-primary">Primary</div>
    //       <div className="button is-link">Link</div>
    //       <div>
    //         <h1>This is the homepage!</h1>
    //         <p>Where you can find the programming books you need!</p>
    //       </div>
    //       <main>
    //         <Route path="/" component={Home} />
    //         <Route path="/titles" component={Title} />
    //         <Route path="/categories" component={Categories} />
    //         <Route path="/descriptions" component={Descriptions} />
    //       </main>
    //     </div>
    //   </div> */ 
    );
  }
}
export default App;
