import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      await fetch("/product/getProduct")
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setLoader(!loader);
        });
    })();
  }, []);

  const history = useNavigate();

  const columns = [
    {
      title: "Prodcut Number",
      dataIndex: "productNumber",
      sorter: (a, b) => a.productNumber.length - b.productNumber.length,
      sortDirections: ["descend"],
      render: (text) => (
        <a
          onClick={() =>
            history(
              `/admin-dashboard/${localStorage.getItem(
                "firstName"
              )}?_edit=true&_id=${text}`
            )
          }
        >
          {text}
        </a>
      ),
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      sorter: (a, b) => a.productName.length - b.productName.length,
    },
    {
      title: "Product Category",
      dataIndex: "productCategory",
      sorter: (a, b) => a.productCategory.length - b.productCategory.length,
      filters: [
        {
          text: "Laptop",
          value: "laptop",
        },
        {
          text: "Monitor",
          value: "monitor",
        },
        {
          text: "Processor",
          value: "processor",
        },
        {
          text: "Graphic Card",
          value: "graphic_card",
        },
        {
          text: "Storage Drive",
          value: "storage_drive",
        },
        {
          text: "PC Case",
          value: "pc_case",
        },
        {
          text: "Keyboard & Mouse",
          value: "keyboard_mouse",
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) =>
        record.designation.toLowerCase().includes(value) === 0,
    },
    {
      title: "Product Price",
      dataIndex: "productPrice",
      sorter: (a, b) => a.productPrice.length - b.productPrice.length,
    },
    {
      title: "Product Quantity",
      dataIndex: "productQty",
      sorter: (a, b) => a.productQty.length - b.productQty.length,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      loading={loader}
      sticky
    />
  );
};

export default AllProducts;
