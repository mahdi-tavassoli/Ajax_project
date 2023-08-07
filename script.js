// ! Get request in ajax
// let getData = document.getElementById("getData");
// //console.log(getData);
// getData.addEventListener("click", () => {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "ajaxData.txt", true);
//   xhr.onprogress = function () {
//     console.log("I am progressing");
//   };
//   xhr.onreadystatechange = function () {
//     console.log("Ready state is" + xhr.readyState);
//   };
//   xhr.onload = function () {
//     if (this.status === 200) {
//       console.log(this.responseText);
//     } else {
//       console.log("page not found :(");
//     }
//   };
//   xhr.send();
//   // to change the diffreces between synchronous and asynchronous
//   console.log("i am last line");
// });
// ! Post request in ajax
let getData = document.getElementById("getData");
getData.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://fakestoreapi.com/products", true);
  xhr.onprogress = function () {
    console.log("I am progressing");
  };
  xhr.onreadystatechange = function () {
    console.log("Ready state is" + xhr.readyState);
  };
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("page not found :(");
    }
  };
  data = { title: "ajax turorial" };
  xhr.send(data);
  // to change the diffreces between synchronous and asynchronous
  console.log("i am last line");
});
// async function getFakeStoreApi() {
//   const responses = await fetch("https://fakestoreapi.com/products/1");
//   const data = responses.json();
//   console.log(data);
// }
// getFakeStoreApi();
