import React from "react";
import { verified } from "../utils/constants";


const VideoCard = ({ info }) => {
  const formatNumber = (num) => {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + "B"; // Billions
    if (num >= 1e6) return (num / 1e6).toFixed(1) + "M"; // Millions
    if (num >= 1e3) return (num / 1e3).toFixed(1) + "K"; // Thousands
    return num;
  };
  const timeAgo = (dateString) => {
    const publishedDate = new Date(dateString);
    const currentDate = new Date();

    const diffInMs = currentDate - publishedDate;
    const diffInSeconds = Math.floor(diffInMs / 1000);

    const years = Math.floor(diffInSeconds / (60 * 60 * 24 * 365));
    const months = Math.floor(
      (diffInSeconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30)
    );
    const days = Math.floor(
      (diffInSeconds % (60 * 60 * 24 * 30)) / (60 * 60 * 24)
    );
    const hours = Math.floor((diffInSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);

    if (years > 0) return `${years} years ${months} months ago`;
    if (months > 0) return `${months} months ${days} days ago`;
    if (days > 0) return `${days} days ago`;
    if (hours > 0) return `${hours} hours ago`;
    if (minutes > 0) return `${minutes} minutes ago`;

    return "Just now";
  };

  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-80 ">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="" />
      <ul>
        <li className="font-bold capitalize overflow-hidden ">{title}</li>

        <li className=" flex tracking-tighter text-zinc-400">
          {channelTitle} {verified}
        </li>

        <div className="flex gap-1">

        <li className="tracking-tighter text-zinc-400 ">
          {formatNumber(statistics?.viewCount)} views
        </li >
        <span className="text-gray-300 text-sm  ">.</span>
        <li className="tracking-tighter text-zinc-400">{timeAgo(snippet.publishedAt)}</li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
