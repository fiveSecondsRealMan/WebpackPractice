'use strict';

let mainElement = document.querySelector('.main');

require.ensure([], () => {
  let Button = require('components/Button').default;
  let button = new Button(mainElement);
  
  button.render();
}, 'button');
