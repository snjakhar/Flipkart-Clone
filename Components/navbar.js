function navbar(){
    return `<div class="header-left">
    <a href="">Flipkart</a>
    <p>
      <a href="">Explore</a><span>Plus<i class="fas fa-plus"></i></span>
    </p>
  </div>
  <div class="header-center">
    <input
      type="text"
      class="header-center-input"
      placeholder="Search for products brands and more"
    />
    <i class="fas fa-search"></i>
  </div>
  <div class="header-right">
    <a class="active" href="">Login</a>
    <a href="#">more<i class="fas fa-sort-down"></i></a>
    <a href="#"><i class="fas fa-shopping-cart"></i>cart</a>
  </div>`;
}

export {navbar};