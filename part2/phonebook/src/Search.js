const Search = ({ text, inputtext }) => {
  return (
    <form>
      Filter Shown With &nbsp;
      <input value={text} onChange={inputtext} id="test" />
    </form>
  );
};
export default Search;
