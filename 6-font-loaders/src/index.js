import _ from 'lodash';

import './clearButton';

import logo from './assets/images/webpack_logo.png';
import './assets/fonts/Redressed-Regular.ttf';

import style from './index.css';

const LIST_ITEMS = ['Apple', 'orange', 'Banana'];

const btn1 = document.getElementById('button1');
const logoEl = document.getElementById('logo');

function generateList(listItems) {
  const el = document.getElementById('header');
  el.innerHTML = 'Hey i have updated the code !';
  el.classList.add([style.header]);

  const ul = document.getElementById('shoppingList');
  _.forEach(listItems, function (item) {
    const tempEl = document.createElement('li');
    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  });
}

btn1.addEventListener('click', generateList(LIST_ITEMS));

btn1.classList.add([style.button]);

logoEl.src = logo;
