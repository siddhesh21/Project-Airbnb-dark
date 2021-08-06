import Image from "next/image";
import { SearchIcon, UsersIcon, UserCircleIcon } from "@heroicons/react/solid";
import { GlobeAltIcon, MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header
      className="sticky z-50 grid grid-cols-3 bg-black-700 shadow-2xl p-5
    md:px-10"
    >
      {/* LEFT */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto "
      >
        <Image
          src="https:links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* MIDDLE */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none"
          type="text"
          placeholder={placeholder || "Search for the Place"}
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400 text-white 
          rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center space-x-4 justify-end">
        <p className="hidden md:inline ">Become a HOST</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="text-black flex flex-col col-span-3 mx-auto mt-2">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={["#FD5B61"]}
          />
          <div className="bg-black text-white border-2 border-white p-2 flex items-center mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg font-bold outline-none bg-black text-red-400"
            />
          </div>
          <div className="flex border-white justify-between">
            <button
              onClick={resetInput}
              className="flex-grow p-2 border-2 border-white rounded-full text-white"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow p-2 border-2 border-red-400 rounded-full text-red-400"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
