import React from "react";
// import icons
import { Sider } from 'Layout';
import { Layout } from 'antd';
import { useState } from "react";

function Navbar() {
    const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#topRated"
          onClick={() => handlePageChange('topRated')}
          // Check to see if the currentPage is `topRated`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'topRated' ? 'nav-link active' : 'nav-link'}
        > ⇠Top Rated
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#newReleases"
          onClick={() => handlePageChange('newReleases')}
          // Check to see if the currentPage is `newReleases`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'newReleases' ? 'nav-link active' : 'nav-link'}
        >
          ⇡New Releases
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#logout"
          onClick={() => handlePageChange('Logout')}
          // Check to see if the currentPage is `Logout`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Logout' ? 'nav-link active' : 'nav-link'}
        >
          ⇢Logout
        </a>
      </li>
      </Sider>
      </Layout>
  )
}

export default Navbar;