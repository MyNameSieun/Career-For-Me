import Image from "next/image";

const SearchBar = () => {
  return (
    <form>
      <input placeholder="어떤 활동을 찾으시나요?" />
      <button>
        <Image
          src="/images/search-md.png"
          alt="search"
          width={30}
          height={30}
        />
      </button>
    </form>
  );
};

export default SearchBar;
