const keyboardDataObject = [
  [
    {
      keyCode: 'Backquote',
      hasFunction: false,
      writing: { en: { true: '~', false: '`' }, ru: { true: 'Ё', false: 'ё' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: true },
    },
    {
      keyCode: 'Digit1',
      hasFunction: false,
      writing: { en: { true: '!', false: '1' }, ru: { true: '!', false: '1' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'Digit2',
      hasFunction: false,
      writing: { en: { true: '@', false: '2' }, ru: { true: '@', false: '2' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'Digit3',
      hasFunction: false,
      writing: { en: { true: '#', false: '3' }, ru: { true: '#', false: '3' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'Digit4',
      hasFunction: false,
      writing: { en: { true: '$', false: '4' }, ru: { true: '$', false: '4' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'Digit5',
      hasFunction: false,
      writing: { en: { true: '%', false: '5' }, ru: { true: '%', false: '5' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'Digit6',
      hasFunction: false,
      writing: { en: { true: '^', false: '6' }, ru: { true: '^', false: '6' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'Digit7',
      hasFunction: false,
      writing: { en: { true: '&', false: '7' }, ru: { true: '&', false: '7' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'Digit8',
      hasFunction: false,
      writing: { en: { true: '*', false: '8' }, ru: { true: '*', false: '8' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'Digit9',
      hasFunction: false,
      writing: { en: { true: '(', false: '9' }, ru: { true: '(', false: '9' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'Digit0',
      hasFunction: false,
      writing: { en: { true: ')', false: '0' }, ru: { true: ')', false: '0' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'Minus',
      hasFunction: false,
      writing: { en: { true: '_', false: '-' }, ru: { true: '_', false: '-' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'Equal',
      hasFunction: false,
      writing: { en: { true: '+', false: '=' }, ru: { true: '+', false: '=' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'Backspace',
      hasFunction: true,
      writing: { en: { true: 'Back', false: 'Back' }, ru: { true: 'Back', false: 'Back' } },
      widthClass: 'keyboard-key-type2',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'Delete',
      hasFunction: true,
      writing: { en: { true: 'Del', false: 'Del' }, ru: { true: 'Del', false: 'Del' } },
      widthClass: 'keyboard-key-type2',
      caps: { en: false, ru: false },
    },
  ],
  [
    {
      keyCode: 'Tab',
      hasFunction: true,
      writing: { en: { true: 'Tab', false: 'Tab' }, ru: { true: 'Tab', false: 'Tab' } },
      widthClass: 'keyboard-key-type3',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'KeyQ',
      hasFunction: false,
      writing: { en: { true: 'Q', false: 'q' }, ru: { true: 'Й', false: 'й' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyW',
      hasFunction: false,
      writing: { en: { true: 'W', false: 'w' }, ru: { true: 'Ц', false: 'ц' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyE',
      hasFunction: false,
      writing: { en: { true: 'E', false: 'e' }, ru: { true: 'У', false: 'у' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyR',
      hasFunction: false,
      writing: { en: { true: 'R', false: 'r' }, ru: { true: 'К', false: 'к' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyT',
      hasFunction: false,
      writing: { en: { true: 'T', false: 't' }, ru: { true: 'Е', false: 'е' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyY',
      hasFunction: false,
      writing: { en: { true: 'Y', false: 'y' }, ru: { true: 'Н', false: 'н' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyU',
      hasFunction: false,
      writing: { en: { true: 'U', false: 'u' }, ru: { true: 'Г', false: 'г' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyI',
      hasFunction: false,
      writing: { en: { true: 'I', false: 'i' }, ru: { true: 'Ш', false: 'ш' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyO',
      hasFunction: false,
      writing: { en: { true: 'O', false: 'o' }, ru: { true: 'Щ', false: 'щ' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyP',
      hasFunction: false,
      writing: { en: { true: 'P', false: 'p' }, ru: { true: 'З', false: 'з' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'BracketLeft',
      hasFunction: false,
      writing: { en: { true: '[', false: '{' }, ru: { true: 'Х', false: 'х' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: true },
    },
    {
      keyCode: 'BracketRight',
      hasFunction: false,
      writing: { en: { true: ']', false: '}' }, ru: { true: 'Ъ', false: 'ъ' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: true },
    },
    {
      keyCode: 'Backslash',
      hasFunction: false,
      writing: { en: { true: '|', false: '\\' }, ru: { true: '/', false: '\\' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
  ],
  [
    {
      keyCode: 'CapsLock',
      hasFunction: true,
      writing: { en: { true: 'Caps', false: 'Caps' }, ru: { true: 'Caps', false: 'Caps' } },
      widthClass: 'keyboard-key-type3',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'KeyA',
      hasFunction: false,
      writing: { en: { true: 'A', false: 'a' }, ru: { true: 'Ф', false: 'ф' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyS',
      hasFunction: false,
      writing: { en: { true: 'S', false: 's' }, ru: { true: 'Ы', false: 'ы' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyD',
      hasFunction: false,
      writing: { en: { true: 'D', false: 'd' }, ru: { true: 'В', false: 'в' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyF',
      hasFunction: false,
      writing: { en: { true: 'F', false: 'f' }, ru: { true: 'A', false: 'a' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyG',
      hasFunction: false,
      writing: { en: { true: 'G', false: 'g' }, ru: { true: 'П', false: 'п' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyH',
      hasFunction: false,
      writing: { en: { true: 'H', false: 'h' }, ru: { true: 'Р', false: 'р' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyJ',
      hasFunction: false,
      writing: { en: { true: 'J', false: 'j' }, ru: { true: 'О', false: 'о' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyK',
      hasFunction: false,
      writing: { en: { true: 'K', false: 'k' }, ru: { true: 'Л', false: 'л' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyL',
      hasFunction: false,
      writing: { en: { true: 'L', false: 'l' }, ru: { true: 'Д', false: 'д' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'Semicolon',
      hasFunction: false,
      writing: { en: { true: ':', false: ';' }, ru: { true: 'Ж', false: 'ж' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: true },
    },
    {
      keyCode: 'Quote',
      hasFunction: false,
      writing: { en: { true: '"', false: "'" }, ru: { true: 'Э', false: 'э' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: true },
    },
    {
      keyCode: 'Enter',
      hasFunction: true,
      writing: { en: { true: 'Enter', false: 'Enter' }, ru: { true: 'Enter', false: 'Enter' } },
      widthClass: 'keyboard-key-type3',
      caps: { en: false, ru: false },
    },
  ],
  [
    {
      keyCode: 'ShiftLeft',
      hasFunction: true,
      writing: { en: { true: 'Shift', false: 'Shift' }, ru: { true: 'Shift', false: 'Shift' } },
      widthClass: 'keyboard-key-type3',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'KeyZ',
      hasFunction: false,
      writing: { en: { true: 'Z', false: 'z' }, ru: { true: 'Я', false: 'я' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyX',
      hasFunction: false,
      writing: { en: { true: 'X', false: 'x' }, ru: { true: 'Ч', false: 'ч' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyC',
      hasFunction: false,
      writing: { en: { true: 'C', false: 'c' }, ru: { true: 'С', false: 'с' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyV',
      hasFunction: false,
      writing: { en: { true: 'V', false: 'v' }, ru: { true: 'М', false: 'м' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyB',
      hasFunction: false,
      writing: { en: { true: 'B', false: 'b' }, ru: { true: 'И', false: 'и' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyN',
      hasFunction: false,
      writing: { en: { true: 'N', false: 'n' }, ru: { true: 'Т', false: 'т' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'KeyM',
      hasFunction: false,
      writing: { en: { true: 'M', false: 'm' }, ru: { true: 'Ь', false: 'ь' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: true, ru: true },
    },
    {
      keyCode: 'Comma',
      hasFunction: false,
      writing: { en: { true: '<', false: ',' }, ru: { true: 'Б', false: 'б' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: true },
    },
    {
      keyCode: 'Period',
      hasFunction: false,
      writing: { en: { true: '>', false: '.' }, ru: { true: 'Ю', false: 'ю' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: true },
    },
    {
      keyCode: 'Slash',
      hasFunction: false,
      writing: { en: { true: '?', false: '/' }, ru: { true: ',', false: '.' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'ArrowUp',
      hasFunction: true,
      writing: { en: { true: '⯅', false: '⯅' }, ru: { true: '⯅', false: '⯅' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'ShiftRight',
      hasFunction: true,
      writing: { en: { true: 'Shift', false: 'Shift' }, ru: { true: 'Shift', false: 'Shift' } },
      widthClass: 'keyboard-key-type3',
      caps: { en: false, ru: false },
    },
  ],
  [
    {
      keyCode: 'ControlLeft',
      hasFunction: true,
      writing: { en: { true: 'Ctrl', false: 'Ctrl' }, ru: { true: 'Ctrl', false: 'Ctrl' } },
      widthClass: 'keyboard-key-type2',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'AltLeft',
      hasFunction: true,
      writing: { en: { true: 'Alt', false: 'Alt' }, ru: { true: 'Alt', false: 'Alt' } },
      widthClass: 'keyboard-key-type2',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'Space',
      hasFunction: false,
      writing: { en: { true: ' ', false: ' ' }, ru: { true: ' ', false: ' ' } },
      widthClass: 'keyboard-key-space',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'AltRight',
      hasFunction: true,
      writing: { en: { true: 'Alt', false: 'Alt' }, ru: { true: 'Alt', false: 'Alt' } },
      widthClass: 'keyboard-key-type2',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'ControlRight',
      hasFunction: true,
      writing: { en: { true: 'Ctrl', false: 'Ctrl' }, ru: { true: 'Ctrl', false: 'Ctrl' } },
      widthClass: 'keyboard-key-type2',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'ArrowLeft',
      hasFunction: true,
      writing: { en: { true: '⯇', false: '⯇' }, ru: { true: '⯇', false: '⯇' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'ArrowDown',
      hasFunction: true,
      writing: { en: { true: '⯆', false: '⯆' }, ru: { true: '⯆', false: '⯆' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
    {
      keyCode: 'ArrowRight',
      hasFunction: true,
      writing: { en: { true: '⯈', false: '⯈' }, ru: { true: '⯈', false: '⯈' } },
      widthClass: 'keyboard-key-type1',
      caps: { en: false, ru: false },
    },
  ],
];

class MyKeyboard {
  constructor() {
    if (localStorage.getItem('language') === 'ru') {
      this.language = 'ru';
    } else {
      this.language = 'en';
    }
    localStorage.setItem('language', this.language);
    this.isCaps = false;
    this.isCtr = false;
    this.isShift = false;
    this.shiftCount = 0;
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
        const Obj = { writing: key.writing, hasFunction: key.hasFunction, caps: key.caps };

        this.allKeys[key.keyCode] = Obj;
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

    this.showSymbols(this, this.language);

    this.addActivity();
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

      if (!keyPress) return;
      event.preventDefault();

      const contecst = this;
      function removeKeyActivity(removeEvent) {
        removeEvent.target.removeEventListener('mouseleave', removeKeyActivity);
        if (removeEvent.target.dataset.keyCode !== 'CapsLock' && removeEvent.target.dataset.keyCode !== 'ShiftLeft' && removeEvent.target.dataset.keyCode !== 'ShiftRight') {
          contecst.showSymbols(contecst, contecst.language, contecst.isCaps, contecst.isShift);
          removeEvent.target.classList.remove('active');
        }
      }

      keyPress.addEventListener('mouseleave', removeKeyActivity);

      if (!this.allKeys[keyPress.dataset.keyCode].hasFunction) {
        let CapsParam = this.isCaps && this.allKeys[keyPress.dataset.keyCode].caps[this.language];
        if (this.isShift) CapsParam = !CapsParam;
        this.insertText(this.allKeys[keyPress.dataset.keyCode].writing[this.language][CapsParam]);
      } else if (event.code === 'CapsLock') {
        this.isCaps = !this.isCaps;
        this.showSymbols(this, this.language, this.isCaps, this.isShift);
      } else if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {
        if (!event.repeat) {
          keyPress.addEventListener('mouseleave', removeKeyActivity);
          if (!keyPress.classList.contains('active')) {
            if (this.shiftCount === 0) {
              this.isShift = !this.isShift;
            }
            this.shiftCount += 1;
            this.showSymbols(this, this.language, this.isCaps, this.isShift);
          }
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
            this.showSymbols(this, this.language, this.isCaps, this.isShift);
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
      keyPress.classList.add('active');
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
        if (this.shiftCount === 1) {
          this.isShift = !this.isShift;
        }
        this.shiftCount -= 1;
        this.showSymbols(this, this.language, this.isCaps, this.isShift);
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

    this.keyboard.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('keyboard-key')) {
        if (event.target.dataset.keyCode !== 'ShiftLeft' && event.target.dataset.keyCode !== 'ShiftRight') {
          this.textContainer.focus();

          const eventHoldDown = new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            code: event.target.dataset.keyCode,
            view: window,
          });

          document.dispatchEvent(eventHoldDown);
        }
      }
    });

    this.keyboard.addEventListener('mouseup', (event) => {
      if (event.target.classList.contains('keyboard-key')) {
        if (event.target.dataset.keyCode !== 'ShiftLeft' && event.target.dataset.keyCode !== 'ShiftRight') {
          this.textContainer.focus();

          const eventReleased = new KeyboardEvent('keyup', {
            bubbles: true,
            cancelable: true,
            code: event.target.dataset.keyCode,
            view: window,
          });

          document.dispatchEvent(eventReleased);
        }
      }
    });

    this.keyboard.addEventListener('click', (event) => {
      if (event.target.classList.contains('keyboard-key')) {
        if (event.target.dataset.keyCode === 'ShiftLeft' || event.target.dataset.keyCode === 'ShiftRight') {
          this.textContainer.focus();
          let eventReleased = null;
          if (!event.target.classList.contains('active')) {
            eventReleased = new KeyboardEvent('keydown', {
              bubbles: true,
              cancelable: true,
              code: event.target.dataset.keyCode,
              view: window,
            });
          } else {
            eventReleased = new KeyboardEvent('keyup', {
              bubbles: true,
              cancelable: true,
              code: event.target.dataset.keyCode,
              view: window,
            });
          }

          document.dispatchEvent(eventReleased);
        }
      }
    });
  }

  showSymbols(contecst = this, language = this.language, caps = this.isCaps, shift = this.isShift) {
    const keyboard = this.keyboard.querySelectorAll('.keyboard-key');
    for (let i = 0; i < keyboard.length; i += 1) {
      let CapsParam = caps && this.allKeys[keyboard[i].dataset.keyCode].caps[language];
      if (shift) CapsParam = !CapsParam;
      const elem = contecst.allKeys[keyboard[i].dataset.keyCode].writing[language][CapsParam];
      keyboard[i].textContent = elem;
    }
  }

  insertText(symbol) {
    const cursorStart = this.textContainer.selectionStart;
    const part1 = this.textContainer.value.slice(0, cursorStart);
    const part2 = this.textContainer.value.slice(this.textContainer.selectionEnd);
    this.textContainer.value = part1 + symbol + part2;

    this.textContainer.selectionStart = cursorStart + symbol.length;
    this.textContainer.selectionEnd = this.textContainer.selectionStart;
  }

  doBackspace() {
    const cursorStart = this.textContainer.selectionStart;
    if (this.textContainer.selectionEnd !== this.textContainer.selectionStart) {
      const part1 = this.textContainer.value.slice(0, cursorStart);
      const part2 = this.textContainer.value.slice(this.textContainer.selectionEnd);
      this.textContainer.value = part1 + part2;
      this.textContainer.selectionStart = cursorStart;
      this.textContainer.selectionEnd = this.textContainer.selectionStart;
    } else if (this.textContainer.selectionStart !== 0) {
      const part1 = this.textContainer.value.slice(0, cursorStart - 1);
      const part2 = this.textContainer.value.slice(this.textContainer.selectionEnd);
      this.textContainer.value = part1 + part2;
      this.textContainer.selectionStart = cursorStart - 1;
      this.textContainer.selectionEnd = this.textContainer.selectionStart;
    }
  }

  doDelete() {
    const cursorStart = this.textContainer.selectionStart;
    if (this.textContainer.selectionEnd !== this.textContainer.selectionStart) {
      const part1 = this.textContainer.value.slice(0, cursorStart);
      const part2 = this.textContainer.value.slice(this.textContainer.selectionEnd);
      this.textContainer.value = part1 + part2;
      this.textContainer.selectionStart = cursorStart;
      this.textContainer.selectionEnd = this.textContainer.selectionStart;
    } else if (cursorStart < this.textContainer.value.length) {
      const part1 = this.textContainer.value.slice(0, cursorStart);
      const part2 = this.textContainer.value.slice(this.textContainer.selectionEnd + 1);
      this.textContainer.value = part1 + part2;
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
        const part1 = strArray[index - 1].posAbsolute + cursorPosition;
        const part2 = strArray[index - 1].posAbsolute + strArray[index - 1].str.length;
        const newPosition = Math.min(part1, part2);
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
        const part1 = strArray[index + 1].posAbsolute + cursorPosition;
        const part2 = strArray[index + 1].posAbsolute + strArray[index + 1].str.length;
        const newPosition = Math.min(part1, part2);
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
