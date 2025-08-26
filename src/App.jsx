import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import { CircularProgress } from "@mui/material";
import PDFRender from "./Components/PDFRender";
import PDFPreview from "./Components/PDFPreview";
import PDFModal from "./Components/PDFModal";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* <Navbar /> */}
      {/* <Pricing />
      <Pricing />
      <Pricing /> */}
      {/* <PDFRender/> */}
      {/* <PDFPreview file="/examples.pdf" /> */}
      <PDFModal file="/examples.pdf" />

      <div
        className="fixed  w-12 h-12 rounded-full items-center justify-center bottom-10 right-10 flex bg-white border cursor-pointer"
        onClick={handleClick}
      >
        <CircularProgress
          variant="determinate"
          value={progress}
          size={48}
          thickness={4}
          sx={{
            position: "absolute",
            color: "black",
            background: "transparent",
          }}
        />

        <span className="relative z-10 text-lg">↑</span>
      </div>
    </>
  );
}

export default App;
