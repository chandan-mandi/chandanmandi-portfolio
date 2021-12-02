import { SunspotLoader } from "react-awesome-loaders";
export const BookLoaderComponent = () => {
  return (
    <>
      <SunspotLoader
        gradientColors={["#00cf5d", "#E0E7FF"]}
        shadowColor={"#3730A3"}
        desktopSize={"128px"}
        mobileSize={"100px"}
      />
    </>
  );
};