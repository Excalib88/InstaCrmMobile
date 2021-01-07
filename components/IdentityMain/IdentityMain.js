import React from 'react';
import { Link } from 'react-router-dom';
import './IdentityMain.css';

const IdentityMain = () => {
  return (
    <>
      <div className="parent">
        <Link className="menu-item" to="/auth">Вход</Link>
        <Link className="menu-item" to="/register">Регистрация</Link>
      </div>
    </>
  );
};

export default IdentityMain;
