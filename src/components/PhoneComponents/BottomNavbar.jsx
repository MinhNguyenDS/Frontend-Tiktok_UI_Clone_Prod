import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserFriends, faPlus, faMessage, fa9, faUser } from '@fortawesome/free-solid-svg-icons';

function BottomNavbar() {
  return (
      <div className="bottom-navbar">
        <div className="nav-item">
          <FontAwesomeIcon icon={faHouse} className="icon active" />
          <span className="item-name active">Trang chủ</span>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faUserFriends} className="icon" />
          <span className="item-name">Bạn bè</span>
        </div>
        <div className="nav-item-home">
          <FontAwesomeIcon icon={faPlus} className="plus" />
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={fa9} className="notification" />
          <FontAwesomeIcon icon={faMessage} className="icon" />
          <span className="item-name">Hộp thư</span>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span className="item-name">Hồ sơ</span>
        </div>
      </div>
  );
}

export default BottomNavbar;
