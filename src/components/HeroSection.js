// src/components/HeroSection.js
import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faChartLine, faCheckCircle, faClock, faShieldAlt, faFileAlt, faStar, faAward, faUniversity, faChartPie, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const HeroSection = ({ setShowModal, setShowCalendly }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 pt-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-8">
              AI-Powered Expert Interviews. Purpose-Built for Expert Networks.
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-xl leading-relaxed">
              InsightAgent plugs into your workflow, understands client priorities, and autonomously conducts expert interviews—delivering structured, compliant output at scale.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <span
                onClick={() => setShowCalendly(true)}
                className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition text-center cursor-pointer text-lg"
              >
                Book a Demo
              </span>
              <span
                onClick={() => setShowModal(true)}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition text-center cursor-pointer text-lg"
              >
                Request Access
              </span>
            </div>

            <div className="mb-10">
              <div className="flex items-center bg-gray-50 p-5 rounded-lg border border-gray-200">
                <div className="flex items-center flex-grow">
                  <button
                    onClick={handleToggle}
                    className="text-primary hover:text-primary/90 p-2"
                    id="playButton"
                  >
                    <FontAwesomeIcon icon={isPlaying ? faStop : faPlay} className="text-2xl" />
                  </button>
                  <div className="mx-4 flex-grow">
                    <div className="h-2.5 bg-gray-200 rounded-full">
                      <div
                        className="h-2.5 bg-primary rounded-full"
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
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 w-full">
              <div className="flex items-center space-x-5 mb-8">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faChartLine} className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Enhanced Research Workflow</h3>
                  <p className="text-base text-gray-600">Intelligent, Compliant, Scalable</p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-3 text-xl" />
                    <span className="text-base font-medium text-gray-700">Key Benefits</span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-700">
                      <FontAwesomeIcon icon={faClock} className="text-primary mr-3 text-lg" />
                      <span className="text-base">60% reduction in research time</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <FontAwesomeIcon icon={faShieldAlt} className="text-primary mr-3 text-lg" />
                      <span className="text-base">Automated compliance monitoring</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <FontAwesomeIcon icon={faFileAlt} className="text-primary mr-3 text-lg" />
                      <span className="text-base">Structured insights delivery</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faStar} className="text-primary mr-3 text-xl" />
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
                  <FontAwesomeIcon icon={faAward} className="text-primary/80 text-xl" />
                  <span className="text-base text-gray-600">Trusted by Leading Firms</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faUniversity} className="text-gray-400 text-xl" />
                  <FontAwesomeIcon icon={faChartPie} className="text-gray-400 text-xl" />
                  <FontAwesomeIcon icon={faBriefcase} className="text-gray-400 text-xl" />
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