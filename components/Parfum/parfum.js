import { useMediaQuery } from "react-responsive";
import MobileParfumImage from "./MobileParfumImage";
import ParfumInfo from "./ParfumInfo";
import DesktopParfumImage from "./DesktopParfumImage";

function Parfum() {
  const isMobile = useMediaQuery({ maxWidth: 959 });

  return (
    <>
      <div className="w-1/3 m-auto my-10 border-2 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 
      lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        <div>{isMobile ? <MobileParfumImage /> : <DesktopParfumImage />}</div>
        <div>
          <ParfumInfo />
        </div>
      </div>
    </>
  );
}

export default Parfum;
