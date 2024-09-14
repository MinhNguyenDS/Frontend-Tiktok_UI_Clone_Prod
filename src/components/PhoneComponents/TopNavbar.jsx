import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faSearch } from '@fortawesome/free-solid-svg-icons';

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <FontAwesomeIcon icon={faTv} className='icon' style={{ width: '21px', height: '21px' }}/>
      <h2>Bạn bè  | Đã follow | <span>Đề xuất</span></h2>
      <FontAwesomeIcon icon={faSearch} className='icon' style={{ width: '21px', height: '21px' }}/>
    </div>
  );
};

export default TopNavbar;
