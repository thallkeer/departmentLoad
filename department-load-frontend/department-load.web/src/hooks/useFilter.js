import { useState, useEffect } from "react";

export const useFilter = (initialState, filterFunc) => {
  const [filtersState, setFiltersState] = useState(initialState);

  useEffect(() => {
    filterFunc();
  }, []);

  const handleFilterChange = e => {
    const id = e.target.value;
    const name = e.target.name;

    setFiltersState({
      ...filtersState,
      [name]: id
    });
  };

  const filterSelector = item => {
    for (let key in filtersState) {
      console.log(
        "key",
        key,
        "item property",
        item[key],
        "filter",
        filtersState[key]
      );

      if (item[key] === undefined || item[key] != filtersState[key])
        return false;
    }
    return true;
  };

  return { filtersState, handleFilterChange, filterSelector };
};
