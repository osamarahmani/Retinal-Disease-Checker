import React, { useState } from "react";
import { Link } from "react-router-dom";

const diseases = [
  {
    name: "Cataract",
    image: "/images/cataract.jpg",
    description:
      "Cataract causes clouding of the eye lens, leading to blurry or dim vision. It’s the most common cause of blindness globally.",
    symptoms: [
      "Blurry vision",
      "Glare and halos around lights",
      "Faded colors",
      "Difficulty seeing at night",
    ],
  },
  {
    name: "Diabetic Retinopathy",
    image: "/images/daibetic.jpeg",
    description:
      "This condition occurs due to high blood sugar damaging the retina's blood vessels, potentially leading to blindness.",
    symptoms: [
      "Dark spots or floaters",
      "Blurred vision",
      "Fluctuating vision",
      "Impaired color vision",
    ],
  },
  {
    name: "Glaucoma",
    image: "/images/glaucoma.jpg",
    description:
      "Glaucoma damages the optic nerve due to increased pressure in the eye and can lead to permanent vision loss.",
    symptoms: [
      "Patchy blind spots",
      "Tunnel vision",
      "Eye pain",
      "Nausea and vomiting",
    ],
  },
  {
    name: "Normal",
    image: "/images/normal.jpg",
    description:
      "A normal retina has clear blood vessels and optic nerve with no signs of disease. Regular check-ups help maintain eye health.",
    symptoms: ["No symptoms", "Clear vision", "Healthy retina"],
  },
];

function About() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-auto px-4 sm:px-6 md:px-10">
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-cyan-900 via-black to-cyan-900 opacity-90 backdrop-blur-md z-0" />
      <div className="relative z-10 max-w-7xl mx-auto py-16">
        <h1 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          About Eye Diseases
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {diseases.map((disease, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div key={index} className="rounded-2xl overflow-hidden border border-cyan-500 bg-white/10 backdrop-blur shadow-lg">
                {/* Card (clickable) */}
                <div
                  className="group relative h-64 w-full cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <img
                    src={disease.image}
                    alt={disease.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-x-0 bottom-0 bg-black/80 text-white p-4 transition-transform duration-500 ease-in-out
                    ${
                      isExpanded
                        ? "translate-y-0"
                        : "translate-y-full group-hover:translate-y-0"
                    }`}
                  >
                    <h2 className="text-lg font-bold text-cyan-300">{disease.name}</h2>
                    <p className="text-sm mt-1 text-gray-300">{disease.description}</p>
                  </div>
                </div>

                {/* Symptoms (below the image) */}
                {isExpanded && (
                  <div className="bg-black/90 px-4 py-3 text-sm">
                    <h3 className="font-semibold text-cyan-300">Common Symptoms:</h3>
                    <ul className="list-disc list-inside text-gray-300 mt-1">
                      {disease.symptoms.map((symptom, i) => (
                        <li key={i}>{symptom}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Info section */}
        <div className="mt-20 bg-white/10 border border-cyan-500 p-6 rounded-xl shadow-xl max-w-4xl mx-auto">
          <h2 className="text-2xl text-cyan-400 font-bold mb-4 text-center">
            Retinal Health & AI Diagnosis
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Early detection of retinal diseases is critical in preventing irreversible vision loss. Modern diagnostic tools like fundus photography and OCT allow doctors to detect eye issues at early stages. Our AI model uses deep learning (CNN) trained on thousands of labeled retinal images to instantly predict disease types with high accuracy. It is not a replacement for a medical diagnosis but can assist in faster screenings and awareness.
          </p>
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="text-cyan-300 hover:underline text-sm border px-4 py-2 rounded-full hover:bg-cyan-500 hover:text-white transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
