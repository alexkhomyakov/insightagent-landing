// src/components/HeroSection.js
import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';

const HeroSection = ({ setShowModal, setShowCalendly }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
  
    if (audio.paused) {
      audio.play().catch((err) => {
        console.error("Playback failed:", err);
      });
    } else {
      audio.pause();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
  
    const handlePlay = () => {
      console.log("audio is playing");
      setIsPlaying(true);
    };
  
    const handlePause = () => {
      console.log("audio is paused");
      setIsPlaying(false);
    };
  
    const handleTimeUpdate = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };
  
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };
  
    const handleEnded = () => {
      console.log("audio ended");
      setIsPlaying(false);
      setProgress(0);
    };
  
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
  
    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };
  
  return (
    <section id="hero" className="pt-24 pb-24 bg-gradient-to-b from-gray-50 to-white h-[1000px]">
      <div className="container mx-auto px-6 pt-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-8">
              Autonomous Expert Interviews. Embedded Into Your Workflow.
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-xl leading-relaxed">
              InsightAgent integrates with your systems, understands your research objectives, and conducts multilingual expert interviews—start to finish, with zero operational lift.
            </p>
            <div className="flex items-center mb-10 bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="flex items-center flex-grow">
              <button
                onClick={handleToggle}
                className="text-blue-600 hover:text-blue-700 p-2"
                id="playButton"
              >
                <FontAwesomeIcon icon={isPlaying ? faStop : faPlay} className="text-2xl" />
              </button>
                <div className="mx-4 flex-grow">
                  <div className="h-2.5 bg-gray-200 rounded-full">
                    <div
                      className="h-2.5 bg-blue-600 rounded-full"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {formatTime(duration)}
                </span>
              </div>
              <span className="text-sm text-gray-500 ml-4 font-medium">Sample Interview</span>
            </div>

            <audio ref={audioRef} preload="auto">
              <source src="https://productera.s3.us-west-2.amazonaws.com/insightagent-sample.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <span
              onClick={() => setShowCalendly(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition text-center cursor-pointer text-lg"
            >
              Book a Demo
            </span>
              <span
                onClick={() => setShowModal(true)} 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition text-center cursor-pointer text-lg">
                Request Access
              </span>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-5 mb-8">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-chart-line text-blue-600 text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Enhanced Research Workflow</h3>
                  <p className="text-base text-gray-600">Intelligent, Compliant, Scalable</p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-check-circle text-green-600 mr-3 text-xl"></i>
                    <span className="text-base font-medium text-gray-700">Key Benefits</span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-700">
                      <i className="fa-solid fa-clock text-blue-600 mr-3 text-lg"></i>
                      <span className="text-base">60% reduction in research time</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <i className="fa-solid fa-shield-alt text-blue-600 mr-3 text-lg"></i>
                      <span className="text-base">Automated compliance monitoring</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <i className="fa-solid fa-file-alt text-blue-600 mr-3 text-lg"></i>
                      <span className="text-base">Structured insights delivery</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <i className="fa-solid fa-star text-blue-600 mr-3 text-xl"></i>
                      <span className="text-base font-medium text-gray-700">Performance Metrics</span>
                    </div>
                    <span className="text-sm bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium">Enterprise-Grade</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-base text-gray-600">Accuracy Rate</span>
                      <span className="text-base text-gray-800 font-medium">99.9%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base text-gray-600">Compliance Score</span>
                      <span className="text-base text-gray-800 font-medium">100%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <i className="fa-solid fa-award text-blue-500 text-xl"></i>
                  <span className="text-base text-gray-600">Trusted by Leading Firms</span>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fa-solid fa-university text-gray-400 text-xl"></i>
                  <i className="fa-solid fa-chart-pie text-gray-400 text-xl"></i>
                  <i className="fa-solid fa-briefcase text-gray-400 text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;