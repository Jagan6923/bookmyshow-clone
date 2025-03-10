import React, { useState, useEffect } from "react";
import { Star, ThumbsUp, ThumbsDown, X } from "lucide-react";
import logo from "./logo.svg";
import hero from "./kingston-et00434967-1741240067.avif";
import { CgSearch } from "react-icons/cg";
import { LuAlignJustify } from "react-icons/lu";
import { SlArrowDown } from "react-icons/sl";

import actor1 from "./g-v-prakash-kumar-3973-15-02-2022-01-57-26.avif";
import actor2 from "./divya-bharathi-2015352-1740141690.avif";
import actor3 from "./rajesh-balachandiran-2035916-1711966343.avif";
import actor4 from "./chetan-kadambi-2038650-1721041954.avif";
import actor5 from "./azhagam-perumal-35906-24-03-2017-17-39-20.avif";

import role1 from "./kamal-prakash-2045141-1740136295.avif";
import role2 from "./zee-studios-1090737-11-06-2018-04-13-39.avif";
import role3 from "./parallel-universe-pictures-2045142-1740136440.avif";
import role4 from "./g-v-prakash-kumar-3973-15-02-2022-01-57-26.avif";
import role5 from "./gokul-benoy-2027511-1721899698.avif";
import role6 from "./dhilip-subbarayan-1067945-25-09-2017-12-18-33.avif";

import movie1 from "./dragon-et00430623-1737717074.avif";
import movie2 from "./rakthrekha-et00428954-1736757324.avif";
import movie3 from "./captain-america-brave-new-world-et00399765-1737957738.avif";
import movie4 from "./deva-et00374104-1738145051.avif";
function App() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has scrolled past the initial view
      const scrollPosition = window.scrollY;
      setShowStickyHeader(scrollPosition > 200); // Adjust this value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLocationSelect = (location: React.SetStateAction<string>) => {
    setSelectedLocation(location);
    setIsLocationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {showStickyHeader && (
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold truncate">Kingston</h1>
              </div>
              <button className="bg-[#E5194B] text-white px-4 py-2 rounded-md">
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      )}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="navbar flex flex-col md:flex-row items-center justify-between py-2 md:py-4">
            <div className="flex items-center justify-between md:hidden">
              <img
                src={logo}
                className="brand-logo h-8"
                alt="BookMyShow Logo"
              />
            </div>
            <div className="hidden md:flex w-full items-center justify-between">
              <div className="navbar-left flex items-center space-x-4">
                <img
                  src={logo}
                  className="brand-logo h-8"
                  alt="BookMyShow Logo"
                />
                <div className="relative w-[548px] h-10">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10">
                    <CgSearch className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search for Movies, Events, Plays, Sports, and Activities"
                    className="w-full h-full pl-10 pr-3 border border-[#ededed] rounded-md text-xs text-[#999999] opacity-90 focus:outline-none focus:ring-2 focus:ring-[#E5194B]"
                  />
                </div>
              </div>
              <div className="navbar-right flex items-center space-x-4">
                <div className="flex items-center">
                  <a
                    href="#"
                    className="text-[#333333] text-sm mr-1"
                    onClick={() => setIsLocationModalOpen(true)}
                  >
                    {selectedLocation}
                  </a>
                  <SlArrowDown className="text-[#333333] text-xs font-semibold" />
                </div>
                <button className="signin w-[68px] h-[25px] bg-[#f74464] text-white text-xs rounded-md">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="mb-2 md:mb-0 md:mr-4">
              <div className="flex overflow-x-auto hide-scrollbar">
                <div className="flex space-x-4 md:space-x-6 min-w-max">
                  {[
                    "Movies",
                    "Stream",
                    "Events",
                    "Plays",
                    "Sports",
                    "Activities",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-xs md:text-sm text-gray-600 hover:text-gray-800 flex-shrink-0 whitespace-nowrap"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:ml-auto">
              <div className="flex overflow-x-auto hide-scrollbar">
                <div className="flex space-x-4 md:space-x-6 min-w-max">
                  {["ListYourShow", "Corporates", "Offers", "Gift Cards"].map(
                    (item) => (
                      <a
                        key={item}
                        href="#"
                        className="text-xs md:text-sm text-gray-600 hover:text-gray-800 flex-shrink-0 whitespace-nowrap"
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLocationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Select Location</h2>
              <button onClick={() => setIsLocationModalOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Search for location..."
              className="w-full mb-4 py-2 px-3 border rounded-md"
            />
            <div className="flex flex-wrap gap-2">
              <button
                className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                onClick={() => handleLocationSelect("Mumbai")}
              >
                Mumbai
              </button>
              <button
                className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                onClick={() => handleLocationSelect("Delhi")}
              >
                Delhi
              </button>
              <button
                className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                onClick={() => handleLocationSelect("Bangalore")}
              >
                Bangalore
              </button>
              <button
                className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                onClick={() => handleLocationSelect("Hyderabad")}
              >
                Hyderabad
              </button>
              <button
                className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                onClick={() => handleLocationSelect("Chennai")}
              >
                Chennai
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative w-full bg-black text-white">
        {/* Background Image - Hidden on mobile */}
        <div className="absolute inset-0 hidden md:block">
          <img
            src={hero}
            alt="Movie Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 lg:flex lg:items-center lg:gap-8 lg:pl-12">
          {/* Movie Poster - Responsive Sizing */}
          <div className="w-full max-w-[150px] md:max-w-[200px] lg:max-w-[220px] mx-auto md:mx-0">
            <img
              src={hero}
              alt="Movie Poster"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full mt-6 lg:mt-0 lg:w-2/3 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-3">Kingston</h1>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              <span className="text-base md:text-lg font-medium">
                7.8/10 (929 Votes)
              </span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start text-base md:text-lg text-gray-300 mb-4">
              <span className="border px-2 py-1 rounded-md">2D</span>
              <span className="border px-2 py-1 rounded-md">Tamil, Telugu</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm md:text-base">
              2h 20m • Action, Adventure, Fantasy, Thriller • UA16+ • 7 Mar,
              2025
            </p>

            <div className="flex justify-center md:justify-start">
              <button className="bg-[#E5194B] text-white px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold rounded-lg hover:bg-[#c81543]">
                Book tickets
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">About the movie</h2>
        <p className="text-gray-600">
          The sea off the coast of Thoovathor becomes cursed following a
          paranormal event in 1982. Kingston, a daring sea smuggler, ventures
          into the haunted waters with his friends to break the curse and bring
          hope back to their doomed village.
        </p>
      </section>

      <hr />

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Cast</h2>
        <div className="flex space-x-6 overflow-x-auto hide-scrollbar pb-4">
          {[
            {
              id: 1,
              name: "G.V. Prakash Kumar",
              character: "Actor",
              imageUrl: actor1,
            },
            {
              id: 2,
              name: "Divya Bharathi",
              character: "Actor",
              imageUrl: actor2,
            },
            {
              id: 3,
              name: "Rajesh Balachandiran",
              character: "Actor",
              imageUrl: actor3,
            },
            {
              id: 4,
              name: "Chetan Kadambi",
              character: "Actor",
              imageUrl: actor4,
            },
            {
              id: 5,
              name: "Azhagam Perumal",
              character: "Actor",
              imageUrl: actor5,
            },
          ].map((cast) => (
            <div key={`cast-${cast.id}`} className="flex-none text-center w-32">
              <img
                src={cast.imageUrl}
                className="w-24 h-24 rounded-full mx-auto mb-2"
                alt={cast.name}
              />
              <p className="">{cast.name}</p>
              <p className="text-sm text-gray-600">{cast.character}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6 mt-8">Crew</h2>
        <div className="flex space-x-6 overflow-x-auto hide-scrollbar pb-4">
          {[
            {
              id: 1,
              name: "kamal Prakash",
              role: "Director, Writer",
              imageUrl: role1,
            },
            {
              id: 2,
              name: "Zee Studios",
              role: "Producer",
              imageUrl: role2,
            },
            {
              id: 3,
              name: "Parallel Universe Pictures",
              role: "Producer",
              imageUrl: role3,
            },
            {
              id: 4,
              name: "G.V. Prakash Kumar",
              role: "Music Director",
              imageUrl: role4,
            },
            {
              id: 5,
              name: "Gokul Benoy",
              role: "Cinimatographer",
              imageUrl: role5,
            },
            {
              id: 5,
              name: "Dhilip Subbarayan",
              role: "Action Director",
              imageUrl: role6,
            },
          ].map((crew) => (
            <div key={`crew-${crew.id}`} className="flex-none text-center w-32">
              <img
                src={crew.imageUrl}
                className="w-24 h-24 rounded-full mx-auto mb-2"
                alt={crew.name}
              />
              <p className="">{crew.name}</p>
              <p className="text-sm text-gray-600">{crew.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Top Reviews</h2>
        <div className="flex space-x-6 overflow-x-auto hide-scrollbar pb-4">
          {[1, 2, 3].map((i) => (
            <div
              key={`review-${i}`}
              className="flex-none w-[280px] md:w-96 bg-white p-6 rounded-lg shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-semibold">User Name</p>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-1">
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                  <button className="p-1">
                    <ThumbsDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-gray-600">
                Great movie! The performances were outstanding and the story
                kept me engaged throughout.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Posted on 24 Feb, 2024
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">You might also like</h2>
        <div className="flex space-x-6 overflow-x-auto hide-scrollbar pb-4">
          {[
            {
              id: 1,
              title: "Dragon",
              imageUrl: movie1,
            },
            {
              id: 2,
              title: "Movie Title 2",
              genre: "Comedy, Romance",
              imageUrl: movie2,
            },
            {
              id: 3,
              title: "Movie Title 3",
              genre: "Thriller, Mystery",
              imageUrl: movie3,
            },
            {
              id: 4,
              title: "Movie Title 4",
              genre: "Sci-Fi, Adventure",
              imageUrl: movie4,
            },
          ].map((movie) => (
            <div key={`movie-${movie.id}`} className="flex-none w-36 md:w-48">
              <img
                src={movie.imageUrl}
                className="w-full h-48 md:h-64 object-cover rounded-lg mb-2"
                alt={movie.title}
              />
              <p className="font-semibold">{movie.title}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">BookMyShow</h3>
              <p className="text-gray-400">
                The best way to book your entertainment!
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Movies</li>
                <li>Events</li>
                <li>Sports</li>
                <li>Plays</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
