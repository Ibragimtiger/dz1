const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;

  if (!emailRegex.test(email)) {
    alert("emai указан неверно.");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert("Пароль должен состоять не менее чем из 4 символов и включать по крайней мере одну букву и одну цифру..");
    return;
  }

  alert("Действительный адрес электронной почты и пароль.");
});
// const block = document.querySelector("#block");
// let x = 0;
// let y = 0;

// function moveBlock() {
//   x += 5;
//   y += 5;
//   block.style.button = x + "px";
//   block.style.left = y + "px";

//   if (x < 1000 && y < 1000) {
//     requestAnimationFrame(moveBlock);
//   }
// }

// moveBlock();