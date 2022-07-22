import { Link } from "react-router-dom";

const Card = props => {
  return (
    <div className={`px-5 grid grid-cols-1 ${props.loading ? "justify-items-start" : "justify-items-center"} mt-10 lg:grid-cols-4 lg:px-20`}>
      {props.loading && <p>Loading...</p>}
      {props.countries.map(country => {
        const { name, flags, population, region, capital } = country;

        var reverse = population.toString().split("").reverse().join(""),
          thousand = reverse.match(/\d{1,3}/g);
        thousand = thousand.join(".").split("").reverse().join("");

        return (
          <div key={country.cca2} className="mb-10 rounded-md overflow-hidden w-64 shadow-lg bg-white lg:w-64 lg:mb-12 dark:bg-elementDark dark:text-textIfDark">
            <Link to={`detail/${name.common}`}>
              <div className="h-40">
                <img src={flags.png} alt={name.common} className="h-full w-full object-cover" />
              </div>

              <div className="p-6">
                <div>
                  <h2 className="text-xl font-semibold">{name.common}</h2>
                </div>

                <div className="my-3">
                  <p className="mb-1 font-thin">
                    <span className="font-semibold">Population:</span> {thousand}
                  </p>
                  <p className="mb-1 font-thin">
                    <span className="font-semibold">Region:</span> {region}
                  </p>
                  <p className="font-thin">
                    <span className="font-semibold">Capital:</span> {capital}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
