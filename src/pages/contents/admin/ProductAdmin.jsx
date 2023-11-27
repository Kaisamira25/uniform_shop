import { useState } from "react";
import Table from "../../../components/_Table";
import Admin from "./Admin";

export default function ProductAdmin() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    size: "",
    image: "",
  });
  const data = [
    {
      ID: "1",
      NAME: "Đồng phục hs cấp 2",
      PRICE: "100",
      CATEGORY: "Đồng phục hs",
      SIZE: "xl",
      IMAGE: "img",
    },
    {
      ID: "1",
      NAME: "Đồng phục hs cấp 2",
      PRICE: "100",
      CATEGORY: "Đồng phục hs",
      SIZE: "xl",
      IMAGE: "img",
    },
    {
      ID: "1",
      NAME: "Đồng phục hs cấp 2",
      PRICE: "100",
      CATEGORY: "Đồng phục hs",
      SIZE: "xl",
      IMAGE: "img",
    },
    {
      ID: "1",
      NAME: "Đồng phục hs cấp 2",
      PRICE: "100",
      CATEGORY: "Đồng phục hs",
      SIZE: "xl",
      IMAGE: "img",
    },
    {
      ID: "1",
      NAME: "Đồng phục hs cấp 2",
      PRICE: "100",
      CATEGORY: "Đồng phục hs",
      SIZE: "xl",
      IMAGE: "img",
    },
    {
      ID: "1",
      NAME: "Đồng phục hs cấp 2",
      PRICE: "100",
      CATEGORY: "Đồng phục hs",
      SIZE: "xl",
      IMAGE: "img",
    },
    {
      ID: "1",
      NAME: "Đồng phục hs cấp 2",
      PRICE: "100",
      CATEGORY: "Đồng phục hs",
      SIZE: "xl",
      IMAGE: "img",
    },
    {
      ID: "1",
      NAME: "Đồng phục hs cấp 2",
      PRICE: "100",
      CATEGORY: "Đồng phục hs",
      SIZE: "xl",
      IMAGE: "img",
    },
    {
      ID: "1",
      NAME: "Đồng phục hs cấp 2",
      PRICE: "100",
      CATEGORY: "Đồng phục hs",
      SIZE: "xl",
      IMAGE: "img",
    },
    {
      ID: "1",
      NAME: "Đồng phục hs cấp 2",
      PRICE: "100",
      CATEGORY: "Đồng phục hs",
      SIZE: "xl",
      IMAGE: "img",
    },
    {
      ID: "1",
      NAME: "Đồng phục hs cấp 2",
      PRICE: "100",
      CATEGORY: "Đồng phục hs",
      SIZE: "xl",
      IMAGE: "img",
    },
    {
      ID: "1",
      NAME: "Đồng phục hs cấp 2",
      PRICE: "100",
      CATEGORY: "Đồng phục hs",
      SIZE: "xl",
      IMAGE: "img",
    },
    {
      ID: "1",
      NAME: "Đồng phục hs cấp 2",
      PRICE: "100",
      CATEGORY: "Đồng phục hs",
      SIZE: "xl",
      IMAGE: "img",
    },
  ];
  const columns = ["ID", "NAME", "PRICE", "CATEGORY", "SIZE", "IMAGE"];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Admin>
      <div>
        <div className="grid grid-cols-2 gap-5 ">
          {columns.map((column) => (
            <div key={column} className="m-2 md:flex ">
              <label htmlFor={column} className="font-bold mr-2 md:w-28">
                {column.toUpperCase()}:
              </label>
              <input
                type="text"
                id={column}
                name={column}
                value={formData[column]}
                onChange={handleChange}
                className="border-2 p2 "
              />
            </div>
          ))}
        </div>
        <div className="flex m-3">
          <button
            className="bg-green-500 text-white py-2 px-4 mr-4 rounded"
            onClick={() => {}}
          >
            Thêm
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 mr-4 rounded"
            onClick={() => {}}
          >
            Sửa
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 mr-4 rounded"
            onClick={() => {}}
          >
            Xóa
          </button>
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded"
            onClick={() => {}}
          >
            Làm mới
          </button>
        </div>
        <div className="bg-white rounded-md text-center  lg:m-3 xl:m-3">
          <Table data={data} columns={columns} />
        </div>
      </div>
    </Admin>
  );
}
