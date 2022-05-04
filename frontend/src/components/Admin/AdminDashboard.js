import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Layout, Menu, Button, Breadcrumb } from "antd";
import {
  FundProjectionScreenOutlined,
  UserAddOutlined,
  LogoutOutlined,
  HomeOutlined,
} from "@ant-design/icons";

//Product components
import ProductDashboard from "./Product/ProductDashboard";
import Header from "./Header";
import AllProduct from "./Product/AllProducts";
import AddProduct from "./Product/AddProduct";
import UpdateProduct from "./Product/UpdateProduct";

//Customer components
import CustomerDashboard from "./Customer/CustomerDashboard";

const { Content, Footer, Sider } = Layout;

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useNavigate();
  const location = useLocation();
  const search = window.location.search;

  const params = new URLSearchParams(search);

  const queryCustomer = params.get("_optCustomer");
  const queryProduct = params.get("_optProduct");
  const queryEdit = params.get("_edit");

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const { firstName, lastName, contactNo, email, id, type, authToken } =
    useParams();

  const logoutHandler = () => {
    localStorage.removeItem("firstName", firstName);
    localStorage.removeItem("lastName", lastName);
    localStorage.removeItem("contactNo", contactNo);
    localStorage.removeItem("email", email);
    localStorage.removeItem("id", id);
    localStorage.removeItem("type", type);
    localStorage.removeItem("authToken", authToken);
    history("/login");
  };

  const date = new Date();
  const hrs = date.getHours();

  let greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs < 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs < 19) greet = "Good Evening";
  else greet = "Good Night";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        width="270px"
      >
        <Menu
          style={{ marginTop: "150px" }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={
            queryCustomer === "customer"
              ? ["1"]
              : queryProduct === "product"
              ? ["2"]
              : null
          }
        >
          <Menu.Item
            key="1"
            icon={<HomeOutlined />}
            className="text-lg"
            onClick={() => {
              history(`/admin-dashboard/${localStorage.getItem("firstName")}`);
            }}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<UserAddOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/admin-dashboard/${localStorage.getItem(
                  "firstName"
                )}?_optCustomer=customer`
              );
            }}
          >
            Customer Management
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/admin-dashboard/${localStorage.getItem(
                  "firstName"
                )}?_optProduct=product`
              );
            }}
          >
            Product Management
          </Menu.Item>
        </Menu>
        {collapsed === false ? (
          <center className="my-12">
            <Button
              icon={<LogoutOutlined className="-translate-y-0.5" />}
              onClick={() => logoutHandler()}
            >
              Sign Out
            </Button>
          </center>
        ) : (
          <center className="my-12 hover:rounded-full hover:bg-slate-500 p-4  hover:mx-4">
            <LogoutOutlined
              style={{ color: "white", cursor: "pointer" }}
              className="-translate-y-0.5"
            />
          </center>
        )}
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{greet}</Breadcrumb.Item>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
          </Breadcrumb>
          {queryCustomer === "customer" && <CustomerDashboard />}
          {queryProduct === "addProduct" && [<Header />, <AddProduct />]}
          {queryEdit === "true" && [<Header />, <UpdateProduct />] }
          {queryProduct === "allProducts" && [<Header />, <AllProduct />]}
          {queryProduct === "product" && [<Header />, <ProductDashboard />]}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright © {date.getFullYear()} WinMac Computers
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
