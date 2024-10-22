import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <>
      <div>Navber</div>
      <Link to="/about" className=""><h3>About</h3></Link>
      <Link to="/" className=""><h3>Home</h3></Link>
      <Link to="/frompage" className=""><h3>FromPage</h3></Link>
    </>
  );
};

export default Navber;
