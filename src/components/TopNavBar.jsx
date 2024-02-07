import React from 'react';

// function TopNavbar() {
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <h1 className="navbar-brand">Recipe App</h1>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a href="#" className="nav-link">Home</a>
//           </li>
//           <li className="nav-item">
//             <a href="#" className="nav-link">Recipes</a>
//           </li>
//           <li className="nav-item">
//             <a href="#" className="nav-link">About</a>
//           </li>
//           {/* Add more nav items as needed */}
//         </ul>
//       </div>
//     </nav>
//   );
// }


function TopNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Recipe Hub</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Categories</a>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-success" type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default TopNavBar;