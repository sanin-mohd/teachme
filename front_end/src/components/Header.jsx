import React,{useContext} from "react";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ForumIcon from "@mui/icons-material/Forum";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import "./Header.css";
import './Fixed_Header_Footer.css'
import {Link} from 'react-router-dom';
import AuthContext from '../AuthContext';
import {useSelector,useDispatch} from 'react-redux'

function Header() {
  const {user,logOutUser} = useContext(AuthContext)
  const userdata = useSelector(state => state.user_data.value)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-header">
        <div className="container">
          <Link to="/home" className="navbar-brand center">
            <LocalLibraryRoundedIcon />
            OnlinE
          </Link>
          
          
          <form className="d-flex col-md-6 ms-2">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 ms-auto mb-lg-1 d-flex">
            {user && 
            <li className="nav-item ms-3 ">
            <Link to="/home" className="nav-link">
              <Tooltip title="Username">
                <h6>{userdata.username}</h6>
              </Tooltip>
            </Link>
          </li>
            }
              <li className="nav-item ms-3 ">
                <Link to="/dashboard" className="nav-link">
                  <Tooltip title="Dashboard">
                    <AccountCircleIcon />
                  </Tooltip>
                </Link>
              </li>

              <li className="nav-item ms-3 ">
                <Link to="/messenger" className="nav-link">
                  <Tooltip title="Messager">
                    <ForumIcon />
                  </Tooltip>
                </Link>
              </li>
              {
                user && 
                <li className="nav-item ms-3">
                <Link to="/wallet" className="nav-link">
                  <Tooltip title="Wallet">
                    <AccountBalanceWalletIcon/>
                  </Tooltip>
                  <span className='ms-1'>₹ {userdata.wallet_balance}</span>
                </Link>
              </li>

              }
              
              <li className="nav-item ms-3 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  more
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                  </li>
                  <li>
                    <p onClick={logOutUser} className="dropdown-item">Logout</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
