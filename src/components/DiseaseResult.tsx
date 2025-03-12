
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pill, Sparkles, Video } from "lucide-react";
import SolutionProvider from "./SolutionProvider";
import HomeRemedies from "./HomeRemedies";
import VideoSuggestions from "./VideoSuggestions";

interface DiseaseResultProps {
  disease: string;
}

const DiseaseResult: React.FC<DiseaseResultProps> = ({ disease }) => {
  const [showSolution, setShowSolution] = useState(false);
  const [showRemedies, setShowRemedies] = useState(false);
  const [showVideos, setShowVideos] = useState(false);

  const handleSolutionClick = () => {
    setShowSolution(true);
    setShowRemedies(false);
    setShowVideos(false);
  };

  const handleRemediesClick = () => {
    setShowRemedies(true);
    setShowSolution(false);
    setShowVideos(false);
  };

  const handleVideosClick = () => {
    setShowVideos(true);
    setShowSolution(false);
    setShowRemedies(false);
  };

  return (
    <div className="animate-fadeIn">
      <div className="glass rounded-2xl p-8 shadow-lg mb-6">
        <h3 className="text-xl font-bold text-center mb-2">Possible Condition</h3>
        
        <div className="flex justify-center items-center py-4">
          <div className="bg-health-50 rounded-full px-6 py-3 border border-health-200">
            <span className="text-2xl font-bold text-health-700">{disease}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-center mb-6">
          Based on the symptoms you've described, you might be experiencing {disease.toLowerCase()}.
          This is not a definitive diagnosis - please consult with a healthcare professional.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            className="bg-health-600 hover:bg-health-700 text-white btn-effect"
            onClick={handleSolutionClick}
          >
            <Pill className="mr-2 h-4 w-4" />
            Get Solution
          </Button>
          
          <Button
            variant="outline"
            className="border-health-400 text-health-600 hover:bg-health-50"
            onClick={handleRemediesClick}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Home Remedies
          </Button>
          
          <Button
            variant="outline"
            className="border-health-400 text-health-600 hover:bg-health-50"
            onClick={handleVideosClick}
          >
            <Video className="mr-2 h-4 w-4" />
            Video Resources
          </Button>
        </div>
      </div>

      {showSolution && <SolutionProvider disease={disease} />}
      {showRemedies && <HomeRemedies disease={disease} />}
      {showVideos && <VideoSuggestions disease={disease} />}
    </div>
  );
};

export default DiseaseResult;
