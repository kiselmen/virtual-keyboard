import {keyboardDataObject} from './keyboardDataObject.js'

window.addEventListener('DOMContentLoaded', () => {
    const keyboard = new myKeyboard();
    keyboard.initialize();
  });

  
class myKeyboard {
    constructor() {
        if (localStorage.getItem('language') === 'ru') {
          this.language = 'ru'; 
        } else {
          this.language = 'en';
        }
    }

    initialize(){

      this.mainContainer = document.createElement('main');
      this.title = document.createElement('h1');
      this.textContainer = document.createElement('textarea');
      this.keyboard = document.createElement('div');
      this.info = document.createElement('p');
  
      this.mainContainer.classList.add('container');
      this.title.classList.add('title');
      this.title.textContent = 'Virtual keyboard';
      this.textContainer.classList.add('textContainer');
      this.keyboard.classList.add('keyboard');
  
      this.allKeys = {};
      keyboardDataObject.forEach( (row) => {
        const keyboardRow = document.createElement('div');
        keyboardRow.classList.add('keyboard-row');
        row.forEach( (key) => {
            this.allKeys[key.keyCode] = {writing : key.writing, hasFunction : key.hasFunction};
            const currentKey = document.createElement('button');
            currentKey.classList.add('keyboard-key');
            currentKey.classList.add(key.widthClass);
            currentKey.dataset.keyCode = key.keyCode;
            currentKey.setAttribute('type', 'button');
            keyboardRow.append(currentKey);
        })
        this.keyboard.append(keyboardRow);
      })
      console.log(this.allKeys);
      this.info.classList.add('info');
      this.info.textContent ='To switch ENG/РУС, press Ctrl+Alt on Windows/Linux or Cmd+Alt on Mac.';
  
      this.mainContainer.append(this.title);
      this.mainContainer.append(this.textContainer);
      this.mainContainer.append(this.keyboard);
      this.mainContainer.append(this.info);
  
      document.body.append(this.mainContainer);
      
      this.showSymbols(this.language)
    }

    showSymbols(language = this.language){
      this.keyboard.querySelectorAll('.keyboard-key').forEach( (key) =>{
        console.log(key);
        key.textContent = this.allKeys[key.dataset.keyCode].writing[language];
      })
  }

}