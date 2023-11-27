import Table from "../../../components/_Table";
import Admin from "./Admin";

export default function UserAdmin() {
  const data = [
    {
      ID: "1",
      "USER NAME": "Lê Khoa",
      GMAIL: "Khoa@gmail.com",
      PHONE: "09020209",
      STATUS: "Onl",
      "": "X",
    },
  ];
  const columns = ["ID", "USER NAME", "GMAIL", "PHONE", "STATUS", ""];

  return (
    <Admin>
      <div>
        <form action="" className=" ml-3 my-3  sm:block sm:col-span-2">
          <input
            className="px-5 h-7 outline-none text-sm  rounded-full w-2/4 bg-gray-300"
            type="text"
            placeholder="Search here"
          />
        </form>
        <div className="bg-white rounded-md text-center  lg:m-3 xl:m-3">
          <Table data={data} columns={columns} />
        </div>
      </div>
    </Admin>
  );
}
