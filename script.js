let cards = document.querySelector(".cards");
let searchInput = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let maxlength = 3;
let sorted = "descending";
let filteredArr = [];
let copyArr = [];


async function getAllCards() {
    let res = await axios("");
    let data = await res.data;
    copyArr = data;
    cards.innerHTML = "";
    filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
    filteredArr.slice(0, maxlength).forEach((el) => {
      cards.innerHTML += `
      <div><div class="dicc">
      <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/Homepage_testi.png" alt="">
          <div class="cran">
              <h3><a href="">Strategy Planning </a></h3>
              <p>There are many variations of passages of lorem Ipsum available but the new majority have
                  suffered.</p>
          </div>
      <a onclick=deleteBtn(${el.id}) class="btn btn-danger" >DELETE</a>
      <a onclick="editBtn(${el.id})" class="btn btn-secondary" href="./add.html?id=${el.id}">EDİT</a>
      <a onclick="addFav(${el.id})" class="btn btn-dark" >ADD FAV</a>
    </div>
    `
    });