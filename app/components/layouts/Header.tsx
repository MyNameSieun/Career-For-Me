import Image from "next/image";
import Link from "next/link";
import SearchBar from "../activityRecommend/SearchBar";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
      </Link>
      <SearchBar />
    </header>
  );
};

export default Header;
