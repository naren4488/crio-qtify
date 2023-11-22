import React from "react";
import { ReactComponent as  SearchIcon} from "./../../assets/Search icon.svg";
import "./Search.css"

export default function Search({placeholder}) {
    const onSubmit = (e) => {
        e.prevenetDefault();
    }
  return (
    <div>
      <form className="wrapper" onSubmit={onSubmit}>
        <input className="search" required placeholder={placeholder} />
        <button className="searchButton" type="submit">
            <SearchIcon/>
        </button>
      </form>
    </div>
  );
}
