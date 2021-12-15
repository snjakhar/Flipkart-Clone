let key = "3b1upy8OYY1QZCEFx6LVDJgT";

let url = `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=${key}&sort=sku.asc&show=sku,name,thumbnailImage,image,description,regularPrice,customerReviewCount,features.feature&format=json`;

async function getData(){

    let res = await fetch(url);
    let data = await res.json();

    console.log(data.products);

    showData(data.products);
}
//-----------------------------------------------------

let right = document.getElementById("right");


function showData(info){
    info.forEach(function(item){

    var main = document.createElement("div");
    main.setAttribute("id","main")

    var img = document.createElement("img");
    img.setAttribute("class","prodImage")
    img.src = item.image;


    var price =  document.createElement("h2");
    price.setAttribute("class","priceTag")
    price.innerHTML = "₹" + Math.round(item.regularPrice) * 76;


    var title =  document.createElement("h4","div");
    title.setAttribute("class","prodData")
    title.innerHTML = item.name;

    var f = document.createElement("p")
    for(let i=1; i< 5; i++){
       var x = item.features[i].feature;
       if()
      

    } console.log(x,"here")
     title.append(x);
   

    
    main.append(img,title,price);

    right.append(main);


    })
}

getData()
