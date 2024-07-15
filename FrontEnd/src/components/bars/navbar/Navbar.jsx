import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { Icon } from "../../Icons";
import "./navbar.scss";

export default function Navbar() {
  const isAuth = false;
  const navigate = useNavigate();

  const userAvatarUrl =
    "https://i.scdn.co/image/ab67757000003b82368223ebc3bb84b274fc8365";

  return (
    <div className="navbar">
      <div className="history">
        <button
          className="back"
          onClick={() => {
            navigate(-1);
          }}
        >
          <Icon name="back" />
        </button>
        <button
          className="forward"
          onClick={() => {
            navigate(1);
          }}
        >
          <Icon name="next" />
        </button>
      </div>

      {isAuth ? (
        <div className="buttons">
          <Link to="/premium">
            <button className="white">Explore Premium</button>
          </Link>
          <Link to="/download">
            <button className="transperent">
              <DownloadOutlinedIcon />
              <span>Install App</span>
            </button>
          </Link>
          <div className="userAvatar">
            <img src={userAvatarUrl} alt="avatar" />
          </div>
        </div>
      ) : (
        <div className="buttons">
          <Link to="/register">
            <button className="signup">Sign up</button>
          </Link>
          <Link to="/login">
            <button className="white">Log in</button>
          </Link>
        </div>
      )}
    </div>
  );
}
