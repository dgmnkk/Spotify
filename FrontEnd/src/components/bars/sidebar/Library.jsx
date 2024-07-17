import React from 'react'
import { Icon } from "../../Icons";
import SavedListItem from '../saved list item/SavedListItem';
import "./library.scss";

export default function Library() {
  let playlist1 = {
    title: "Chaxsthexry",
    image: "https://i.scdn.co/image/ab67616d00001e0287a9495fd25dfa23e68a9e66"
  }

  return (
    <div className="library">
      <div className='title'>
        <div className="icon">
          <Icon name="lib" />
        </div>
        Your Library
      </div>
      <div className="saved-list">
        <SavedListItem playlist={playlist1} />
      </div>
    </div> 
  )
}
