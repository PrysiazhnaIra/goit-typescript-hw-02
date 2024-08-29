import css from "./Loader.module.css";
import { Audio } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={css.spinnerContainer}>
      <Audio height="80" width="80" color="orange" ariaLabel="loading" />
    </div>
  );
}
