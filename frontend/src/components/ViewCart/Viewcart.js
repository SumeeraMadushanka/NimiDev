import React, { useState, useEffect, useDebugValue } from "react";
import axios from "axios";
import { Button } from "antd";

const Viewcart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("/product/getCart")
        .then((res) => setData(res.data))
        .catch((error) => alert(error));
    })();
  }, []);

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`/product/deleteCart/${id}`);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  let Total = 0;

  const filterData = data.filter(
    (el) => (Total += Number(el.productPrice) * 370)
  );

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-20 py-24 mx-auto flex-row">
        {data.map((value, index) => {
          return (
            <>
              <div className="flex py-2 ">
                <div class="lg:w-56 lg:h-36 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                  <img
                    class="object-cover object-center w-full h-full"
                    src="https://dummyimage.com/600x300"
                    alt="stats"
                  />
                </div>
                <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                  <div class="w-full sm:p-4 px-4 translate-x-2">
                    <h1 class="title-font font-medium text-xl mb-2 text-gray-900">
                      {value.productName}
                    </h1>
                    <h2 class="tracking-widest text-base title-font font-medium text-red-600 mb-1">
                      Price: LKR, {Number(value.productPrice) * 370}.00
                    </h2>
                  </div>
                </div>
                <div className=" mt-14">
                  <Button
                    type="danger"
                    onClick={() => deleteHandler(value._id)}
                  >
                    Remove Item
                  </Button>
                </div>
              </div>
            </>
          );
        })}
        <hr />
        <div className="tracking-widest text-base title-font font-semibold font-2xl text-red-600 mb-1">
          Total: LKR {Total}
        </div>
      </div>
    </section>
  );
};

export default Viewcart;
