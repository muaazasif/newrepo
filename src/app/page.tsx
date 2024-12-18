import Image from "next/image";
import Navbar from './components/Navbar';  // For one level up

import Link from "next/link";

// Import images with unique names
import image1 from './First Block (1).png';
import image2 from './First Block (3).png';
import image3 from './First Block (4).png';
import image4 from './First Block (5).png';


export default function Home() {
  return (
    <header>
      <div className="bg-[#4E4D93] min-h-screen flex flex-col justify-between">
        {/* Navbar */}
        <Navbar />

        {/* Main Content Section */}
        <div className="bg-[#4E4D93] font-bold text-white p-8">
          <h1 className="text-3xl mb-4">Build ecom sites, super fast</h1>
          <p className="text-xl hover:text-gray-300 transition duration-300">
            This template was built to help you rapidly, and modularly, build out high-quality e-commerce concepts using pre-built content blocks, components, and styles. Customize and play around with the template to match your specific requirements, and most of all, have fun with it!
          </p>
        </div>

        {/* Card Section */}
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <Image
              src={image1}
              alt="Product 1"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 text-center">
              <Link
                href="/Usethestyles"
                className="text-[#4E4D93] font-semibold hover:underline"
              >
                View More
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <Image
              src={image2}
              alt="Product 2"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 text-center">
              <Link
                href="/Usethecomponents"
                className="text-[#4E4D93] font-semibold hover:underline"
              >
                View More
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <Image
              src={image3}
              alt="Product 3"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 text-center">
              <Link
                href="/Checkthelayouts"
                className="text-[#4E4D93] font-semibold hover:underline"
              >
                View More
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <Image
              src={image4}
              alt="Product 4"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 text-center">
              <Link
                href="/Usethecontentblocks"
                className="text-[#4E4D93] font-semibold hover:underline"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
