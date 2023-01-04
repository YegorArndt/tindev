"use client";

import { useState, useEffect, useRef } from "react";

export default function useSearch<T>(searchableData: T[]) {
  const [search, setSearch] = useState("");
  const [filteredFields, setFilteredFields] = useState(searchableData);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let filtered;
    clearTimeout(debounceTimer.current!);
    const debounced = () => {
      filtered = searchableData.filter((fieldObj) => {
        for (const key in fieldObj) {
          if (
            typeof fieldObj[key] === "string" &&
            fieldObj[key].toLowerCase().includes(search.toLowerCase())
          ) {
            return true;
          }
        }
      });
      setFilteredFields(filtered);
    };

    debounceTimer.current = setTimeout(debounced, 500);
  }, [search]);

  return { search, setSearch, filteredFields };
}
