
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Star, 
  ThumbsUp, 
  MessageSquare, 
  Send,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Feedback: React.FC = () => {
  const { toast } = useToast();
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [category, setCategory] = useState("general");
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!rating) {
      toast({
        title: "Rating Required",
        description: "Please provide a star rating before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    if (!feedbackText.trim()) {
      toast({
        title: "Feedback Required",
        description: "Please provide some feedback comments.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate sending feedback
    setTimeout(() => {
      console.log({
        rating,
        name,
        email,
        feedbackText,
        category,
      });
      
      // Reset form and show success
      setSubmitted(true);
      toast({
        title: "Feedback Submitted",
        description: "Thank you for your valuable feedback!",
      });
    }, 1000);
  };
  
  const handleReset = () => {
    setRating(null);
    setName("");
    setEmail("");
    setFeedbackText("");
    setCategory("general");
    setSubmitted(false);
  };

  const renderStar = (starPosition: number) => {
    const isActive = (hoverRating || rating || 0) >= starPosition;
    
    return (
      <Star
        className={`h-8 w-8 cursor-pointer transition-all duration-150 ${
          isActive ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        } hover:scale-110`}
        onClick={() => setRating(starPosition)}
        onMouseEnter={() => setHoverRating(starPosition)}
        onMouseLeave={() => setHoverRating(null)}
      />
    );
  };
  
  // Testimonials for display
  const testimonials = [
    {
      name: "Emily Johnson",
      rating: 5,
      comment: "This app is a lifesaver! I was able to identify my symptoms and get proper treatment quickly. The home remedies section is especially helpful.",
      date: "2 weeks ago"
    },
    {
      name: "Michael Rodriguez",
      rating: 4,
      comment: "Very intuitive interface and accurate symptom matching. The diet plan section has helped me maintain a healthier lifestyle based on my body type.",
      date: "1 month ago"
    },
    {
      name: "Sarah Williams",
      rating: 5,
      comment: "I love how comprehensive this app is! From symptom checking to finding specialists nearby, it's been invaluable for managing my family's health.",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white bg-[url('/images/feedback-bg.jpg')] bg-cover bg-fixed bg-center">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 animate-fadeIn">
          Your Feedback Matters
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          We're constantly working to improve our app. Share your thoughts and help us 
          make it even better for you and the community.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Feedback Form */}
          <div className="glass rounded-xl p-8 shadow-lg animate-fadeIn">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-health-600" />
                  Share Your Experience
                </h2>
                
                <div className="mb-6">
                  <Label className="block mb-2">How would you rate your experience?</Label>
                  <div className="flex space-x-2 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => renderStar(star))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="category">Feedback Category</Label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 input-focus"
                  >
                    <option value="general">General Feedback</option>
                    <option value="symptom-checker">Symptom Checker</option>
                    <option value="diet-plan">Diet Plans</option>
                    <option value="doctors">Doctor Contacts</option>
                    <option value="ui">User Interface</option>
                    <option value="bug">Bug Report</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="name">Your Name (Optional)</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 input-focus"
                  />
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="email">Your Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 input-focus"
                  />
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Tell us what you liked or how we can improve..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    className="mt-1 min-h-32 input-focus"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-health-600 hover:bg-health-700 text-white btn-effect"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Submit Feedback
                </Button>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Thank You!</h2>
                <p className="text-gray-600 mb-8">
                  Your feedback has been submitted successfully. We appreciate you taking 
                  the time to help us improve our app.
                </p>
                <Button 
                  onClick={handleReset}
                  className="bg-health-600 hover:bg-health-700 text-white"
                >
                  Submit Another Response
                </Button>
              </div>
            )}
          </div>
          
          {/* Testimonials */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <ThumbsUp className="h-6 w-6 mr-2 text-health-600" />
              User Testimonials
            </h2>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="glass rounded-xl p-6 shadow-lg animate-fadeIn"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <span className="text-sm text-gray-500">{testimonial.date}</span>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700">"{testimonial.comment}"</p>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 mt-6 border border-blue-100">
              <h3 className="font-semibold text-blue-700 mb-2">We Value Your Privacy</h3>
              <p className="text-sm text-blue-600">
                All feedback is anonymous by default. If you provide your contact information, 
                it will only be used to follow up on your feedback if necessary. We never share 
                your personal data with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
