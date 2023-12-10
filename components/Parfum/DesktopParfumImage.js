import Image from "next/image";

function DesktopParfumImage() {
  return (
      <Image
        className="w-full min-h-full object-cover rounded-l-lg"
        src="/images/parfum/parfumDesktop.jpg"
        alt="Desktop perfum image"
        width={600}
        height={900}
        priority={true}
      />
  );
}

export default DesktopParfumImage;
