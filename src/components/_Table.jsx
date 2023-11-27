import React from "react";

 function Table({ data, columns}) {
  return (
    <div className="container mx-auto w-auto overflow-x-auto">
      <table className="min-w-full bg-pink-100 border border-black ">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="py-2 px-4 border-b border-black ">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="py-2 px-4 border-b ">
                  {item[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table