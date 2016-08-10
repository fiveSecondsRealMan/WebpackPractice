'use strict';

let mainElement = document.querySelector('.main');

  let Button = require('components/Button').default;
  let button = new Button(mainElement);

  button.render();
