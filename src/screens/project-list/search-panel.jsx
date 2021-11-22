import React from "react";
import { useEffect, useState } from "react";

export const SearchPanel = ({ users, param, setParam }) => {
  return (
    <form action="">
      <div>
        {/*setParam(Object.assign({}, param, {name:e.target.value}))*/}
        <input
          type="text"
          value={param.name}
          onChange={(e) => setParam({ ...param, name: e.target.value })}
        />
        <select
          value={param.personId}
          onChange={(e) =>
            setParam({
              ...param,
              personId: e.target.value,
            })
          }
        />
        <option value={""}>Staff</option>
        {users.map((user) => {
          <option value={user.id}>{user.name}</option>;
        })}
      </div>
    </form>
  );
};
