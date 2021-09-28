//make only one checkbox appeares

function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName('check');
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}

//implpementing toggling between themes
let checkbox_1 = document.querySelector('#checkbox_1');

let checkbox_2 = document.querySelector('#checkbox_2');

let checkbox_3 = document.querySelector('#checkbox_3');

let theme = document.querySelector('#theme_link');

checkbox_1.addEventListener('change', function () {
  theme.href = 'css/theme_1.css';
  document.body.className += ' loaded';
});

checkbox_2.addEventListener('change', function () {
  theme.href = 'css/theme_2.css';
  document.body.className += ' loaded';
});

checkbox_3.addEventListener('change', function () {
  theme.href = 'css/theme_3.css';
  document.body.className += ' loaded';
});

// varaibles

let currentInput = document.querySelector('.digits');
let buttons = document.querySelectorAll('button');
let DEL = document.querySelector('#DEL');
let RESETbtn = document.querySelector('#RESET');
let EQUAL = document.querySelector('#EQUAL');

// Calculator Display
let realTimeScreenValue = [];
let operations = ['+', '-', '*', '/', '.'];
// To Reset
RESETbtn.addEventListener('click', () => {
  realTimeScreenValue = [];
  currentInput.innerHTML = 0;
});

// Get value of any button clicked and display to the screen
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // when clicked button is not reset button
    my_if: if (
      !btn.id.match('RESET') &&
      !btn.id.match('DEL') &&
      !btn.id.match('EQUAL')
    ) {
      // To display value on btn press

      //test to prevent typing two operators at a time.
      if (
        operations.includes(
          realTimeScreenValue[realTimeScreenValue.length - 1]
        ) &&
        operations.includes(btn.value)
      ) {
        break my_if;
      } else {
        realTimeScreenValue.push(btn.value);
      }

      //limiting the number of characterese for the div display screen

      if (realTimeScreenValue.length > 10) {
        for (i = 10; i < realTimeScreenValue.length; i++) {
          realTimeScreenValue.pop();
        }
      }
      currentInput.innerHTML = realTimeScreenValue.join('');
    }
    // When DEL button is clicked
    if (btn.id.match('DEL')) {
      realTimeScreenValue.pop();
      currentInput.innerHTML = realTimeScreenValue.join('');
    }
    // When clicked button is equal  button
    if (btn.id.match('EQUAL')) {
      currentInput.innerHTML = eval(realTimeScreenValue.join(''));
      realTimeScreenValue = [eval(realTimeScreenValue.join(''))];
    }
    // To prevent undefined error in screen
    if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
      currentInput.innerHTML = 0;
    }
  });
});
