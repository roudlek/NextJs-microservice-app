import Image from "next/image";

function MobileParfumImage() {
  return (
    <>
      <Image
        className="w-full rounded-t-lg"
        src="/images/parfum/parfumMobile.jpg"
        alt="perfum image mobile"
        width={686}
        height={480}
      />
    </>
  );
}

export default MobileParfumImage;
