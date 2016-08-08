'use strict';

import template from './button.html';
import './button.css';

export default class Button {

  constructor(node) {
    this.node = node;
  }

  bindEvent() {
    this.node.addEventListener('click', () => this.handleClick(), false);
  }

  handleClick() {
    alert('this is a button');
  }

  render() {
    this.node.innerHTML = template;
    this.bindEvent();
  }

}
