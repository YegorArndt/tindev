"use client";
import { FieldBox } from "app/components";
import { SearchInput, NotFound } from "app/components";
import { useSearch } from "app/hooks";
import { all_fields } from "../constants";

export default function AllUserFields({}) {
  const { search, setSearch, filteredFields } = useSearch(all_fields);

  return (
    <>
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
      {filteredFields.length === 0 && <NotFound />}
      {filteredFields.map((field) => (
        <FieldBox key={field.inputId} {...field} />
      ))}
    </>
  );
}
