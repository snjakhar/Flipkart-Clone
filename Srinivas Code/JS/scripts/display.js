const spinner = document.getElementById("spinner");

  function showSpinner() {
    spinner.className = "show";
    setTimeout(() => {
      spinner.className = spinner.className.replace("show", "");
    }, 5000);
  }
function hideSpinner() {
  spinner.className = spinner.className.replace("show", "");
}


async function showitems(id) {
  let url = `https://api.bestbuy.com/v1/products((categoryPath.id=${id}))?apiKey=3b1upy8OYY1QZCEFx6LVDJgT&sort=customerReviewAverage.asc&show=customerReviewAverage,features.feature,salePrice,image,name,sku&pageSize=10&format=json`;
  let displaybox = document.querySelector(".display-items");
  let data;
  showSpinner();
  let res = await fetch(url);
  data = await res.json();
  hideSpinner();
  let arr = data.products;
  arr.map(
    ({ name, customerReviewAverage, image, salePrice, features, sku }) => {
      let box = document.createElement("div");
      box.className = "box";
      let p = Math.floor(salePrice * 70);

      let imgdiv = document.createElement("div");
      imgdiv.className = "imgdiv";
      imgdiv.innerHTML = `<img src=${image}>`;
      let descdiv = document.createElement("div");
      descdiv.className = "descdiv";
      descdiv.innerHTML = `<h3>${name}</h2>
        <span>${customerReviewAverage}★</span>
        <p>${features[0].feature}</p>`;
      let pricediv = document.createElement("div");
      pricediv.className = "pricediv";
      pricediv.innerHTML = `<p>Price:₹${p}<img src="../../Mainpage-images/assured.png"></p>`;

      box.append(imgdiv, descdiv, pricediv);
      displaybox.append(box);

      box.addEventListener("click", () => {
        localStorage.setItem("sku", JSON.stringify(sku));
        window.location.href = "oneitemdetail.html";
      });
    }
  );
}
export { showitems };
