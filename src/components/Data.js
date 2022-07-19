import { useEffect, useRef, useState } from "react";
import Card from "./Card";

const Data = () => {
  const endpoint = "https://restcountries.com/v3.1";
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  //search
  const [search, setSearch] = useState("");

  //selection
  const selectRef = useRef();

  useEffect(() => {
    fetchData(endpoint);
  }, []);

  const fetchData = async url => {
    try {
      const response = await fetch(`${url}/all`);
      const data = await response.json();
      setCountries(data);
      setLoading(false);

      if (!response) {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchHandler = countries.filter(country => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  });

  const selectRegion = async () => {
    const searchData = selectRef.current.value;

    if (searchData !== undefined && searchData !== "") {
      try {
        const response = await fetch(`${endpoint}/region/${searchData}`);
        const data = await response.json();
        setCountries(data);

        if (!response) {
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      fetchData(endpoint);
    }
  };

  return (
    <section>
      <div className="px-5 mt-5 lg:px-20 flex flex-col lg:flex-row lg:items-center">
        <div className="w-full">
          <input type="text" placeholder="Search for a country..." className="w-full py-3.5 px-3 shadow-md rounded-md placeholder:text-xs text-sm outline-none lg:w-1/2" onChange={e => setSearch(e.target.value)} />
        </div>

        <div className="lg:w-1/5">
          <select className="w-1/2 py-4 px-3 font-semibold text-xs rounded-md bg-white shadow-md mt-10 lg:mt-0 lg:w-full" ref={selectRef} onChange={() => selectRegion()}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Ocenia</option>
          </select>
        </div>
      </div>
      <Card countries={searchHandler} loading={loading} />
    </section>
  );
};

export default Data;
//kurang logo di input field
