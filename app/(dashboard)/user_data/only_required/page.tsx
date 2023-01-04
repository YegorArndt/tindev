"use client";
import { FieldBox } from "app/components";
import { SearchInput, NotFound } from "app/components";
import { useSearch } from "app/hooks";
import { all_fields } from "../constants";

const required_fields = all_fields.filter((field) => field.required);

export default function UserData({}) {
  const { search, setSearch, filteredFields } = useSearch(required_fields);

  return (
    <>
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
      {filteredFields.length === 0 && (
        <div className="flex-center">
          <NotFound />
        </div>
      )}
      {filteredFields.map(
        (field) => field.required && <FieldBox key={field.inputId} {...field} />
      )}
    </>
  );
}
