import { Link } from "react-router-dom";

const Card = props => {
  return (
    <div className="px-5 grid grid-cols-1 justify-items-center mt-10 lg:grid-cols-4 lg:px-20">
      {props.countries.map(country => {
        const { name, flags, population, region, capital } = country;
        return (
          <div key={country.cca2} className="mb-10 rounded-md overflow-hidden w-64 shadow-lg bg-white lg:w-64 lg:mb-12">
            <Link to="detail">
              <div className="h-40">
                <img src={flags.png} alt={name.common} className="h-full w-full object-cover" />
              </div>

              <div className="p-6">
                <div>
                  <h2 className="text-xl font-semibold">{name.common}</h2>
                </div>

                <div className="my-3">
                  <p className="mb-1 font-thin">
                    <span className="font-semibold">Population:</span> {population}
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
