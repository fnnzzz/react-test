import React from 'react';
import { Link } from 'react-router';


export default class Nav extends React.Component {
  render() {

    return (

      <div class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <a href="#" class="navbar-brand">TestShop</a>
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="navbar-collapse collapse" id="navbar-main">
            <ul class="nav navbar-nav">
              <li>
                <Link activeClassName="active_link_header" to='/'>Main page</Link>
              </li>
             <li>
                <Link activeClassName="active_link_header" to='about'>About page</Link>
              </li>
             <li>
                <Link activeClassName="active_link_header" to='contacts'>Contacts</Link>
              </li>         
            </ul>

            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Войти</a></li>
                <li><a href="#">Регистрация</a></li>
            </ul>

              <ul class="nav navbar-nav navbar-right count_order_ul">
                  <li><p class="count_order_p">Количество ваших покупок: 5</p></li>
              </ul>

          </div>
        </div>
      </div>

    );
  }
}