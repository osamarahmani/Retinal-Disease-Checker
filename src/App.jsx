import { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";




function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [confidence, setConfidence] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setScanning(true);
      setScanned(false);
      setPrediction("");
      setConfidence(null);

      // Part 1: Get the prediction early (after 2s)
      setTimeout(async () => {
        const formData = new FormData();
        formData.append("file", file);

        try {
          const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/predict`, {
            method: "POST",
            body: formData,
          });
          
          console.log("FETCHING FROM:", `${import.meta.env.VITE_BACKEND_URL}/predict`);

          const data = await res.json();
          setPrediction(data.prediction);
          if (data.confidence) setConfidence(data.confidence);
        } catch (err) {
          console.error("Error predicting:", err);
          setPrediction("Prediction failed. Try again.");
        }
      }, 2000); // 👈 show result after 2 seconds

      // Part 2: End scanning animation after 5s
      setTimeout(() => {
        setScanning(false);
        setScanned(true);
      }, 5000);
    }
  };


  return (
    <div className="min-h-screen h-full w-full bg-black text-white font-sans overflow-auto">

      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-cyan-900 via-black to-cyan-900 opacity-90 backdrop-blur-md z-0" />

      <div className="relative z-10">
        <nav className="w-full flex justify-center mt-4">
          <div className="backdrop-blur-md bg-white/10 border border-cyan-500 shadow-lg rounded-full px-6 py-3 flex gap-6 md:gap-10 text-sm md:text-base fixed top-4 z-50">
            <a href="#home" className="hover:text-cyan-300 transition">Home</a>
            <Link to="/About" className="hover:text-cyan-300 transition">About Eye Diseases</Link>
            <Link to="/contact" className="hover:text-cyan-300 transition">Contact</Link>

          </div>
        </nav>

        <section id="home" className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-[120px] pb-[60px] gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Detect <span className="text-cyan-400">Retinal Diseases</span><br /> in Seconds
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl">
              Upload a retinal image and get instant disease predictions using AI.
            </p>
          </div>

          <div className="flex-1 w-full max-w-md bg-white/10 border border-cyan-500 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
            <h2 className="text-xl font-semibold mb-4 text-cyan-300 text-center">Upload Retinal Image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-500 file:text-white hover:file:bg-cyan-600 cursor-pointer"
            />
            <p className="mt-4 text-sm text-gray-300 text-center">
              Accepted formats: JPG, PNG | Max size: 5MB
            </p>

            {selectedImage && (
              <div className="mt-6 relative rounded-lg border border-gray-500 overflow-hidden">
                {scanning && (
                  <>
                    <div className="relative w-full max-h-64 overflow-hidden rounded">
                      <img
                        src={selectedImage}
                        alt="Scanning..."
                        className="w-full object-contain opacity-30 blur-sm max-h-64"
                      />
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="scan-line"></div>
                      </div>
                    </div>
                    <p className="text-center mt-4 text-sm text-cyan-300 animate-pulse">
                      Scanning Image...
                    </p>
                  </>
                )}

                {scanned && !scanning && (
                  <>
                    <img
                      src={selectedImage}
                      alt="Scanned Preview"
                      className="w-full object-contain max-h-64"
                    />
                    <p className="mt-4 text-center text-lg font-semibold text-cyan-400">
                      Predicted Disease: <span className="font-bold">{prediction}</span>
                    </p>
                    {confidence && (
                      <p className="text-center text-sm text-gray-300">
                        Confidence: {confidence}%
                      </p>
                    )}
                  </>
                )}
              </div>
            )}

          </div>
        </section>

        {/* Dynamic Sections */}
        <section className="py-16 px-6 md:px-20 bg-black/70 border-t border-white/10">
          <h2 className="text-3xl text-center font-bold text-cyan-400 mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white/10 rounded-lg border border-cyan-500">
              <p className="text-5xl mb-2">📤</p>
              <h3 className="font-semibold text-xl text-cyan-300 mb-2">Upload</h3>
              <p className="text-gray-300">Submit a retinal image securely via the upload tool.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg border border-cyan-500">
              <p className="text-5xl mb-2">🧠</p>
              <h3 className="font-semibold text-xl text-cyan-300 mb-2">Analyze</h3>
              <p className="text-gray-300">Our trained CNN model analyzes it in real time.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg border border-cyan-500">
              <p className="text-5xl mb-2">🩺</p>
              <h3 className="font-semibold text-xl text-cyan-300 mb-2">Diagnose</h3>
              <p className="text-gray-300">You get the disease prediction within seconds.</p>
            </div>
          </div>
        </section>

        <section className="py-12 px-6 md:px-20 bg-black/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-cyan-300">
            <div>
              <p className="text-4xl font-bold">10,000+</p>
              <p className="text-sm">Images Trained</p>
            </div>
            <div>
              <p className="text-4xl font-bold">92.4%</p>
              <p className="text-sm">Accuracy</p>
            </div>
            <div>
              <p className="text-4xl font-bold">CNN</p>
              <p className="text-sm">Model Type</p>
            </div>
            <div>
              <p className="text-4xl font-bold">&lt;3s</p>
              <p className="text-sm">Avg Prediction Time</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-20 bg-black/70">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">Behind the AI</h2>
          <div className="text-center max-w-3xl mx-auto text-gray-300">
            Our deep learning model is trained using thousands of labeled retinal images. It uses a convolutional neural network (CNN) architecture for high-accuracy classification across four key categories: Cataract, Diabetic Retinopathy, Glaucoma, and Normal. The model is deployed on a FastAPI backend and served with blazing speed to users.
          </div>
        </section>
        <Footer />

      </div>
    </div>
  );
}

export default App;