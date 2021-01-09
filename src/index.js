import _ from 'lodash';
import printMe from './print.js'

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'Mukesh'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(document.createElement('br'));
    element.appendChild(document.createElement('br'));
    element.appendChild(document.createElement('br'));
    element.appendChild(btn);
  
    return element;
  }
  
  document.body.appendChild(component());