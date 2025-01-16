import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="logo" />
            <span>Harry Trans Beton</span>
        </div>

        <div className="nav">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Projects</a>
            <a href="/services">Operations</a>
            <a href="/contact">Contact Us</a>
            <a href="/contact">Order Now</a>
        </div>
    </div>
  )
}

export default Navbar