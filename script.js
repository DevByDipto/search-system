let inputBar = document.querySelector(".input_bar");
const postBtn = document.querySelector(".post_btn");
const data = document.querySelector(".data");
const searchingBtn = document.querySelector(".searching_btn");
let arr = [];

function storeData() {
  arr.push({
    note: inputBar.value,
  });
}

postBtn.addEventListener("click", () => {
  storeData();
  data.innerHTML = "";
  arr.forEach((item) => {
    data.innerHTML += `<li>${item.note}</li>`;
  });
  inputBar.value = "";
});

searchingBtn.addEventListener("click", () => {
  data.innerHTML = "";
  console.log(inputBar.value.length);
  arr.forEach((item) => {
    if (item.note.slice(0, inputBar.value.length) === inputBar.value) {
      data.innerHTML += `<li>${item.note}</li>`;
    }
  });
});
