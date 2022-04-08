function SearchBar({ setTerm }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search.."
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
