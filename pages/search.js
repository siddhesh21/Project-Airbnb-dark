import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  {
    /** console.log(router.query); */
  }

  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays ~ {range} ~ for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 whitespace-nowrap">
            <p
              className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg 
            active:scale-100 active:bg-red-400 active:text-black active:font-semibold 
            transition transform duration-100 ease-out"
            >
              Cancellation Flexibility
            </p>
            <p
              className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg 
            active:scale-100 active:bg-red-400 active:text-black active:font-semibold 
            transition transform duration-100 ease-out"
            >
              Type of Places
            </p>

            <p
              className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg 
            active:scale-100 active:bg-red-400 active:text-black active:font-semibold 
            transition transform duration-100 ease-out"
            >
              Price
            </p>
            <p
              className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg 
            active:scale-100 active:bg-red-400 active:text-black active:font-semibold 
            transition transform duration-100 ease-out"
            >
              Rooms and Beds
            </p>
            <p
              className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg 
            active:scale-100 active:bg-red-400 active:text-black active:font-semibold 
            transition transform duration-100 ease-out"
            >
              More Filters
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;