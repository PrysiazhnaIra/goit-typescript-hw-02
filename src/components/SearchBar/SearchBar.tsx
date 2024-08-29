import { FormEvent, useState } from "react";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { SearchBarProps } from "../../types";
import { BsInfoSquare } from "react-icons/bs";

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Check for empty input
    if (query.trim() === "") {
      toast("Please enter a search query!", {
        icon: <BsInfoSquare style={{ fontSize: "30px" }} />,
      });
      return;
    }

    // Check for non-Latin characters
    const latinCheck = /^[A-Za-z\s]*$/;
    if (!latinCheck.test(query)) {
      toast("Please enter the search query using only Latin characters!", {
        icon: <BsInfoSquare style={{ fontSize: "30px" }} />,
      });
      return;
    }

    // Submit the search query if all checks pass
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
