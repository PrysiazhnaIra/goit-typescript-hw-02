import css from "./LoadMoreBtn.module.css";
import { useState } from "react";
import { LoadMoreBtnProps } from "../../types";

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <div className={css.btnBlock}>
      <button onClick={onClick} className={css.btn}>
        Load More
      </button>
    </div>
  );
}
