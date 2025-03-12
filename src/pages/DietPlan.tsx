
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Apple, Banana, Carrot, Fish, Leaf } from "lucide-react";

interface DietItem {
  meal: string;
  foods: string[];
  time: string;
  notes?: string;
}

interface DietPlan {
  title: string;
  description: string;
  icon: React.ReactNode;
  dailyPlans: {
    [key: string]: DietItem[];
  };
}

const DietPlan: React.FC = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [goal, setGoal] = useState("gain");
  const [showResults, setShowResults] = useState(false);

  const dietPlans: { [key: string]: DietPlan } = {
    vata: {
      title: "Vata Diet Plan",
      description: "Balancing diet for Vata body types. Focus on warm, moist, grounding foods with sweet, sour, and salty tastes.",
      icon: <Leaf className="h-6 w-6 text-amber-600" />,
      dailyPlans: {
        "Breakfast (7-8 AM)": [
          {
            meal: "Main",
            foods: ["Warm oatmeal with ghee", "Stewed fruits", "Nuts (almonds, walnuts)"],
            time: "7:00 - 8:00 AM",
            notes: "Eat slowly and mindfully"
          }
        ],
        "Mid-Morning (10-11 AM)": [
          {
            meal: "Snack",
            foods: ["Warm milk with cardamom", "Dates or figs"],
            time: "10:00 - 11:00 AM"
          }
        ],
        "Lunch (12-1 PM)": [
          {
            meal: "Main",
            foods: ["Basmati rice", "Mung dal", "Steamed vegetables with ghee", "Yogurt"],
            time: "12:00 - 1:00 PM",
            notes: "Largest meal of the day"
          }
        ],
        "Evening (4-5 PM)": [
          {
            meal: "Snack",
            foods: ["Warm herbal tea", "Sweet fruit or small handful of nuts"],
            time: "4:00 - 5:00 PM"
          }
        ],
        "Dinner (6-7 PM)": [
          {
            meal: "Main",
            foods: ["Vegetable soup", "Khichdi (rice and lentils)", "Steamed vegetables"],
            time: "6:00 - 7:00 PM",
            notes: "Lighter than lunch"
          }
        ]
      }
    },
    pitta: {
      title: "Pitta Diet Plan",
      description: "Cooling diet for Pitta body types. Focus on cool, refreshing foods with sweet, bitter, and astringent tastes.",
      icon: <Banana className="h-6 w-6 text-blue-600" />,
      dailyPlans: {
        "Breakfast (7-8 AM)": [
          {
            meal: "Main",
            foods: ["Sweet fruits (pears, plums, mangoes)", "Cool milk or almond milk", "Wheat or oat porridge"],
            time: "7:00 - 8:00 AM"
          }
        ],
        "Mid-Morning (10-11 AM)": [
          {
            meal: "Snack",
            foods: ["Coconut water", "Fresh fruit"],
            time: "10:00 - 11:00 AM"
          }
        ],
        "Lunch (12-1 PM)": [
          {
            meal: "Main",
            foods: ["Basmati rice or quinoa", "Steamed vegetables", "Coconut chutney", "Cucumber raita"],
            time: "12:00 - 1:00 PM",
            notes: "Largest meal of the day"
          }
        ],
        "Evening (4-5 PM)": [
          {
            meal: "Snack",
            foods: ["Cool herbal tea (mint, coriander)", "Sweet juicy fruits"],
            time: "4:00 - 5:00 PM"
          }
        ],
        "Dinner (6-7 PM)": [
          {
            meal: "Main",
            foods: ["Light vegetable soup", "Basmati rice", "Steamed leafy greens"],
            time: "6:00 - 7:00 PM",
            notes: "Eat at least 3 hours before bed"
          }
        ]
      }
    },
    kapha: {
      title: "Kapha Diet Plan",
      description: "Stimulating diet for Kapha body types. Focus on light, dry, warming foods with pungent, bitter, and astringent tastes.",
      icon: <Carrot className="h-6 w-6 text-red-600" />,
      dailyPlans: {
        "Breakfast (8-9 AM)": [
          {
            meal: "Light",
            foods: ["Warm lemon water with honey and ginger", "Dry toasted bread", "Stewed apple with cinnamon"],
            time: "8:00 - 9:00 AM",
            notes: "Small portion, can even skip if not hungry"
          }
        ],
        "Mid-Morning (11 AM)": [
          {
            meal: "Snack",
            foods: ["Small handful of pumpkin seeds", "Herbal tea with ginger or cinnamon"],
            time: "11:00 AM"
          }
        ],
        "Lunch (12-1 PM)": [
          {
            meal: "Main",
            foods: ["Millet, barley, or quinoa", "Steamed vegetables with spices", "Small amount of legumes", "Green salad"],
            time: "12:00 - 1:00 PM",
            notes: "Main meal of the day"
          }
        ],
        "Evening (4 PM)": [
          {
            meal: "Snack",
            foods: ["Herbal tea", "Small piece of fruit if hungry"],
            time: "4:00 PM"
          }
        ],
        "Dinner (5:30-6 PM)": [
          {
            meal: "Light",
            foods: ["Vegetable soup with spices", "Small portion of grains", "Steamed vegetables"],
            time: "5:30 - 6:00 PM",
            notes: "Early, light dinner is best"
          }
        ]
      }
    },
    weight: {
      title: "Weight Gain Diet Plan",
      description: "Calorie-dense diet plan designed to help you gain healthy weight with nutrient-rich foods.",
      icon: <Fish className="h-6 w-6 text-green-600" />,
      dailyPlans: {
        "Breakfast (7-8 AM)": [
          {
            meal: "Main",
            foods: ["3 eggs omelet with cheese and vegetables", "2 slices of whole grain toast with avocado and peanut butter", "Banana smoothie with full-fat milk, protein powder, and honey"],
            time: "7:00 - 8:00 AM",
            notes: "High protein and calorie breakfast"
          }
        ],
        "Mid-Morning (10 AM)": [
          {
            meal: "Snack",
            foods: ["Greek yogurt with granola, nuts, and dried fruits", "Trail mix with mixed nuts and dark chocolate chips"],
            time: "10:00 AM"
          }
        ],
        "Lunch (12-1 PM)": [
          {
            meal: "Main",
            foods: ["Grilled chicken or fish (6-8 oz)", "Brown rice or quinoa (1 cup)", "Roasted vegetables with olive oil", "Avocado salad with olive oil dressing"],
            time: "12:00 - 1:00 PM"
          }
        ],
        "Afternoon (3 PM)": [
          {
            meal: "Snack",
            foods: ["Protein shake with banana, peanut butter, and oats", "Whole grain crackers with hummus"],
            time: "3:00 PM"
          }
        ],
        "Dinner (6-7 PM)": [
          {
            meal: "Main",
            foods: ["Lean red meat, chicken, or fish (6-8 oz)", "Sweet potato or whole grain pasta", "Steamed vegetables with butter", "Side salad with nuts and cheese"],
            time: "6:00 - 7:00 PM"
          }
        ],
        "Before Bed (9 PM)": [
          {
            meal: "Snack",
            foods: ["Cottage cheese with fruits", "Handful of nuts", "Milk with turmeric"],
            time: "9:00 PM",
            notes: "Slow-digesting proteins before sleep"
          }
        ]
      }
    }
  };

  const handleCalculate = () => {
    // Simple validation
    if (weight && height && age) {
      setShowResults(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white bg-[url('/images/diet-bg.jpg')] bg-cover bg-fixed bg-center bg-opacity-25">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 animate-fadeIn">
          Personalized Diet Plans
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Discover diet plans based on your body type and health goals.
          Whether you're following Ayurvedic principles or looking to change your weight,
          we have nutritional guidance for you.
        </p>
        
        <div className="glass rounded-xl p-6 md:p-8 shadow-lg max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Find Your Personalized Plan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input 
                id="weight" 
                type="number" 
                placeholder="Enter your weight" 
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-1 input-focus"
              />
            </div>
            
            <div>
              <Label htmlFor="height">Height (cm)</Label>
              <Input 
                id="height" 
                type="number" 
                placeholder="Enter your height" 
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="mt-1 input-focus"
              />
            </div>
            
            <div>
              <Label htmlFor="age">Age</Label>
              <Input 
                id="age" 
                type="number" 
                placeholder="Enter your age" 
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="mt-1 input-focus"
              />
            </div>
            
            <div>
              <Label htmlFor="goal">Your Goal</Label>
              <select 
                id="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 input-focus"
              >
                <option value="gain">Gain Weight</option>
                <option value="vata">Balance Vata</option>
                <option value="pitta">Balance Pitta</option>
                <option value="kapha">Balance Kapha</option>
              </select>
            </div>
          </div>
          
          <Button 
            className="w-full mt-6 bg-health-600 hover:bg-health-700 text-white btn-effect"
            onClick={handleCalculate}
          >
            Get Diet Recommendations
          </Button>
        </div>
        
        {showResults && (
          <div className="animate-fadeIn">
            <Tabs defaultValue={goal === "gain" ? "weight" : goal}>
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
                <TabsTrigger value="vata" className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900">
                  Vata
                </TabsTrigger>
                <TabsTrigger value="pitta" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900">
                  Pitta
                </TabsTrigger>
                <TabsTrigger value="kapha" className="data-[state=active]:bg-red-100 data-[state=active]:text-red-900">
                  Kapha
                </TabsTrigger>
                <TabsTrigger value="weight" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-900">
                  Weight Gain
                </TabsTrigger>
              </TabsList>
              
              {Object.keys(dietPlans).map((planKey) => (
                <TabsContent key={planKey} value={planKey} className="animate-fadeIn">
                  <div className="glass rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-6">
                      {dietPlans[planKey].icon}
                      <h2 className="text-2xl font-bold ml-2 text-gray-800">{dietPlans[planKey].title}</h2>
                    </div>
                    
                    <p className="text-center text-gray-600 mb-8">
                      {dietPlans[planKey].description}
                    </p>
                    
                    <div className="space-y-6">
                      {Object.entries(dietPlans[planKey].dailyPlans).map(([timeSlot, items]) => (
                        <div key={timeSlot} className="border-l-4 border-health-500 pl-4 py-2 animate-slideIn">
                          <h3 className="font-bold text-lg text-gray-800 mb-2">{timeSlot}</h3>
                          
                          {items.map((item, index) => (
                            <div key={index} className="mb-4">
                              <h4 className="font-medium text-health-700">{item.meal} ({item.time})</h4>
                              <ul className="list-disc list-inside mt-2 space-y-1">
                                {item.foods.map((food, foodIndex) => (
                                  <li key={foodIndex} className="text-gray-700">{food}</li>
                                ))}
                              </ul>
                              {item.notes && (
                                <p className="text-sm italic text-gray-500 mt-1">Note: {item.notes}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-sm text-blue-800">
                        <strong>Important:</strong> This is a general diet plan. For personalized dietary advice, 
                        please consult with a nutritionist or healthcare provider, especially if you have any 
                        medical conditions or dietary restrictions.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
};

export default DietPlan;
