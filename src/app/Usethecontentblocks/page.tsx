import Navbar from "../components/Navbar";
import Image from "next/image";

// Import images
import EmailSignupImage from './Email sign-up.png';
// import AnotherImage from './AnotherImage.png'; // Example image
// import EmailSignupImage from '/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Usethecontentblocks/Email sign-up.png';
import AnotherImage from '/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Usethecontentblocks/AnotherImage.png'; // Example image

export default function Usethecontentblocks() {
  return (
    <div className="bg-[#4E4D93] min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Top Famous Section */}
      <div className="flex flex-col items-start justify-center py-12 px-4 sm:px-5">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Use the content blocks
        </h1>
        <p className="text-lg text-white text-justify max-w-5xl leading-relaxed">
          We’ve built out a multitude of content blocks for you to use in your landing pages. From hero sections, forms, CTAs to pricing sections. Everything you need to get started building polished, modern landing pages.
        </p>
      </div>

      {/* Content Section (Images Section) */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Reusable Image Style */}
        <div className="flex justify-center w-full">
          <Image
            src={EmailSignupImage}
            alt="Email Signup"
            width={800}
            height={300}
            className="rounded-lg shadow-lg mb-6"
          />
        </div>

        {/* Another Image Example */}
<<<<<<< HEAD
        {/* <div className="flex justify-center w-full">
=======
        <div className="flex justify-center w-full">
>>>>>>> 055f8a015a714b7f0ae0bf531a4e210965d11483
          <Image
            src={AnotherImage}
            alt="Another Example"
            width={800}
            height={300}
            className="rounded-lg shadow-lg mb-6"
          />
<<<<<<< HEAD
        </div> */}
=======
        </div>
>>>>>>> 055f8a015a714b7f0ae0bf531a4e210965d11483
      </div>
    </div>
  );
}
