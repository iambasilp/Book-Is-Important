import React from "react";

const ReadNowFilterTool = ({ children, onselectAction}) => {
  return (
    <div>
      {children}
      <div className="flex justify-center">
        <select onChange={onselectAction} className="select select-bordered w-full max-w-xs mt-10">
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
