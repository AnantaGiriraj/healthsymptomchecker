
import React, { useState, useEffect } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface HomeRemediesProps {
  disease: string;
}

const HomeRemedies: React.FC<HomeRemediesProps> = ({ disease }) => {
  const [loading, setLoading] = useState(true);
  const [remedies, setRemedies] = useState<string[]>([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchRemedies = () => {
      setLoading(true);
      // Simulated delay for API call
      setTimeout(() => {
        // Mock remedies based on the disease
        const remediesList: Record<string, string[]> = {
          "Migraine": [
            "Lie down in a dark, quiet room with your eyes closed.",
            "Place a cold cloth or ice pack on your forehead or neck.",
            "Drink ginger tea which may help with the nausea and inflammation.",
            "Try lavender essential oil in a diffuser or applied diluted to the temples.",
            "Stay hydrated and maintain regular meal times to prevent triggers."
          ],
          "Common Cold": [
            "Drink hot lemon water with honey to soothe throat irritation.",
            "Try saltwater gargle (1/4 to 1/2 teaspoon of salt in 8 ounces of warm water).",
            "Use steam inhalation with a few drops of eucalyptus or peppermint oil.",
            "Consume hot chicken soup which may have anti-inflammatory properties.",
            "Take zinc lozenges within 24 hours of symptoms to reduce duration."
          ],
          "Gastroenteritis": [
            "Sip on clear fluids like water, clear broths, or herbal teas.",
            "Try the BRAT diet (Bananas, Rice, Applesauce, Toast) for mild symptoms.",
            "Consume probiotics via yogurt or supplements to restore gut bacteria.",
            "Try ginger tea which may help with nausea and digestive discomfort.",
            "Get plenty of rest to help your body fight the infection."
          ],
          "Arthritis": [
            "Apply warm compresses to stiff joints, especially in the morning.",
            "Try turmeric milk (golden milk) for its anti-inflammatory properties.",
            "Massage affected areas with warm oil infused with ginger or eucalyptus.",
            "Practice gentle yoga or stretching exercises to improve flexibility.",
            "Include omega-3 rich foods like fatty fish in your diet."
          ],
          "Dermatitis": [
            "Apply pure aloe vera gel to soothe inflammation and irritation.",
            "Take an oatmeal bath by adding colloidal oatmeal to lukewarm bathwater.",
            "Use coconut oil as a natural moisturizer for dry, irritated skin.",
            "Apply diluted apple cider vinegar with a cotton ball to balance skin pH.",
            "Use a cool, wet cloth compress on irritated areas to reduce itching."
          ],
          "Unknown Condition": [
            "Prioritize rest and ensure adequate sleep.",
            "Stay hydrated by drinking plenty of water throughout the day.",
            "Maintain a balanced diet rich in fruits, vegetables, and whole grains.",
            "Practice stress reduction techniques like deep breathing or meditation.",
            "Keep a symptom journal to help identify patterns or triggers."
          ]
        };

        setRemedies(remediesList[disease] || remediesList["Unknown Condition"]);
        setLoading(false);
      }, 1000);
    };

    fetchRemedies();
  }, [disease]);

  return (
    <div className="glass rounded-2xl p-8 shadow-lg mb-6 animate-fadeIn">
      <div className="flex items-center justify-center mb-6">
        <Sparkles className="h-6 w-6 text-health-600 mr-2" />
        <h3 className="text-xl font-bold">Home Remedies</h3>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-health-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {remedies.map((remedy, index) => (
            <div 
              key={index} 
              className="flex items-start p-4 rounded-lg bg-white/90 border border-health-100 shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">{remedy}</p>
            </div>
          ))}
          
          <div className="col-span-1 md:col-span-2 mt-6 pt-4 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Note: These home remedies are suggested based on traditional practices and may provide relief 
              for minor symptoms. For persistent or severe symptoms, please consult a healthcare professional.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeRemedies;
