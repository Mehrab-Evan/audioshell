import React from 'react';

const DashboardBook = (props) => {
    const {id, title, author, category} = props.item;
    return (
      <div>
        <td>
          <th>
            <button className="btn btn-ghost btn-xs">{id}</button>
          </th>
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src="/tailwind-css-component-profile-3@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              {/* <div className="text-sm opacity-50">China</div> */}
            </div>
          </div>
        </td>
        <td>
          {author}
          <br />
          {/* <span className="badge badge-ghost badge-sm">
                    Tax Accountant
                  </span> */}
        </td>
        <td>{category}</td>
      </div>
    );
};

export default DashboardBook;