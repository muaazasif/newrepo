import Navbar from "../components/Navbar";
import Image from "next/image";

// Import images
import Image1 from '/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Usethestyles/Screenshot 2022-05-31 at 9.33.png';
import Image2 from '/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Usethestyles/Screenshot 2022-05-31 at 9.33 (1).png';
import Image3 from '/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Usethestyles/Screenshot 2022-05-31 at 9.33 (2).png';

export default function Usethestyles() {
  // Image settings to reuse across all images
  const imageSettings = {
    width: 200, // Set width for all images
    height: 200, // Set height for all images
    className: "rounded-lg shadow-lg mb-6 animate-pulse", // Common styles
  };

  return (
    <div className="bg-[#4E4D93] min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Top Famous Section */}
      <div className="flex flex-col items-start justify-center py-12 px-4 sm:px-5">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Use the styles
        </h1>
        <p className="text-lg text-white text-justify max-w-5xl leading-relaxed">
          Styles in Figma mean you don’t have to repetitively enter values for typography, colors and elevations, minimizing the risk of inconsistencies and streamlining the design process.
          <br />
          Within this template, you can find color and type styles, and their definitions on the style guide page. To use them, simply select them from the Figma style panel as shown below.
        </p>
      </div>

      {/* Content Section (Images Section) */}
      <div className="flex flex-col items-center justify-center py-10 flex-grow">
        {/* Images Section with continuous animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
          <div className="flex justify-center pt-10">
            <Image
              src={Image1}
              alt="Image 1"
              {...imageSettings} // Apply common image settings
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={Image2}
              alt="Image 2"
              {...imageSettings} // Apply common image settings
            />
          </div>
          <div className="flex justify-center pt-10">
            <Image
              src={Image3}
              alt="Image 3"
              {...imageSettings} // Apply common image settings
            />
          </div>
        </div>
      </div>
    </div>
  );
}
