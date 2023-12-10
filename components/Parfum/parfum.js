import { useMediaQuery } from "react-responsive";
// import MobileParfumImage from "./MobileParfumImage";
import ParfumInfo from "./ParfumInfo";
// import DesktopParfumImage from "./DesktopParfumImage";
import dynamic from "next/dynamic"; 

  // we dynamically import DesktopParfumImage due to server side rendering error, and only get the target image(component)

const DesktopParfumImage = dynamic(() => import('./DesktopParfumImage'), {
  ssr: false,
})
const MobileParfumImage = dynamic(() => import('./MobileParfumImage'), {
  ssr: false,
})

function Parfum() {


  const isMobile = useMediaQuery({ maxWidth: 959 });

  return (
    <>
      <div
        className="rounded-b-lg min-w-[300px] max-w-[550px] mx-auto mb-28 mt-28 w-11/12 shadow-2xl
        grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 
      lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
      >
        <div>{isMobile ? <MobileParfumImage/> : <DesktopParfumImage/> }</div>
        <div>
          <ParfumInfo />
        </div>
      </div>
    </>
  );
}

export default Parfum;
