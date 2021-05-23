//screen
const screen = document.getElementsByClassName("screen");

//operations
const equal = document.getElementById("equal");
const subtraction = document.getElementById("subtraction");
const addition = document.getElementById("addition");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const clear = document.getElementById("clear");
//numbers
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const comma = document.getElementById("comma");

zero.onclick = () => {
  console.log("value", zero.innerText);
};

one.onclick = () => {
  console.log("value", one.innerText);
};

two.onclick = () => {
  console.log("value", two.innerText);
};

three.onclick = () => {
  console.log("value", three.innerText);
};

four.onclick = () => {
  console.log("value", four.innerText);
};

five.onclick = () => {
  console.log("value", five.innerText);
};

six.onclick = () => {
  console.log("value", six.innerText);
};

seven.onclick = () => {
  console.log("value", seven.innerText);
};

eight.onclick = () => {
  console.log("value", eight.innerText);
};

nine.onclick = () => {
  console.log("value", nine.innerText);
};

comma.onclick = () => {
  console.log("value", comma.innerText);
};

clear.onclick = () => {
  console.log("value", clear.innerText);
};

function mouse() {
  console.log("screen", screen[0].innerText);
}
