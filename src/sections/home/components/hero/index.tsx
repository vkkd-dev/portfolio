import Image from "next/image";

const HomeHero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full min-h-screen">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-contentPrimary text-4xl heading-font">
          Hey, I&apos;m xxxxx
        </h1>
        <p className="text-contentSecondary">Tech Expertise</p>
      </div>
      <div className="relative flex flex-col items-center justify-center min-h-[38vh] w-[90%]">
        <Image
          width={75}
          height={75}
          src="/images/node.png"
          alt="clients"
          className="absolute top-0 left-14 floating"
        />
        <Image
          width={75}
          height={75}
          src="/images/php.png"
          alt="clients"
          className="absolute top-0 right-14 floating"
        />
        <Image
          width={75}
          height={75}
          src="/images/express.png"
          alt="clients"
          className="absolute left-0 floating"
        />
        <Image
          width={220}
          height={220}
          src="/images/profile.png"
          alt="clients"
        />
        <Image
          width={75}
          height={75}
          src="/images/css.png"
          alt="clients"
          className="absolute right-0 floating"
        />
        <Image
          width={75}
          height={75}
          src="/images/react.png"
          alt="clients"
          className="absolute bottom-0 left-14 floating"
        />
        <Image
          width={75}
          height={75}
          src="/images/javascript.png"
          alt="clients"
          className="absolute bottom-0 right-14 floating"
        />
      </div>
      <div className="flex flex-col gap-6 items-center">
        <Image
          width={200}
          height={200}
          src="/images/hireme.png"
          alt="clients"
        />
        <div className="flex flex-col gap-2 items-center">
          <Image
            width={75}
            height={75}
            src="/images/clients.png"
            alt="clients"
          />
          <p className="text-contentSecondary text-sm">10+ Happy clients</p>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
