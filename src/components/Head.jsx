import React, { useEffect, useState } from "react";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  /**
   * searchCache = {
   *    "iphone" : ["iphone 11,"iphone15"]
   * }
   * searchQuery = iphone
   */
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-12 items-center p-4  bg-white">
      <div className="flex items-center col-span-3 space-x-3">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8"
            src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=360"
            alt="youtube-logo"
          />
        </a>
        <span className="text-xl font-bold tracking-tight">DEVTUBE</span>
      </div>

      <div className="col-span-6 flex justify-center">
        <div className="relative w-3/5">
          <div>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                setShowSuggestions(true);
              }}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              <IoSearchOutline className="text-xl" />
            </button>
          </div>
          {showSuggestions && (
            <div className="fixed bg-white py-2 px-2 w-[26rem] shadow:lg rounded-lg border-gray-100">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="flex gap-2 py-1 items-center hover:bg-gray-100"
                  >
                    <IoSearchOutline />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-3 flex items-center justify-end space-x-4">
        <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300">
          + Create
        </button>
        <IoNotificationsOutline className="text-2xl text-gray-600 cursor-pointer" />
        <img
          className="h-8 w-8 rounded-full border border-gray-300"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
