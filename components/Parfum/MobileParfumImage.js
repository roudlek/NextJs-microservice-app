import Image from "next/image";

function MobileParfumImage() {
  return (
      <Image
        className="w-full min-h-full object-cover rounded-t-lg"
        src="/images/parfum/parfumMobile.jpg"
        alt="mobile perfum image"
        width={686}
        height={480}
        priority={true}
      />
  );
}

export default MobileParfumImage;
