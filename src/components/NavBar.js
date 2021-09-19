import {

    Link
  } from "react-router-dom";

const Navbar = () => {

    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
          {/* <Link to="/"> */}
          <a className="navbar-item" >
              <h1>Content Manager</h1>
            </a>
              {/* </Link> */}
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <div className=" navbar-item">
                <div className="control has-icons-left">
                  <input className="input is-rounded" type="email" placeholder="Search" />
                  <span className="icon is-left">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
              {/* <Link to="/"> */}
              <a className="navbar-item is-active is-size-5 has-text-weight-semibold">
                Home
              </a>
              {/* </Link> */}

              {/* <Link to="/resources/new"> */}
            
                  
                  <Link to="/New"
                  className="navbar-item is-size-5 has-text-weight-semibold">    Add </Link>
             
           
              {/* </Link> */}
              <a className="navbar-item is-size-5 has-text-weight-semibold">
                Features
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar;

//the browser is refreshed in order to request a new
//page

//next allows it to happen much faster and without a refresh
// in the browser
//

// const NavBar = (params) => {
//     return ( 
//             <nav classNameName="navbar">
//             <div classNameName="container">
//             <div classNameName="navbar-brand">
//                 <a classNameName="navbar-item" href="../">
//                 <img src="../images/bulma.png" alt="Logo"/>
//                 </a>
//                 <span classNameName="navbar-burger burger" data-target="navbarMenu">
//                 <span></span>
//                 <span></span>
//                 <span></span>
//                 </span>
//             </div>
//             <div id="navbarMenu" classNameName="navbar-menu">
//                 <div classNameName="navbar-end">
//                 <div classNameName=" navbar-item">
//                     <div classNameName="control has-icons-left">
//                     <input classNameName="input is-rounded" type="email" placeholder="Search" />
//                     <span classNameName="icon is-left">
//                         <i classNameName="fa fa-search"></i>
//                     </span>
//                     </div>
//                 </div>
//                 <a classNameName="navbar-item is-active is-size-5 has-text-weight-semibold">
//                     Home
//                 </a>
//                 <a classNameName="navbar-item is-size-5 has-text-weight-semibold">
//                     Examples
//                 </a>
//                 <a classNameName="navbar-item is-size-5 has-text-weight-semibold">
//                     Features
//                 </a>
//                 </div>
//             </div>
//             </div>
//             </nav>

 

//     )
// }
// export default NavBar;