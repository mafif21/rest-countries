import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  const param = useParams();
  const endPoint = "https://restcountries.com/v3.1/name/";
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(endPoint);
  }, []);

  const fetchData = async url => {
    try {
      const response = await fetch(`${url}${param.name}`);
      const data = await response.json();

      setDatas(data);
      setLoading(false);

      if (!response) {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="px-5 mt-10 lg:px-20 h-full lg:h-screen">
        <div className="bg-white shadow-md py-2 px-4 flex justify-between items-center w-1/3 rounded-md lg:w-36 lg:px-8">
          <FontAwesomeIcon icon={faArrowLeftLong} />
          <Link to="/">Back</Link>
        </div>
        {loading && <p className="text-textIfLight mt-14">Loading...</p>}
        {datas.map(data => {
          const { flags, name, population, region, subregion, capital, tld, currencies, languages, borders } = data;

          return (
            <div key={data.cca2} className="mt-14 mb-16 grid grid-cols-1 lg:grid-cols-2 lg:mb-16">
              <div>
                <img src={flags.png} alt={name.common} className="w-full h-64 lg:h-96 lg:max-w-lg" />
              </div>

              <div>
                <div className="title my-8">
                  <h1 className="text-xl font-bold lg:text-3xl">{name.common}</h1>
                </div>

                <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-between">
                  <div className="space-y-2 lg:text-lg text-textIfLightDetail lg:space-y-3">
                    <p>
                      <span className="text-textIfLight font-semibold">Native Name: </span>
                      {name.common}
                    </p>
                    <p>
                      <span className="text-textIfLigh font-semibold">Population: </span>
                      {population}
                    </p>
                    <p>
                      <span className="text-textIfLight font-semibold">Region: </span>
                      {region}
                    </p>
                    <p>
                      <span className="text-textIfLight font-semibold">Sub Region: </span>
                      {subregion}
                    </p>
                    <p>
                      <span className="text-textIfLight font-semibold">Capital: </span>
                      {capital}
                    </p>
                  </div>

                  <div className="space-y-2 ttext-textIfLightDetail lg:text-lg lg:space-y-3">
                    <p>
                      <span className="text-textIfLight font-semibold">Top Level Domain: </span>
                      {tld}
                    </p>
                    <p>
                      <span className="text-textIfLight font-semibold">Currencies: </span>
                      {Object.keys(currencies)}
                    </p>
                    <p>
                      <span className="text-textIfLight font-semibold">Languages: </span>
                      {`${Object.values(languages)},`}
                    </p>
                  </div>
                </div>

                {"borders" in data && (
                  <div className="my-10 gap-y-4 flex flex-col lg:flex-row lg:items-center lg:gap-x-5 lg:text-lg">
                    <h2>Border Countries:</h2>
                    <div className="flex flex-wrap gap-2">
                      {borders.map((border, index) => {
                        return (
                          <div key={index} className="py-2 px-8 font bg-white rounded-md shadow-lg lg:py-1">
                            <p>{border}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Detail;
