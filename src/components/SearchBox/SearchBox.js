
import "../SearchBox/SearchBox.css";

export const SearchBox = ({placeholder , handleChange}) => {
  return (
    <>
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
        ></input>
    </>
  );
};