import React from 'react';
const Navbar = ({ setCategory }) => {
  const categories = ['general', 'technology', 'business', 'health', 'sports', 'entertainment'];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">NewsApp</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((cat) => (
              <li className="nav-item" key={cat}>
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCategory(cat);
                  }}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
