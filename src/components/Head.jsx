import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex items-center col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8 mx-2 flex items-center"
            src={
              "https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=360"
            }
            alt="youtube-logo"
          />
        </a>
        <div className="flex items-center capitalize text-xl font-bold tracking-tight">
          DEVTUBE
        </div>
      </div>
      <div className="col-span-10 px-48 text-center mt-1">
        <div className="flex justify-center">
          <input
            className="w-1/2 px-4 py-2 border border-gray-400 rounded-l-full focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <button className="border border-gray-400 rounded-r-full px-4 py-2 bg-gray-100 hover:bg-gray-200">
            <IoSearchOutline />
          </button>
        </div>
      </div>
      <div className="bg-[#E5E5E5] w-24 rounded-full text-center">
        <button className="p-2">+ Create</button>
      </div>
      <div>
        <IoNotificationsOutline className="h-10 text-xl" />
      </div>
      <div className="col-span-1 flex items-center">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
