import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  FundProjectionScreenOutlined,
  LaptopOutlined,
} from "@ant-design/icons";

import User from "./User";

//Product components
import Laptop from "../Products/Laptop";
import Monitor from "../Products/Monitor";
import Storage from "../Products/Storage";
import GraphicCard from "../Products/GraphicCard";
import Processor from "../Products/Processor";
import KeyboardMouse from "../Products/KeyboardMouse";
import PCcase from "../Products/PCcase";

const { Content, Footer, Sider } = Layout;

const UserDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useNavigate();
  const location = useLocation();
  const search = window.location.search;

  const param = new URLSearchParams(search);

  const queryLaptop = param.get("_optLaptop");
  const queryMonitor = param.get("_optMonitor");
  const queryGraphicCard = param.get("_optGraphicCard");
  const queryProcessor = param.get("_optProcessor");
  const queryStorageDrive = param.get("_optStorageDrive");
  const queryPCcase = param.get("_optPCcase");
  const queryKeyboardMouse = param.get("_optKeyboardMouse");

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const date = new Date();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        width="270px"
      >
        <Menu
          style={{ marginTop: "80px" }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={
            queryLaptop === "laptop"
              ? ["1"]
              : queryMonitor === "monitor"
              ? ["2"]
              : queryGraphicCard === "graphic_card"
              ? ["3"]
              : queryProcessor === "processor"
              ? ["4"]
              : queryStorageDrive === "storage_drive"
              ? ["5"]
              : queryPCcase === "pc_case"
              ? ["6"]
              : queryKeyboardMouse === "keyboard_mouse"
              ? ["7"]
              : null
          }
        >
          <Menu.Item
            key="1"
            icon={<LaptopOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "firstName"
                )}?_optLaptop=laptop`
              );
            }}
          >
            Laptop
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "firstName"
                )}?_optMonitor=monitor`
              );
            }}
          >
            Monitor
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "firstName"
                )}?_optGraphicCard=graphic_card`
              );
            }}
          >
            Graphic Card
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "firstName"
                )}?_optProcessor=processor`
              );
            }}
          >
            Processor
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "firstName"
                )}?_optStorageDrive=storage_drive`
              );
            }}
          >
            Storage Drive
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "firstName"
                )}?_optPCcase=pc_case`
              );
            }}
          >
            PC Case
          </Menu.Item>
          <Menu.Item
            key="7"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "firstName"
                )}?_optKeyboardMouse=keyboard_mouse`
              );
            }}
          >
            Keyboard & Mouse
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>

          {location.pathname ===
            `/user-dashboard/${localStorage.getItem("firstName")}` &&
            !queryLaptop &&
            !queryMonitor &&
            !queryProcessor &&
            !queryPCcase &&
            !queryGraphicCard &&
            !queryStorageDrive &&
            !queryKeyboardMouse && <User />}

          {queryLaptop === "laptop" && <Laptop />}
          {queryMonitor === "monitor" && <Monitor />}
          {queryGraphicCard === "graphic_card" && <GraphicCard />}
          {queryProcessor === "processor" && <Processor />}
          {queryStorageDrive === "storage_drive" && <Storage />}
          {queryPCcase === "pc_case" && <PCcase />}
          {queryKeyboardMouse === "keyboard_mouse" && <KeyboardMouse />}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright © {date.getFullYear()} WinMac Computers
        </Footer>
      </Layout>
    </Layout>
  );
};

export default UserDashboard;
