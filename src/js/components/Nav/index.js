import React from 'react';
import { Link } from 'react-router';


export default class Nav extends React.Component {
  render() {
    <div class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a href="./index.php" class="navbar-brand">TestShop</a>
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse" id="navbar-main">
          <ul class="nav navbar-nav">
            <li>
              <Link to='main'>Main page</Link>
            </li>
           <li>
              <Link to='about'>About page</Link>
            </li>
           <li>
              <a href="#">Menu-3</a>
            </li>         
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Войти</a></li>
            <li><a href="#">Регистрация</a></li>
          </ul>

        </div>
      </div>
    </div>
  }
}