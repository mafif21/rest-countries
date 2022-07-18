const Navbar = () => {
  return (
    <div className="bg-white py-7 px-5 shadow-md flex justify-between items-center lg:px-20">
      <div className="brand">
        <h1 className="font-semibold">Where in the world?</h1>
      </div>

      <div className="darkMode">
        <h3 className="text-xs font-semibold lg:text-sm">Dark Mode</h3>
      </div>
    </div>
  );
};

export default Navbar;
// tinggal ngasih icon di class dark mode
