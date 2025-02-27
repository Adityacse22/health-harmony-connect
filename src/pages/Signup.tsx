
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic password validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setIsLoading(false);
      return;
    }

    try {
      // This is a placeholder for your actual API call
      // Replace with your backend URL when available
      const response = await fetch('https://your-backend-url/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      // Simulate successful signup for demonstration purposes
      // In a real app, you would check response.ok and process the data
      if (email && password) {
        toast({
          title: "Account created successfully!",
          description: "You can now log in with your credentials.",
        });
        navigate('/login');
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Connection error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      <Navbar />
      
      <div className="flex justify-center items-center min-h-screen pt-16 px-4">
        <Card className="w-full max-w-md p-6 bg-white/90 backdrop-blur-sm animate-fade-up">
          <h2 className="text-2xl font-bold text-center text-primary mb-6">
            Create HealthSync Account
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="At least 8 characters"
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters long
              </p>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-hover"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
            
            {error && (
              <div className="text-accent text-center text-sm">
                {error}
              </div>
            )}
          </form>
          
          <div className="text-center mt-6">
            <span className="text-gray-600">Already have an account? </span>
            <Button 
              variant="link" 
              className="text-primary p-0"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
