
import React, { useState, useEffect } from "react";
import { Pill, ArrowRight } from "lucide-react";

interface SolutionProviderProps {
  disease: string;
}

const SolutionProvider: React.FC<SolutionProviderProps> = ({ disease }) => {
  const [loading, setLoading] = useState(true);
  const [solution, setSolution] = useState<string[]>([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchSolution = () => {
      setLoading(true);
      // Simulated delay for API call
      setTimeout(() => {
        // Mock solutions based on the disease
        const solutions: Record<string, string[]> = {
          "Migraine": [
            "Take over-the-counter pain relievers like ibuprofen or aspirin.",
            "Rest in a quiet, dark room to reduce sensory stimulation.",
            "Apply cold compresses to your forehead or neck.",
            "Stay hydrated and maintain regular meals.",
            "Consult a neurologist if migraines are frequent or severe."
          ],
          "Common Cold": [
            "Get plenty of rest to help your body fight the infection.",
            "Drink fluids like water, juice, or clear broth to prevent dehydration.",
            "Use over-the-counter medications like decongestants or pain relievers.",
            "Use a humidifier to add moisture to the air.",
            "Consult a doctor if symptoms persist beyond 10 days or are severe."
          ],
          "Gastroenteritis": [
            "Stay hydrated with water, clear broths, or oral rehydration solutions.",
            "Eat bland, easy-to-digest foods like bananas, rice, applesauce.",
            "Avoid dairy, fatty, sugary, or spicy foods until recovery.",
            "Get plenty of rest to aid recovery.",
            "Seek medical attention if symptoms include high fever, severe pain, or persistent vomiting."
          ],
          "Arthritis": [
            "Take prescribed anti-inflammatory medications.",
            "Apply hot or cold compresses to affected joints.",
            "Engage in low-impact exercises like swimming or walking.",
            "Maintain a healthy weight to reduce stress on joints.",
            "Consider physical therapy to improve joint function and reduce pain."
          ],
          "Dermatitis": [
            "Avoid scratching the affected area to prevent infection.",
            "Apply over-the-counter hydrocortisone cream to reduce inflammation.",
            "Use moisturizers regularly to keep skin hydrated.",
            "Identify and avoid potential allergens or irritants.",
            "Consult a dermatologist if the condition persists or worsens."
          ],
          "Unknown Condition": [
            "Consult with a healthcare professional for proper diagnosis.",
            "Keep track of your symptoms, their frequency, and severity.",
            "Maintain a healthy lifestyle with adequate rest, nutrition, and hydration.",
            "Avoid self-diagnosis or self-medication without professional guidance.",
            "Consider seeking a second opinion if needed."
          ]
        };

        setSolution(solutions[disease] || solutions["Unknown Condition"]);
        setLoading(false);
      }, 1000);
    };

    fetchSolution();
  }, [disease]);

  return (
    <div className="glass rounded-2xl p-8 shadow-lg mb-6 animate-fadeIn">
      <div className="flex items-center justify-center mb-6">
        <Pill className="h-6 w-6 text-health-600 mr-2" />
        <h3 className="text-xl font-bold">Medical Solution</h3>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-health-600"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {solution.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start p-4 rounded-lg bg-white border border-gray-100 shadow-sm animate-slideIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ArrowRight className="h-5 w-5 text-health-500 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
          
          <div className="mt-6 pt-4 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Note: This information is provided for educational purposes only and should not replace 
              professional medical advice. Always consult with a healthcare provider for proper diagnosis 
              and treatment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SolutionProvider;
