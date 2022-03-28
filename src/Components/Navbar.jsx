const Navbar = () => {
    return (
        <nav className="home-nav">
      <div className="navigation-box">
        <a href="./index.html">
          <div className="logo-box"><span className="logo-primary">Lunar</span> <span
              className="color-primary logo-secondary">Store</span></div>
        </a>

        <div className="menu-box">
          <ul className="menu-list no-bullets ">
            <li className="menu-item bold-1">
              <a href="./index.html"> Home</a>

            </li>
            <li className="menu-item bold-1">
              <a href="./product-listing.html"> Shop</a>

            </li>
          </ul>
        </div>
        <div className="nav-search">
          <div className="input-box">
            <i className="fa fa-search input__box-icon"></i>
            <input type="text" className="basic-input " placeholder="Input with an icon" />
          </div>

        </div>
        <div className="nav-list">
          <ul className="no-bullets nav-ul">
            <li className="nav-child">

              <a href="./login.html" className="btn btn-tertiary-icon"> <i className="fas fa-user"></i></a>

            </li>
            <li className="nav-child">
              <a href="./wishlist.html" className="btn btn-tertiary-icon"> <i className="fas fa-heart"></i></a>
            </li>
            <li className="nav-child">
              <a href="./cart.html" className="btn btn-tertiary-icon"><i className="fas fa-shopping-cart"></i></a>
            </li>
          </ul>
        </div>
        <div className="nav-ham">
          <i className="fa fa-bars"></i>
        </div>
      </div>

    </nav>
    )
}
export default Navbar;