import React from "react";
import styles from "./SearchInput.module.css";
import SearchRounded from "@material-ui/icons/SearchRounded";
function SearchInput({ ...rest }) {
  return (
    <div className={styles.wrapper}>
      <SearchRounded />
      <input className={styles.input} {...rest}></input>
    </div>
  );
}

export default SearchInput;
