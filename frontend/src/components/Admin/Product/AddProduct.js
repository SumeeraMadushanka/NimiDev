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

const AddProduct = () => {
  const [loader, setLoader] = useState(false);
  const [productNumber, setProductnumber] = useState("");
  const [productName, setProductname] = useState("");
  const [productCategory, setProductcategory] = useState("");
  const [productPrice, setProductprice] = useState("");
  const [productQty, setQty] = useState("");
  // const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false); //additional
  const [error, setError] = useState(false);

  useEffect(() => {
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

  const createHandler = async (placement) => {
    // create handler for saving data to the db
    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        //use axios API
        "/product/createProduct",
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
          description: "Successfully Added the product details..",
          placement,
        });
        form.resetFields();
      }, 5000); //5seconds timeout
    } catch (error) {
      notification.error({
        message: `Notification`,
        description: error.response.data.error,
        placement,
      });
      setError(true);
      form.resetFields();
      setLoading(false);
    }
  };

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

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
            onFinish={() => createHandler("top")}
          >
            <center>
              {error && <span style={{ color: "red" }}>{error}</span>}
            </center>
            <Form.Item
              name="product number"
              label="Product Number"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={productNumber}
            >
              <Input
                style={{ width: "80%" }}
                placeholder="Enter product Number"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Please Enter Product Number ex: PF90097">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
                onChange={(e) => setProductnumber(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="product name"
              label="Product Name"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={productName}
            >
              <Input
                style={{ width: "80%" }}
                placeholder="Enter product name"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Please Enter Product Name">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
                onChange={(e) => setProductname(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="product catergory"
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
              name="product price"
              label="Product Price"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={productPrice}
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
                type="number"
              />
            </Form.Item>

            <Form.Item
              name="qty"
              label="Quantity"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={productQty}
            >
              <Input
                style={{ width: "80%" }}
                placeholder="Enter Product Quantity"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                suffix={[
                  <Tooltip title="Please Enter Product Quantity">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>,
                ]}
                onChange={(e) => setQty(e.target.value)}
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
                      <Spin /> Submiting..
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>{" "}
                &nbsp;&nbsp;
                <Button htmlType="button" onClick={onReset}>
                  Reset
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      )}
    </>
  );
};

export default AddProduct;
