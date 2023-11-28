import { Link } from "react-router-dom";
export default function MenuAdmin({ onMenuClick }) {
  return (
    <div className="menu-container">
      <div className="grid grid-cols-2 m-2 gap-2 text-center md:grid-cols-4 lg:grid-cols-1">
        <Link to="/admin/product" onClick={() => onMenuClick("ProductAdmin")}>
          <div className="hover:bg-gray-200 p-4 cursor-pointer rounded-md border-2  border-gray-500 md:text-xl lg:grid grid-cols-2">
            <div className="flex flex-col items-center  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-3/12 h-2/12 lg:w-8 h-8 xl:ml-20"
              >
                <g
                  fill="none"
                  stroke="#000"
                  stroke-linejoin="round"
                  stroke-width="4"
                >
                  <path d="M44 14L24 4L4 14V34L24 44L44 34V14Z" />
                  <path stroke-linecap="round" d="M4 14L24 24" />
                  <path stroke-linecap="round" d="M24 44V24" />
                  <path stroke-linecap="round" d="M44 14L24 24" />
                  <path stroke-linecap="round" d="M34 9L14 19" />
                </g>
              </svg>
            </div>
            <div className="flex flex-col text-base  sm:text-lg md:text-xl  lg:text-2xl lg:items-start xl:items-start">
              Product
            </div>
          </div>
        </Link>
        <Link to="/admin/user" onClick={() => onMenuClick("UserAdmin")}>
          <div className="hover:bg-gray-200 p-4 cursor-pointer rounded-md border-2 border-gray-500 md:text-xl lg:grid grid-cols-2">
            <div className="flex flex-col items-center mt-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-3/12 h-2/12 lg:w-8 h-8 xl:ml-20 "
              >
                <path
                  fill="currentColor"
                  d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z"
                />
              </svg>
            </div>
            <div className="flex flex-col text-base  sm:text-lg md:text-xl  lg:text-2xl lg:items-start xl:items-start">
              User
            </div>
          </div>
        </Link>
        <Link to="/admin/order" onClick={() => onMenuClick("OrderAdmin")}>
          <div className="hover:bg-gray-200 p-4 cursor-pointer rounded-md border-2 border-gray-500 md:text-xl lg:grid grid-cols-2">
            <div className="flex flex-col items-center mt-2  xl:w-29">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-3/12 h-2/12 lg:w-8 h-8 xl:ml-20"
              >
                <path
                  fill="currentColor"
                  d="m17.275 18.125l-.425-.425q-.225-.225-.537-.225t-.538.225q-.225.225-.225.525t.225.525l.975.975q.225.225.525.225t.525-.225l2.425-2.375q.225-.225.225-.538t-.225-.537q-.225-.225-.538-.225t-.537.225l-1.875 1.85ZM7 9h10q.425 0 .713-.288T18 8q0-.425-.288-.713T17 7H7q-.425 0-.713.288T6 8q0 .425.288.713T7 9Zm11 14q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23ZM3 21.875V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v6.675q-.475-.225-.975-.375T19 11.075V5H5v14.05h6.075q.125.775.388 1.475t.687 1.325q-.125.025-.263-.038t-.237-.162l-.8-.8q-.15-.15-.35-.15t-.35.15l-.8.8q-.15.15-.35.15t-.35-.15l-.8-.8q-.15-.15-.35-.15t-.35.15l-.8.8q-.15.15-.35.15t-.35-.15l-.8-.8q-.15-.15-.35-.15t-.35.15l-.8.8l-.35.225ZM7 17h4.075q.075-.525.225-1.025t.375-.975H7q-.425 0-.713.288T6 16q0 .425.288.713T7 17Zm0-4h6.1q.95-.925 2.213-1.463T18 11H7q-.425 0-.713.288T6 12q0 .425.288.713T7 13Zm-2 6.05V5v14.05Z"
                />
              </svg>
            </div>
            <div className="flex flex-col text-base  sm:text-lg md:text-xl  lg:text-2xl lg:items-start xl:items-start">
              Order
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
