import { FormEvent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import styles from "./seacher.module.css";

export function Seacher() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (inputValue === "") return;
    navigate(`/detail/${inputValue}`);
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSearch}>
        <input
          placeholder="Digite o simbolo da moeda"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={styles.btn} type="submit">
          <SearchTwoToneIcon />
        </button>
      </form>
    </div>
  );
}
