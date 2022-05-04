import { keyboardDataObject } from './keyboardDataObject.js';

class MyKeyboard {
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

  initialize() {
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
    keyboardDataObject.forEach((row) => {
      const keyboardRow = document.createElement('div');
      keyboardRow.classList.add('keyboard-row');
      row.forEach((key) => {
        this.allKeys[key.keyCode] = { writing: key.writing, hasFunction: key.hasFunction };
        const currentKey = document.createElement('button');
        currentKey.classList.add('keyboard-key');
        currentKey.classList.add(key.widthClass);
        currentKey.dataset.keyCode = key.keyCode;
        currentKey.setAttribute('type', 'button');
        keyboardRow.append(currentKey);
      });
      this.keyboard.append(keyboardRow);
    });

    this.info.classList.add('info');
    this.info.textContent = 'To switch ENG/РУС, press Ctrl+Alt on Windows/Linux or Cmd+Alt on Mac.';

    this.mainContainer.append(this.title);
    this.mainContainer.append(this.textContainer);
    this.mainContainer.append(this.keyboard);
    this.mainContainer.append(this.info);

    document.body.append(this.mainContainer);

    this.showSymbols(this.language);

    this.addActivity();
  }

  showSymbols(language = this.language, upper = this.isUpperCase) {
    const keyboard = this.keyboard.querySelectorAll('.keyboard-key');
    for (let i = 0; i < keyboard.length; i += 1) {
      keyboard[i].textContent = this.allKeys[keyboard[i].dataset.keyCode].writing[language][upper];
    }
  }

  addActivity() {
    this.textContainer.focus();

    this.textContainer.addEventListener('blur', () => {
      this.textContainer.focus();
    });

    document.addEventListener('keydown', (event) => {
      event.stopImmediatePropagation();

      let keyPress = null;
      document.querySelectorAll('.keyboard-key').forEach((key) => {
        if (key.dataset.keyCode === event.code) {
          keyPress = key;
        }
      });

      if (keyPress) {
        keyPress.classList.add('active');
        event.preventDefault();
      } else {
        return;
      }

      if (!this.allKeys[keyPress.dataset.keyCode].hasFunction) {
        this.insertText(this.allKeys[keyPress.dataset.keyCode].writing[this.language][this.isUpperCase]);
      } else if (event.code === 'CapsLock') {
        this.isUpperCase = !this.isUpperCase;
        this.isCaps = !this.isCaps;
        this.showSymbols(this.language, this.isUpperCase);
      } else if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {
        if (!event.repeat) {
          this.isUpperCase = !this.isUpperCase;
          this.showSymbols(this.language, this.isUpperCase);
        }
      } else if ((event.code === 'ControlLeft') || (event.code === 'ControlRight') || (event.metaKey)) {
        if (!event.repeat) {
          this.isCtr = !this.isCtr;
        }
      } else if ((event.code === 'AltLeft') || (event.code === 'AltRight')) {
        if (!event.repeat) {
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
      } else if (event.code === 'Tab') {
        this.insertText('\t');
      } else if (event.code === 'Enter') {
        this.insertText('\n');
      } else if (event.code === 'Backspace') {
        this.doBackspace();
      } else if (event.code === 'Delete') {
        this.doDelete();
      } else if (event.code === 'ArrowLeft') {
        this.doLeft();
      } else if (event.code === 'ArrowRight') {
        this.doRight();
      } else if (event.code === 'ArrowDown') {
        this.doDown();
      } else if (event.code === 'ArrowUp') {
        this.doUp();
      }
    });

    document.addEventListener('keyup', (event) => {
      event.stopImmediatePropagation();
      event.preventDefault();

      let keyPress = null;
      document.querySelectorAll('.keyboard-key').forEach((key) => {
        if (key.dataset.keyCode === event.code) {
          keyPress = key;
        }
      });
      if (!keyPress) return;

      if (event.code === 'CapsLock') {
        if (!this.isCaps) {
          setTimeout(() => {
            keyPress.classList.remove('active');
          }, 50);
        }
      } else if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {
        this.isUpperCase = !this.isUpperCase;
        this.showSymbols(this.language, this.isUpperCase);
        setTimeout(() => {
          keyPress.classList.remove('active');
        }, 50);
      } else if ((event.code === 'ControlLeft') || (event.code === 'ControlRight')) {
        this.isCtr = !this.isCtr;
        setTimeout(() => {
          keyPress.classList.remove('active');
        }, 50);
      } else {
        setTimeout(() => {
          keyPress.classList.remove('active');
        }, 50);
      }
    });

    this.keyboard.addEventListener('click', (event) => {
      if (event.target.classList.contains('keyboard-key')) {
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

  insertText(symbol) {
    const cursorStart = this.textContainer.selectionStart;
    this.textContainer.value = this.textContainer.value.slice(0, cursorStart) + symbol + this.textContainer.value.slice(this.textContainer.selectionEnd);

    this.textContainer.selectionStart = cursorStart + symbol.length;
    this.textContainer.selectionEnd = this.textContainer.selectionStart;
  }

  doBackspace() {
    const cursorStart = this.textContainer.selectionStart;
    if (this.textContainer.selectionEnd !== this.textContainer.selectionStart) {
      this.textContainer.value = this.textContainer.value.slice(0, cursorStart) + this.textContainer.value.slice(this.textContainer.selectionEnd);
      this.textContainer.selectionStart = cursorStart;
      this.textContainer.selectionEnd = this.textContainer.selectionStart;
    } else if (this.textContainer.selectionStart !== 0) {
      this.textContainer.value = this.textContainer.value.slice(0, cursorStart - 1) + this.textContainer.value.slice(this.textContainer.selectionEnd);
      this.textContainer.selectionStart = cursorStart - 1;
      this.textContainer.selectionEnd = this.textContainer.selectionStart;
    }
  }

  doDelete() {
    const cursorStart = this.textContainer.selectionStart;
    if (this.textContainer.selectionEnd !== this.textContainer.selectionStart) {
      this.textContainer.value = this.textContainer.value.slice(0, cursorStart) + this.textContainer.value.slice(this.textContainer.selectionEnd);
      this.textContainer.selectionStart = cursorStart;
      this.textContainer.selectionEnd = this.textContainer.selectionStart;
    } else if (cursorStart < this.textContainer.value.length) {
      this.textContainer.value = this.textContainer.value.slice(0, cursorStart) + this.textContainer.value.slice(this.textContainer.selectionEnd + 1);
      this.textContainer.selectionStart = cursorStart;
      this.textContainer.selectionEnd = this.textContainer.selectionStart;
    }
  }

  doLeft() {
    const cursorStart = this.textContainer.selectionStart;
    this.textContainer.selectionStart -= this.textContainer.selectionStart;
    this.textContainer.selectionStart = Math.max(0, cursorStart - 1);
    this.textContainer.selectionEnd = this.textContainer.selectionStart;
  }

  doRight() {
    const cursorStart = this.textContainer.selectionStart;
    this.textContainer.selectionStart += this.textContainer.selectionStart;
    this.textContainer.selectionStart = Math.min(this.textContainer.value.length, cursorStart + 1);
    this.textContainer.selectionEnd = this.textContainer.selectionStart;
  }

  buildRows() {
    let pos = 0;
    let posAbsolute = 0;
    let str = this.textContainer.value;
    const strArray = [];
    while (pos >= 0) {
      pos = str.indexOf('\n');
      if (pos === -1) {
        strArray.push({ str, posAbsolute });
        str = '';
      } else {
        strArray.push({ str: str.slice(0, pos), posAbsolute });
        str = str.slice(pos + 1);
        posAbsolute = posAbsolute + pos + 1;
        pos = 0;
      }
    }
    return strArray;
  }

  doUp() {
    const cursorStart = this.textContainer.selectionStart;

    const strArray = this.buildRows();

    for (let index = 0; index < strArray.length; index += 1) {
      if (strArray[index].posAbsolute + strArray[index].str.length >= cursorStart) {
        const cursorPosition = cursorStart - strArray[index].posAbsolute;
        if (index === 0) {
          this.textContainer.selectionStart = 0;
          this.textContainer.selectionEnd = this.textContainer.selectionStart;
          return;
        }
        const newPosition = Math.min(strArray[index - 1].posAbsolute + cursorPosition, strArray[index - 1].posAbsolute + strArray[index - 1].str.length);
        this.textContainer.selectionStart = newPosition;
        this.textContainer.selectionEnd = this.textContainer.selectionStart;
        return;
      }
    }
  }

  doDown() {
    const cursorStart = this.textContainer.selectionStart;

    const strArray = this.buildRows();

    for (let index = 0; index < strArray.length; index += 1) {
      if (strArray[index].posAbsolute + strArray[index].str.length >= cursorStart) {
        const cursorPosition = cursorStart - strArray[index].posAbsolute;
        if (index === strArray.length) {
          this.textContainer.selectionStart = this.textContainer.value.length;
          this.textContainer.selectionEnd = this.textContainer.selectionStart;
          return;
        }
        const newPosition = Math.min(strArray[index + 1].posAbsolute + cursorPosition, strArray[index + 1].posAbsolute + strArray[index + 1].str.length);
        this.textContainer.selectionStart = newPosition;
        this.textContainer.selectionEnd = this.textContainer.selectionStart;
        return;
      }
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const keyboard = new MyKeyboard();
  keyboard.initialize();
});
