import React, { useEffect, useState } from "react";
import DashboardBook from "./DashboardBook";

const Dashboard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className=" d-flex justify-content-center ">
      <div className="hero min-h-screen">
        <div className=" hero-content overflow-x-auto h-full w-full flex flex-col">
          <div className="form-control flex flex-row gap-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
            <button className="btn bg-[#5865F2] text-white">Add New</button>
          </div>
          <table className="table w-[95%] border rounded-t-md">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#5865F2]">ID</th>
                <th className="bg-[#5865F2]">Book</th>
                <th className="bg-[#5865F2]">Author</th>
                <th className="bg-[#5865F2]">Category</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                {items.map((item) => (
                  <DashboardBook key={item._id} item={item}></DashboardBook>
                ))}
              </tr>
              {/* row 2 */}
              <tr>
                <td>
                  <th>
                    <button className="btn btn-ghost btn-xs">02</button>
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
                      <div className="font-bold">69 shades of gray</div>
                      {/* <div className="text-sm opacity-50">China</div> */}
                    </div>
                  </div>
                </td>
                <td>
                  Taivan Reza
                  <br />
                  {/* <span className="badge badge-ghost badge-sm">
                    Tax Accountant
                  </span> */}
                </td>
                <td>Premium</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>
                  <th>
                    <button className="btn btn-ghost btn-xs">03</button>
                  </th>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-4@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Touba touba</div>
                      {/* <div className="text-sm opacity-50">Russia</div> */}
                    </div>
                  </div>
                </td>
                <td>
                  Mehrab Evan
                  <br />
                  {/* <span className="badge badge-ghost badge-sm">
                    Office Assistant I
                  </span> */}
                </td>
                <td>Free</td>
              </tr>
              {/* row 4 */}
              {/* <tr>
                <td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-5@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Yancy Tear</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>
                  Wyman-Ledner
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Community Outreach Specialist
                  </span>
                </td>
                <td>Indigo</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
