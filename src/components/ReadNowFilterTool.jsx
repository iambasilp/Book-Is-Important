import React from "react";

const ReadNowFilterTool = ({ children }) => {
  return (
    <div>
      {children}
      <div>
        <select className="select select-bordered w-full max-w-xs flex justify-center mt-10">
          <option value="All">
            All
          </option>
          <option value="Read">Read</option>
          <option value="Unread">Unread</option>
        </select>
      </div>
    </div>
  );
};

export default ReadNowFilterTool;
