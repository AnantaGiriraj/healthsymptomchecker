
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { LogIn, Lock, Mail, Eye, EyeOff } from "lucide-react";

const Login: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validate inputs
    if (!email.trim() || !password.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    // Simulate login
    setTimeout(() => {
      // Success - redirect to home page
      window.location.href = "/";
      
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      });
      
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-health-50 to-white bg-[url('/images/login-bg.jpg')] bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="glass rounded-2xl p-8 shadow-xl max-w-md w-full space-y-8 animate-fadeIn">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="mt-2 text-gray-600">
            Sign in to access your health dashboard
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email address</Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="pl-10 input-focus"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-sm text-health-600 hover:text-health-800 transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="pl-10 pr-10 input-focus"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-health-600 hover:bg-health-700 text-white py-2 btn-effect"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <LogIn className="h-5 w-5 mr-2" />
                  Sign in
                </span>
              )}
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-sm">
              <span className="text-gray-500">Don't have an account? </span>
              <Link to="/signup" className="font-medium text-health-600 hover:text-health-800 transition-colors">
                Create account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
