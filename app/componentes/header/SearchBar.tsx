"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { FaUsers } from "react-icons/fa";
import Link from "next/link";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
function SearchBar({ placeholder }: { placeholder?: string }) {
  const [searchTerm, setSearchTerm] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          type="text"
          placeholder={placeholder || "Start your search"}
          className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none "
        ></input>
        <FaSearch className="hidden md:inline-flex h-8 w-8 p-2 bg-red-400 text-white rounded-full cursor-pointer md:mx-2" />
      </div>
      {searchTerm && (
        <div className=" absolute bg-red-200 top-[100%] left-[50%] flex flex-col col-span-3 mx-auto translate-x-[-50%] ">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["#FD5B61"]}
            minDate={new Date()}
          />
          <div className="flex items-center border-b bg-white p-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <FaUsers className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={numOfGuests}
              min={1}
              onChange={(e) => setNumOfGuests(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center bg-white p-5">
            <button
              type="button"
              className="flex-grow text-gray-500"
              onClick={() => setSearchTerm("")}
            >
              Cancel
            </button>
            <Link
              href={{
                pathname: "/search",
                search: `?location=${searchTerm}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`,
              }}
              onClick={() => setSearchTerm("")}
              className="flex-grow text-red-400"
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchBar;
