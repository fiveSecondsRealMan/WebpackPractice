'use strict';

let headerElement = document.querySelector('.header');
let mainElement = document.querySelector('.main');

require.ensure([], () => {
  let button = new (require('components/Button').default)(mainElement);
  button.render();
}, 'button');
