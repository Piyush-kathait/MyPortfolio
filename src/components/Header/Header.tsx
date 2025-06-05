import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Piyush.</div>
      <nav className={styles.navigation}>
        <ul>
          <li className={styles.active}><a href="#">Profile</a></li>
          <li><a href="#">Showcases</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
          <li>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
