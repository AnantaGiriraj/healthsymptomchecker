
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Stethoscope, AlertCircle } from "lucide-react";
import DiseaseResult from "./DiseaseResult";

const SymptomChecker: React.FC = () => {
  const [symptoms, setSymptoms] = useState("");
  const [disease, setDisease] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckDisease = () => {
    if (!symptoms.trim()) {
      setError("Please enter your symptoms");
      return;
    }

    setError(null);
    setIsChecking(true);

    // Simulate API call
    setTimeout(() => {
      // For demo purposes, we'll use a predefined set of diseases based on keywords
      const symptomsLower = symptoms.toLowerCase();
      let detectedDisease = "";

      if (symptomsLower.includes("headache") || symptomsLower.includes("head pain")) {
        detectedDisease = "Migraine";
      } else if (
        symptomsLower.includes("cough") ||
        symptomsLower.includes("fever") ||
        symptomsLower.includes("sore throat")
      ) {
        detectedDisease = "Common Cold";
      } else if (
        symptomsLower.includes("stomach") ||
        symptomsLower.includes("nausea") ||
        symptomsLower.includes("vomit")
      ) {
        detectedDisease = "Gastroenteritis";
      } else if (
        symptomsLower.includes("joint") ||
        symptomsLower.includes("pain") ||
        symptomsLower.includes("stiff")
      ) {
        detectedDisease = "Arthritis";
      } else if (
        symptomsLower.includes("rash") ||
        symptomsLower.includes("itch") ||
        symptomsLower.includes("skin")
      ) {
        detectedDisease = "Dermatitis";
      } else {
        detectedDisease = "Unknown Condition";
      }

      setDisease(detectedDisease);
      setIsChecking(false);
    }, 1500);
  };

  const handleClear = () => {
    setSymptoms("");
    setDisease(null);
    setError(null);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-8 glass rounded-2xl p-8 shadow-lg animate-fadeIn">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <Stethoscope className="h-7 w-7 text-health-600" />
          <h2 className="text-2xl font-bold text-gray-800">Symptom Checker</h2>
        </div>

        <p className="text-gray-600 mb-6 text-center">
          Describe your symptoms in detail below, and we'll help identify possible conditions.
        </p>

        <Textarea
          placeholder="Describe how you're feeling... (E.g., I've been having a headache for two days, with some fever and fatigue)"
          className="min-h-32 mb-4 text-base font-normal input-focus"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />

        {error && (
          <div className="mb-4 flex items-center space-x-2 text-destructive">
            <AlertCircle className="h-4 w-4" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        <div className="flex space-x-3 justify-center">
          <Button
            variant="outline"
            className="border-health-400 text-health-600 hover:bg-health-50"
            onClick={handleClear}
          >
            Clear
          </Button>
          <Button
            className="bg-health-600 hover:bg-health-700 text-white btn-effect"
            onClick={handleCheckDisease}
            disabled={isChecking}
          >
            {isChecking ? (
              <>
                <span className="loading-dots">Analyzing</span>
              </>
            ) : (
              "Check Disease"
            )}
          </Button>
        </div>
      </div>

      {disease && <DiseaseResult disease={disease} />}
    </div>
  );
};

export default SymptomChecker;
