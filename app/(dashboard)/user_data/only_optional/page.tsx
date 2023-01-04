"use client";

import { FieldBox, SearchInput, NotFound } from "app/components";
import { useSearch } from "app/hooks";
import { all_fields } from "../constants";

const optional_fields = all_fields.filter((field) => !field.required);

export default function OnlyOptionalUserFields({}) {
  const { search, setSearch, filteredFields } = useSearch(optional_fields);

  return (
    <>
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
      {filteredFields.length === 0 && (
        <div className="flex-center">
          <NotFound />
        </div>
      )}
      {filteredFields.map(
        (field) =>
          !field.required && <FieldBox key={field.inputId} {...field} />
      )}
    </>
  );
}
