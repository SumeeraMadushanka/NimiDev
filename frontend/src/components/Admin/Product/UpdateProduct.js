import React, { useState, useEffect } from "react";
import { Form, Input, Button, Spin, Tooltip, notification, Select } from "antd";

import {
  FileDoneOutlined,
  InfoCircleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

import axios from "axios";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const UpdateProduct = () => {
  const [loader, setLoader] = useState(false);
  const [productNumber, setProductnumber] = useState("");
  const [productName, setProductname] = useState("");
  const [productCategory, setProductcategory] = useState("");
  const [productPrice, setProductprice] = useState("");
  const [productQty, setQty] = useState("");
  // const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false); //additional
  const [error, setError] = useState(false);

  const search = window.location.search;

  const params = new URLSearchParams(search);

  const id = params.get("_id");

  useEffect(() => {
    (async () => {
      axios
        .get(`/product/getProductID/${id}`)
        .then((res) => {
          form.setFieldsValue({
            productNumber: res.data.productNumber,
            productName: res.data.productName,
            productCategory: res.data.productCategory,
            productPrice: res.data.productPrice,
            productQty: res.data.productQty,
          });
          setProductnumber(res.data.productNumber);
          setProductname(res.data.productName);
          setProductcategory(res.data.productCategory);
          setProductprice(res.data.productPrice);
          setQty(res.data.productQty);
        })
        .catch((err) => alert(err));
    })();

    setTimeout(() => {
      setLoader(!loader);
    }, 2000);
  }, []);

  const onchangeProductCategory = (e) => {
    setProductcategory(e);
  };

  // const handleFileSelect = async (event) => {
  //   setImage(event.target.files[0]);
  //   console.log(event.target.files[0]);
  // }

  const updateHandler = async (placement) => {
    // create handler for saving data to the db
    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        //use axios API
        `/product/updateProduct/${id}`,
        {
          productNumber,
          productName,
          productCategory,
          productPrice,
          productQty,
          // image,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        notification.info({
          message: `Notification`,
          description: "Successfully Update the product details..",
          placement,
        });
      }, 5000); //5seconds timeout
    } catch (error) {
      notification.error({
        message: `Notification`,
        description: error.response.data.error,
        placement,
      });
      setError(true);
      setLoading(false);
    }
  };

  const [form] = Form.useForm();

  return (
    <>
      {loader === false ? (
        <center>
          <Spin style={{ marginTop: "200px" }} />
        </center>
      ) : (
        <div className=" mt-20 -translate-x-52">
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={() => updateHandler("top")}
          >
            <center>
              {error && <span style={{ color: "red" }}>{error}</span>}
            </center>
            <Form.Item
              name="productNumber"
              label="Product Number"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{ width: "80%" }}
                placeholder="Enter product Number"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                onChange={(e) => setProductnumber(e.target.value)}
                value={productNumber}
              />
            </Form.Item>
            <Form.Item
              name="productName"
              label="Product Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{ width: "80%" }}
                placeholder="Enter product name"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                onChange={(e) => setProductname(e.target.value)}
                value={productName}
              />
            </Form.Item>

            <Form.Item
              name="productCatergory"
              label="Product Catergory"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select Product Catregory"
                style={{ width: "80%" }}
                onChange={onchangeProductCategory}
              >
                <Option value="laptop">Laptop</Option>
                <Option value="monitor">Monitor</Option>
                <Option value="graphic_card">Graphic Card</Option>
                <Option value="processor">Processor</Option>
                <Option value="storage_drive">Storage Drive</Option>
                <Option value="pc_case">PC Case</Option>
                <Option value="keyboard_mouse">Keyboard & Mouse</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="productPrice"
              label="Product Price"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{ width: "80%" }}
                placeholder="Enter Product Price"
                prefix={
                  <DollarCircleOutlined className="site-form-item-icon" />
                }
                suffix={[
                  <Tooltip title="Please Enter Product Price">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>,
                ]}
                onChange={(e) => setProductprice(e.target.value)}
                value={productPrice}
                type="number"
              />
            </Form.Item>

            <Form.Item
              name="productQty"
              label="Quantity"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{ width: "80%" }}
                placeholder="Enter Product Quantity"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                onChange={(e) => setQty(e.target.value)}
                value={productQty}
                type="number"
              />
            </Form.Item>

            {/* <Form.Item
              label="Image"
              rules={[
                {
                  required: true,
                },
              ]}
             
            >
              <input
                type="file"
                onChange={handleFileSelect}
                name="image"
                required
              />
            </Form.Item> */}

            <Form.Item {...tailLayout}>
              &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
              <div className="flex justify-center items-center">
                <Button type="primary" htmlType="submit">
                  {loading ? (
                    <>
                      <Spin /> Updating..
                    </>
                  ) : (
                    "Update"
                  )}
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      )}
    </>
  );
};

export default UpdateProduct;
