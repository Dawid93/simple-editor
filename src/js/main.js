"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below
const saveKey = "textKey";

const saveBtn = document.querySelector('.button__save--js');
const loadBtn = document.querySelector('.button__load--js');
const textArea = document.querySelector('.form__textArea--js');

saveBtn.addEventListener('click', saveTextAres);
loadBtn.addEventListener('click', loadTextArea);

function saveTextAres(){
  localStorage.setItem(saveKey, textArea.value);
  console.log(textArea.value);
}

function loadTextArea(){
  let text = localStorage.getItem(saveKey);
  textArea.value = text;
}


