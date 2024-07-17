import React from 'react';
import "./savedListItem.scss";

export default function SavedListItem({ playlist }) {
  return (
    <div className="savedListItem">
      {playlist.title}
    </div>
  )
}
