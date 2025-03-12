
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { LogIn, UserCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // For demo purposes, let's just accept any login
      toast({
        title: "Success!",
        description: "You've been logged in successfully.",
      });
      setLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-health-50 to-white">
      <Header />
      
      <div className="flex-grow flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md">
          <div className="glass rounded-2xl p-8 shadow-xl animate-fadeIn">
            <div className="text-center mb-8">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-health-100 rounded-full mb-4">
                <UserCircle className="h-8 w-8 text-health-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
              <p className="text-gray-600 mt-2">Sign in to your HealthGuide account</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-focus"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="#" className="text-sm text-health-600 hover:text-health-700">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-focus"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-health-600 hover:bg-health-700 text-white btn-effect"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  <>
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                  </>
                )}
              </Button>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-health-600 hover:text-health-700 font-medium">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
