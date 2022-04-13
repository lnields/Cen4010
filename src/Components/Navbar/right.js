import React from "react";
import { Menu } from "antd";
const RightMenu = ({showDrawer}) => {

    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <a href="www.marca.com">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <button onClick={() => showDrawer()} >Show Chat</button>
        </Menu.Item>
      </Menu>
    );
}
export default RightMenu;
