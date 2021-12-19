function navbar() {
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

    <button id="btn" class="active"
>Login</button>

    
    <a href="#">more<i class="fas fa-sort-down"></i></a>
    <a id="d_link" ><i class="fas fa-shopping-cart"></i><span id="cart-item">0<span></a>
  </div>


  `;
}
function footer() {
  return `
  <div class="footer-row">
    <div class="footer-col-1">
      <div class="footer-heading">
        <p>About</p>
      </div>
      <div class="footer-list">
        <a href="">Contact us</a>
        <a href="">About us</a>
        <a href="">Career</a>
        <a href="">Flipkart Stories</a>
        <a href="">Press</a>
        <a href="">Flipkart Wholesale</a>
        <a href="">Corporate Information</a>
      </div>
    </div>

    <div class="footer-col-2">
      <div class="footer-heading">
        <p>Help</p>
      </div>
      <div class="footer-list">
        <a href="">Payments</a>
        <a href="">Shipping</a>
        <a href="">Cancellation & Returns</a>
        <a href="">FAQ</a>
        <a href="">Report</a>
      </div>
    </div>

    <div class="footer-col-3">
      <div class="footer-heading">
        <p>Policy</p>
      </div>
      <div class="footer-list">
        <a href="">Return Policy</a>
        <a href="">Terms of use</a>
        <a href="">Security </a>
        <a href="">Privacy</a>
        <a href="">Sitemap</a>
        <a href="">EPR</a>
      </div>
    </div>

    <div class="footer-col-4">
      <div class="footer-heading">
        <p>Social</p>
      </div>
      <div class="footer-list">
        <a href="">Facebook</a>
        <a href="">Twitter</a>
        <a href="">Youtube </a>
      </div>
    </div>

    <div class="footer-col-5">
      <div class="footer-heading">
        <p>Mail Us</p>
      </div>
      <div class="footer-list">
        <p>
          Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
          Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
          Village, Bengaluru, 560103, Karnataka, India
        </p>
      </div>
    </div>

    <div class="footer-col-6">
      <div class="footer-heading">
        <p>REGISTERED OFFICE ADDRESS</p>
      </div>
      <div class="footer-list">
        <p>
          Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
          Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
          Village, Bengaluru, 560103, Karnataka, India CIN :
          U51109KA2012PTC066107 Telephone: <span>1800 202 9898</span>
        </p>
      </div>
    </div>
  </div>

  <div class="footer-row2">
    <div class="footer-row2-col">
      <p>Sell On Flipkart</p>
    </div>
    <div class="footer-row2-col">
      <p>Advertise</p>
    </div>
    <div class="footer-row2-col">
      <p>Gift Cards</p>
    </div>
    <div class="footer-row2-col">
      <p>Help Center</p>
    </div>
    <div class="footer-row2-col">
      <p>© 2007-2021 Flipkart.com</p>
    </div>
    <div class="footer-row2-col">
      <img src="Mainpage-images/payment.png" alt="" />
    </div>
  </div>
`;
}

export { navbar, footer };
