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
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Top Rated',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'New Releases',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Game Queue',
            },
            {
                key: '4',
                icon: <UploadOutlined />,
                label: 'Logout',
              },
          ]}
        />
      </Sider>
      </Layout>
  )
}

export default Navbar;