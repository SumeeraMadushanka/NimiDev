import React from "react";
import { Button } from "antd";
import { HomeTwoTone } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const history = useNavigate();

  const location = useLocation();
  const search = window.location.search;

  const param = new URLSearchParams(search);

  const { pathname } = location;

  return (
    <>
      {pathname ===
      `/admin-dashboard/${localStorage.getItem(
        "firstName"
      )}?_optCustomer=customer` ? (
        <div className=" mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-16">
          <div className="text-4xl float-left translate-x-4">
            <HomeTwoTone
              onClick={() =>
                history(
                  `/admin-dashboard/${localStorage.getItem(
                    "firstName"
                  )}?_optCustomer=customer`
                )
              }
            />
          </div>
          <div className="pt-4 flex">
            <div className="mx-auto -translate-x-6">
              <Button
                type="primary"
                danger
                onClick={() =>
                  history(
                    `/admin-dashboard/${localStorage.getItem(
                      "firstName"
                    )}?_optCustomer=customer`
                  )
                }
              >
                All Customers
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-16">
          <div className="text-4xl float-left translate-x-4">
            <HomeTwoTone
              onClick={() =>
                history(
                  `/admin-dashboard/${localStorage.getItem(
                    "firstName"
                  )}?_optProduct=product`
                )
              }
            />
          </div>
          <div className="pt-4 flex">
            <div className="mx-auto -translate-x-6">
              <Button
                type="primary"
                danger
                onClick={() =>
                  history(
                    `/admin-dashboard/${localStorage.getItem(
                      "firstName"
                    )}?_optProduct=addProduct`
                  )
                }
              >
                Add Product
              </Button>{" "}
              <Button
                type="primary"
                danger
                onClick={() =>
                  history(
                    `/admin-dashboard/${localStorage.getItem(
                      "firstName"
                    )}?_optProduct=allProducts`
                  )
                }
              >
                All Products
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
