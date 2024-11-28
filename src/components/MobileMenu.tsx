import Image from "next/image";

const MobileMenu = () => {
  return (
    <Image
      src="/images/menu.png"
      width={75}
      height={75}
      alt="menu"
      className="fixed top-12 left-0 z-50"
    />
  );
};

export default MobileMenu;
