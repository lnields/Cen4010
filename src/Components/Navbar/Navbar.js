import React, { useState } from "react";
import ChatApp from "../Chat/chatComponent";
import RightMenu from "./right";
import { Drawer, Button } from "antd";

import "antd/dist/antd.css";
import "./Navbar.css";


const Navbar = () => {
	const [state, setState] = useState ({visible: false})
	const showDrawer = () => {
		setState({
			visible: true
		});
	};
	const onClose = () => {
		setState({
			visible: false
		});
  };
  
    return (
      <nav className="menuBar">
        <div className="logo">
          <a href="www.marca.com">logo</a>
        </div>
        <div className="menuCon">
          <div className="rightMenu">
            <RightMenu
						 showDrawer={showDrawer}
						  />
          </div>
          <Button className="barsMenu" type="primary" onClick={showDrawer}>
            <span className="barsBtn" />
          </Button>
          <Drawer
            title="Chat"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={state.visible}
          >
						<ChatApp/>
          </Drawer>
        </div>
      </nav>
    );
  
}
export default Navbar;
