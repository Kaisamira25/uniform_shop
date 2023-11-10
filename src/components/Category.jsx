import React from "react";

export default function Category({Title}) {
  return (
      <section className="category border-2 px-5">
        <p className="text-center">{Title}</p>
        <ul>
          <li className="space-x-2">
            <input type="checkbox" />
            <a href="#">Quần</a>
          </li>
          <li className="space-x-2">
            <input type="checkbox" />
            <a href="#">Áo</a>
          </li>
          <li className="space-x-2">
            <input type="checkbox" />
            <a href="#">Phụ kiện</a>
          </li>
        </ul>
      </section>
  );
}
