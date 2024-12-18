import Navbar from "../components/Navbar";
import Image from "next/image";

// Import images
<<<<<<< HEAD
import Image1 from './Product Details.png';
import Image2 from './Product v3.png';
import Image3 from './Product v3 (1).png';
=======
import Image1 from '/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Checkthelayouts/Product Details.png';
import Image2 from '/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Checkthelayouts/Product v3.png';
import Image3 from '/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Checkthelayouts/Product v3 (1).png';
>>>>>>> 055f8a015a714b7f0ae0bf531a4e210965d11483

export default function Checkthelayouts() {
  // Reusable image settings
  const imageSettings = {
    width: 250, // Set width for all images
    height: 250, // Set height for all images
    className: "rounded-lg shadow-lg mb-6 animate-pulse", // Common styles
  };

  return (
    <div className="bg-[#4E4D93] min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Top Famous Section */}
      <div className="flex flex-col items-start justify-center py-12 px-4 sm:px-5">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Check the layouts
        </h1>
        <p className="text-lg text-white text-justify max-w-5xl leading-relaxed">
          As well as components and styles we’ve built a bunch of layouts in both mobile and desktop sizes. Play around with replacing and modifying the nested content blocks and to switch device, simply use the content block property ‘device’ to toggle between mobile and desktop.
        </p>
      </div>

      {/* Content Section (Images Section) */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Images Section with continuous animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
          <div className="flex justify-center pt-10">
            <Image
              src={Image1}
              alt="Product Details"
              {...imageSettings} // Apply common image settings
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={Image2}
              alt="Product V3"
              {...imageSettings} // Apply common image settings
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={Image3}
              alt="Product V3 (1)"
              {...imageSettings} // Apply common image settings
            />
          </div>
        </div>
      </div>
    </div>
  );
}
