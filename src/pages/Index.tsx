
import React from "react";
import SymptomChecker from "@/components/SymptomChecker";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white bg-[url('/images/medical-bg.jpg')] bg-cover bg-center bg-opacity-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 animate-fadeIn">
          Health Symptom Checker
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Describe your symptoms below and get instant information about possible conditions, 
          remedies, and professional advice. Your health is our priority.
        </p>
        
        <SymptomChecker />
      </div>
    </div>
  );
};

export default Index;
