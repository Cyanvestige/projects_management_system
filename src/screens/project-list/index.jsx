import React from "react";
import { SearchPanel } from "./search-panel";
import { useEffect, useState } from "react";
import { List } from "./list";
import { cleanObject } from "utils";
import { useMount, useDebounce } from "utils";
import * as qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectList = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 500);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(
      // `${apiUrl}/projects?name=${param.name}&personId=${param.personId}`
      `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debouncedParam]);

  // custom hook
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
