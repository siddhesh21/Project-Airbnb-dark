import Image from "next/image";

function Header() {
  return (
    <header>
      <div className="relative">
        <Image
          src="https:links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className=""></div>
      <div className=""></div>
    </header>
  );
}

export default Header;
