import React from "react";
import { ReactComponent as  SearchIcon} from "./../../assets/Search icon.svg";
import style from "./Search.module.css"

export default function Search({placeholder}) {
    const onSubmit = (e) => {
        e.prevenetDefault();
    }
  return (
    <div>
      <form className={style.wrapper} onSubmit={onSubmit}>
        <input className={style.search} required placeholder={placeholder} />
        <button className={style.searchButton} type="submit">
            <SearchIcon/>
        </button>
      </form>
    </div>
  );
}
