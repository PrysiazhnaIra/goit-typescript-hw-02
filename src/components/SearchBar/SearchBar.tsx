import { FormEvent, useState } from "react";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { SearchBarProps } from "../../types";

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (query.trim() === "") {
      toast("Please enter a search query!", {
        icon: "ℹ️",
      });
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
    </header>
  );
}
