"use client";

import { SearchInput, NotFound, Card } from "app/components";
import { useSearch } from "app/hooks";
import type { Vacancy } from "stubby";

export default function Filters({ vacancies }) {
  const { search, setSearch, filteredFields } = useSearch(vacancies);

  return (
    <>
      {/* Imports the Lottie Player for NotFound  */}
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <SearchInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        wrapperCn="!static !pt-0 !bg-transparent !border-none"
      />
      {filteredFields.length === 0 ? (
        <div className="w-full">
          <NotFound className="!border-none" />
        </div>
      ) : (
        <div className="[&>*]:mt-8">
          {(filteredFields as Vacancy[]).map(({ ...vacancy }) => (
            <Card key={vacancy.description} {...vacancy} />
          ))}
        </div>
      )}
    </>
  );
}
