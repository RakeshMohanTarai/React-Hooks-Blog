import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul id="nav">
        {/* this link componet is coming from the react-router-dom */}
        <li><Link to='/' > Home </Link></li>
        <li><Link to='/create-post' > Create Post </Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
