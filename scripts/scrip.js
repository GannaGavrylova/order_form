const form = document.querySelector(".container"); //обращение к общему контейнеру формы

const formsContainer = document.querySelector(".forms"); // обращение к форме оформления заказа

const allInput = document.querySelectorAll(".text_input"); // обращение ко всем инпутам

const createButton = document.querySelector(".create-button"); // обращение к кнопке создать заказ

const informButtonsContainer = document.querySelector(".inform-buttons"); // обращение к контейнеру, где будут отображаться информационный кнопки

const informForms = document.querySelector(".inform-forms"); //обращаемся к контейнеру для отображения информации о заказу
console.log(informForms);

createButton.addEventListener("submit", (event) => {
  event.preventDefault();
});
// button 1
const praidBtn = document.createElement("button");
praidBtn.classList.add("orderInfo");
praidBtn.textContent = "Заказ оплачен";
// button 2
const shippedBtn = document.createElement("button");
shippedBtn.classList.add("orderInfo");
shippedBtn.textContent = "Заказ отправлен";
// button 3
const receivedBtn = document.createElement("button");
receivedBtn.classList.add("orderInfo");
receivedBtn.textContent = "Заказ получен";

informButtonsContainer.append(praidBtn, shippedBtn, receivedBtn);

const iconBox = document.createElement("div");
iconBox.classList.add("iconBox");

const checkOk = document.createElement("img");
checkOk.classList.add("checkOk");
checkOk.src = "./assets/icons/check.svg";
iconBox.append(checkOk);

const orderCreatedInfo = document.createElement("div");
orderCreatedInfo.classList.add("orderCreatedInfo");
const titleOrder = document.createElement("h4");
titleOrder.classList.add("titleOrder");
titleOrder.textContent = "Заказ создан";
const textInfo = document.createElement("p");
textInfo.classList.add("textInfo");
textInfo.textContent = "Ожидайте дальнейшей информации";

orderCreatedInfo.append(titleOrder, textInfo);

const closeBox = document.createElement("div");
closeBox.classList.add("closeBox");

const iconClose = document.createElement("img");
iconClose.src = "./assets/icons/close_menu.svg";
iconClose.classList.add("iconClose");
closeBox.append(iconClose);

informForms.append(iconBox, orderCreatedInfo, closeBox);
