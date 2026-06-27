function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for jobs..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </div>
  );
}

export default SearchBar;