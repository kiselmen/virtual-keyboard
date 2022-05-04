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
        localStorage.setItem('language', this.language);
        this.isUpperCase = false;
        this.isCaps = false;
        this.isCtr = false;
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
      
      this.info.classList.add('info');
      this.info.textContent ='To switch ENG/РУС, press Ctrl+Alt on Windows/Linux or Cmd+Alt on Mac.';
  
      this.mainContainer.append(this.title);
      this.mainContainer.append(this.textContainer);
      this.mainContainer.append(this.keyboard);
      this.mainContainer.append(this.info);
  
      document.body.append(this.mainContainer);
      
      this.showSymbols(this.language);

      this.addActivity();
    }

    showSymbols(language = this.language, upper = this.isUpperCase){
      this.keyboard.querySelectorAll('.keyboard-key').forEach( (key) =>{
        if (upper) {
            if (this.allKeys[key.dataset.keyCode].hasFunction) {
                key.textContent = this.allKeys[key.dataset.keyCode].writing[language];
            } else {
                key.textContent = this.allKeys[key.dataset.keyCode].writing[language].toUpperCase();
            }
        } else {
            key.textContent = this.allKeys[key.dataset.keyCode].writing[language];
        }
      })

    }

    addActivity(){

      this.textContainer.focus();

      this.textContainer.addEventListener('blur', () => {
          this.textContainer.focus();
      });
  
      document.addEventListener('keydown', (event) => {
        event.stopImmediatePropagation();
        event.preventDefault();

        let keyPress = null;
        document.querySelectorAll('.keyboard-key').forEach( (key) => {
            if (key.dataset.keyCode === event.code) {
              keyPress = key;
            }
        })

        if (keyPress) {
            keyPress.classList.add('active');
        } else {
            return;
        }

        if (!this.allKeys[keyPress.dataset.keyCode].hasFunction) {
          this.insertText(this.allKeys[keyPress.dataset.keyCode].writing[this.language]);
        } else {
            if (event.code === 'CapsLock'){
              this.isUpperCase = !this.isUpperCase;
              this.isCaps = !this.isCaps;
              this.showSymbols(this.language, this.isUpperCase);
            }  
            else if ((event.code === 'ShiftLeft')||(event.code === 'ShiftRight')){
              if (!event.repeat){
                this.isUpperCase = !this.isUpperCase;
                this.showSymbols(this.language, this.isUpperCase);
              }
            }
            else if ((event.code === 'ControlLeft')||(event.code === 'ControlRight')){
              if (!event.repeat){
                  this.isCtr = !this.isCtr;
              }
            }
            else if ((event.code === 'AltLeft')||(event.code === 'AltRight')){
              if (!event.repeat){
                  if (this.isCtr) {
                      if (this.language === 'en') {
                        this.language = 'ru';
                      } else {
                        this.language = 'en';
                      }
                      localStorage.setItem('language', this.language);
                      this.showSymbols(this.language, this.isUpperCase);
                  }
              }
            }
        }
      })

      document.addEventListener('keyup', (event) => {
        event.stopImmediatePropagation();
        event.preventDefault();
        
        let keyPress = null;
        document.querySelectorAll('.keyboard-key').forEach( (key) => {
            if (key.dataset.keyCode === event.code) {
              keyPress = key;
            }
        })
        if (!keyPress) return;

        if (event.code === 'CapsLock') {
            if (!this.isCaps) {
              setTimeout(() => {
                keyPress.classList.remove('active');
              }, 50);
            }
        } 
        else if ((event.code === 'ShiftLeft')||(event.code === 'ShiftRight')) {
            this.isUpperCase = !this.isUpperCase;
            this.showSymbols(this.language, this.isUpperCase);
            setTimeout(() => {
                keyPress.classList.remove('active');
            }, 50);
        } 
        else if ((event.code === 'ControlLeft')||(event.code === 'ControlRight')){
            this.isCtr = !this.isCtr;
            setTimeout(() => {
              keyPress.classList.remove('active');
            }, 50);
        }
        else {
          setTimeout(() => {
            keyPress.classList.remove('active');
          }, 50);
        } 
      })

      this.keyboard.addEventListener('click', (event) => {
        if (event.target.classList.contains('keyboard-key')){
          this.textContainer.focus();

          const eventHoldDown = new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            code: event.target.dataset.keyCode,
            view: window,
          });

          document.dispatchEvent(eventHoldDown);
    
          const eventReleased = new KeyboardEvent('keyup', {
            bubbles: true,
            cancelable: true,
            code: event.target.dataset.keyCode,
            view: window,
          });

          document.dispatchEvent(eventReleased);
        }
      });
  
    }

    insertText(chars) {
      console.log(this.textContainer.selectionStart, this.textContainer.selectionEnd);
      if (this.isUpperCase) {
          this.textContainer.value = this.textContainer.value + chars.toUpperCase();
      } else {
        this.textContainer.value = this.textContainer.value + chars;
      }
    }
  
}