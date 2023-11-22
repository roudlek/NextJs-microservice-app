import Image from "next/image";

function DesktopParfumImage() {
  return (
    <>
      <Image
        className="w-full rounded-l-lg"
        src="/images/parfum/parfumDesktop.jpg"
        alt="Desktop perfum image"
        width={600}
        height={900}
      />
    </>
  );
}

export default DesktopParfumImage;
