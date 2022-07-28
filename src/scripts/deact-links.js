'use strict';
const links = document.getElementsByTagName('a');

for (let i of links)
  i.addEventListener('click', e => e.preventDefault());

