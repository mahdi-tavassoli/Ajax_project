let getData = document.getElementById("getData");
getData.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://fakestoreapi.com/products", true);
  xhr.onreadystatechange = function () {
    console.log("Ready status is " + xhr.readyState);
  };
  xhr.onload = function () {
    if (this.status === 200) {
      let objectData = JSON.parse(this.responseText);
      const table_data = document.getElementById("table_data");
      console.log(objectData);
      let showData = "";
      showData += `
      <thead class="table-dark">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                </tr>
            </thead>
      `;
      for (value of objectData) {
        showData += `
        <tr>
           <td>${value.title} </td>
           <td>${value.price}</td>
           <td><img src="${value.image}"></td>
        </tr>

        `;
      }
      table_data.innerHTML = showData;
    }
  };
  xhr.send();
});
