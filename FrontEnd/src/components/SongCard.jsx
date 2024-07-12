import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icons";

export default function SongCard({ item, link }) {
  return (
    <Link
      key={item.id}
      to={link}
      className={"bg-footer rounded p-4 transition-all hover:bg-menubg group"}
    >
      <div className="relative ">
        <img
          className="w-auto h-auto inset-0 object-cover mb-4"
          src={item.image}
          alt="song"
        />
        <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
          <Icon name="play" />
        </button>
      </div>
      <span className="font-semibold text-white text-[16px] whitespace-nowrap">
        {item.title}
      </span>{" "}
      <br />
      <span className="mt-1 text-[14px] text-link">{item.artist}</span>
    </Link>
  );
}
