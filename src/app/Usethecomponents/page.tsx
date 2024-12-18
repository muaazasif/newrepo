"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

// Import images
import ParentImage from './Parent.png';
import PhotoImage from './Photo.png';
import ButtonImage1 from './Button Small.png';
import ButtonImage2 from './Button Small (1).png';
import ButtonImage3 from './Button Small.png';
import ButtonImage4 from './Button Small (2).png';

export default function Usethecomponents() {
  // State for checkboxes
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: true,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
  });

  // Handle change in checkbox state
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [id]: checked,
    });
  };

  // Image settings to reuse across all images
  const imageSettings = {
    width: 400, // Adjust width as per your needs
    height: 300, // Adjust height as per your needs
    className: "rounded-lg shadow-lg mb-6 animate-pulse", // Common styles
  };

  return (
    <div className="bg-[#4E4D93] min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Top Famous Section */}
      <div className="flex flex-col items-start justify-center py-12 px-4 sm:px-5">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Use the components
        </h1>
        <p className="text-lg text-white text-justify max-w-5xl leading-relaxed">
          There’s a bunch of pre-configured components for you to use in this free template. Simply go to
          the Style Guide page and under the components header you can see everything included. <br />
          Buttons, steppers, filter options, and more for you to integrate into your screens and modify to
          your tastes and requirements.
        </p>
      </div>

      {/* Content Section (Images Section) */}
      <div className="flex flex-col items-center justify-center py-10 flex-grow">
        {/* Images, Buttons, and Checkboxes in the Same Row */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* First Image */}
          <div className="flex justify-center">
            <Image
              src={ParentImage}
              alt="Parent Image"
              {...imageSettings} // Spread the image settings
            />
          </div>
          {/* Second Image */}
          <div className="flex justify-center">
            <Image
              src={PhotoImage}
              alt="Chicken Boti"
              {...imageSettings} // Spread the image settings
            />
          </div>

          {/* Buttons Section (Vertically Stacked Buttons in Same Row) */}
          <div className="flex flex-col justify-center items-center gap-4">
            {/* Button 1 */}
            <div className="flex justify-center">
              <Image
                src={ButtonImage1}
                alt="Button 1"
                {...imageSettings} // Spread the image settings
              />
            </div>
            {/* Button 2 */}
            <div className="flex justify-center">
              <Image
                src={ButtonImage2}
                alt="Button 2"
                {...imageSettings} // Spread the image settings
              />
            </div>
            {/* Button 3 */}
            <div className="flex justify-center">
              <Image
                src={ButtonImage3}
                alt="Button 3"
                {...imageSettings} // Spread the image settings
              />
            </div>
            {/* Button 4 */}
            <div className="flex justify-center">
              <Image
                src={ButtonImage4}
                alt="Button 4"
                {...imageSettings} // Spread the image settings
              />
            </div>
          </div>

          {/* Checkboxes Section (Vertically Stacked Checkboxes) */}
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox1"
                className="mr-2"
                checked={checkboxes.checkbox1}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox1" className="text-white">Furniture</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox2"
                className="mr-2"
                checked={checkboxes.checkbox2}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox2" className="text-white">Homeware</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox3"
                className="mr-2"
                checked={checkboxes.checkbox3}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox3" className="text-white">Vases</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox4"
                className="mr-2"
                checked={checkboxes.checkbox4}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox4" className="text-white">Products</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox5"
                className="mr-2"
                checked={checkboxes.checkbox5}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox5" className="text-white">Components</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox6"
                className="mr-2"
                checked={checkboxes.checkbox6}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox6" className="text-white">Styleguide</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
