import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin, Button, notification } from "antd";

const Customer = () => {
  const [data, setData] = useState([]);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    (async () => {
      await axios
        .get("/api/auth/getUser")
        .then((res) => setData(res.data))
        .catch((error) => alert(error));
    })();

    setTimeout(() => setSpin(true), 3000);
  }, []);

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`/api/auth/deleteUser/${id}`);
      notification.info({
        title: "Delete Form",
        message: "Successfully Delete",
        placement: "top",
      });
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  const filterData = data.filter((el) => el.type === "user");

  return (
    <>
      {spin === false ? (
        <center>
          <div className=" my-56">
            <Spin size="large" />
          </div>
        </center>
      ) : (
        <section class="text-gray-600 body-font">
          <div class="container px-5 mx-auto">
            <div class="flex flex-wrap -m-4 ">
              {filterData.map((value, index) => {
                return (
                  <div class="p-4 lg:w-2/5">
                    <div class="h-52 bg-opacity-75 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 pt-2 rounded-lg overflow-hidden relative">
                      <h1 class="title-font sm:text-lg text-lg font-medium text-slate-900 mb-3">
                        * First Name: {value.firstName}
                      </h1>
                      <h1 class="title-font sm:text-lg text-lg font-medium text-slate-900 mb-3">
                        * Last Name: {value.lastName}
                      </h1>
                      <h1 class="title-font sm:text-lg text-lg font-medium text-slate-900 mb-3">
                        * Contact No:{value.contactNo}
                      </h1>
                      <h1 class="title-font sm:text-lg text-lg font-medium text-slate-900 mb-3">
                        * Email: {value.email}
                      </h1>
                      <div>
                        {" "}
                        <Button type="danger" onClick={() => deleteHandler(value._id)}>Delete</Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Customer;
