
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";

const Login = () => {
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

    try {
      // This is a placeholder for your actual API call
      // Replace with your backend URL when available
      const response = await fetch('https://your-backend-url/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      // Simulate successful login for demonstration purposes
      // In a real app, you would check response.ok and process the data
      if (email && password) {
        localStorage.setItem('authToken', 'demo-token');
        toast({
          title: "Login successful",
          description: "Welcome back to HealthSync!",
        });
        navigate('/');
      } else {
        setError("Invalid email or password");
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
            Login to HealthSync
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
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-hover"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
            
            {error && (
              <div className="text-accent text-center text-sm">
                {error}
              </div>
            )}
          </form>
          
          <div className="text-center mt-6">
            <span className="text-gray-600">New user? </span>
            <Button 
              variant="link" 
              className="text-primary p-0"
              onClick={() => navigate("/signup")}
            >
              Create account
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
