import { useState } from "react";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeModal = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleScroll = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Products", id: "products" },
    { label: "Collation", id: "collation" },
    { label: "FAQ's", id: "faqs" },
    { label: "Contact Us", id: "contact" },
  ];

  return (
    <>
      <header className="bg-white w-full flex items-center justify-between px-4 md:px-6 lg:px-12 sticky top-0 shadow-md z-50 h-20 md:h-28">
        <a href="/">
          <img src="/images/logo.png" alt="logo" className="w-20 h-20 md:w-28 md:h-28 cursor-pointer" />
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-3xl focus:outline-none"
          >
            &#9776;
          </button>
        </div>

        <div className="hidden md:flex gap-2 lg:gap-3">
          {navItems.map(({ label, id }) => (
            <button
              key={label}
              onClick={() => handleScroll(id)}
              className="border border-black px-4 lg:px-6 py-1.5 lg:py-2 font-serif text-sm lg:text-lg cursor-pointer relative group transition-all duration-300 hover:bg-red-500 hover:text-white"
            >
              {label}
              <span className="absolute left-0 -bottom-1.5 w-0 h-[1.5px] bg-black transition-all duration-200 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <div className="hidden md:flex gap-3">
          <button
            onClick={() => {
              setShowLogin(true);
              setShowSignup(false);
            }}
            className="border border-black px-4 lg:px-6 py-1.5 lg:py-2 font-serif text-sm lg:text-lg cursor-pointer relative group transition-all duration-300 hover:bg-red-500 hover:text-white"
          >
            Log in
            <span className="absolute left-0 -bottom-1.5 w-0 h-[1.5px] bg-black transition-all duration-200 group-hover:w-full"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col px-4 py-3 space-y-2">
          {navItems.map(({ label, id }) => (
            <button
              key={label}
              onClick={() => handleScroll(id)}
              className="border border-black px-4 py-2 font-serif text-sm cursor-pointer relative group transition-all duration-300 hover:bg-red-500 hover:text-white"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => {
              setShowLogin(true);
              setShowSignup(false);
              setIsMobileMenuOpen(false);
            }}
            className="border border-black px-4 py-2 font-serif text-sm cursor-pointer transition-all duration-300 hover:bg-red-500 hover:text-white"
          >
            Log in
          </button>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center font-serif justify-center bg-black bg-opacity-60">
          <div className="bg-white w-11/12 max-w-md p-6 rounded-lg relative shadow-xl">
            <button onClick={closeModal} className="absolute top-3 right-4 text-xl font-bold cursor-pointer">&times;</button>
            <p className="mb-3">Sign up to create a new account, or log in if you already have one:</p>
            <input type="email" placeholder="Email" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded mb-3" />
            <input type="password" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded mb-4" />
            <a href="/">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white text-lg py-2 rounded cursor-pointer">Login</button>
            </a>
            <button
              onClick={() => {
                setShowLogin(false);
                setShowSignup(true);
              }}
              className="w-full bg-red-500 hover:bg-red-600 text-white text-lg py-2 rounded cursor-pointer mt-1"
            >
              Sign Up
            </button>
            <button className="float-right text-md cursor-pointer mt-2 text-blue-600 hover:underline">Forget Password?</button>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 z-50 flex items-center font-serif justify-center bg-black bg-opacity-60">
          <div className="bg-white w-11/12 max-w-md p-6 rounded-lg relative shadow-xl">
            <button onClick={closeModal} className="absolute top-3 right-4 text-xl font-bold cursor-pointer">&times;</button>
            <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
            <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded mb-3" />
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded mb-3" />
            <input type="password" placeholder="Create a Strong Password" className="w-full px-4 py-2 border border-gray-300 rounded mb-4" />
            <input type="password" placeholder="Confirm Password" className="w-full px-4 py-2 border border-gray-300 rounded mb-4" />
            <a href="/">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded">Sign Up</button>
            </a>
            <button
              onClick={() => {
                setShowSignup(false);
                setShowLogin(true);
              }}
              className="w-full mt-3 text-blue-600 hover:underline text-center"
            >
              Already have an account? Log in
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;