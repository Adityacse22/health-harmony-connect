
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Home, Activity, Calendar, FileText, User } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be connected to your auth system

  const navigateTo = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  // Define navigation items
  const navItems = isLoggedIn ? [
    { label: "Dashboard", path: "/dashboard", icon: Home },
    { label: "AI Diagnosis", path: "/diagnosis", icon: Activity },
    { label: "Appointments", path: "/appointments", icon: Calendar },
    { label: "Medical Records", path: "/records", icon: FileText },
  ] : [
    { label: "Home", path: "/", icon: Home },
    { label: "AI Diagnosis", path: "/diagnosis", icon: Activity },
    { label: "Appointments", path: "/appointments", icon: Calendar },
    { label: "Medical Records", path: "/records", icon: FileText },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-semibold text-white cursor-pointer hover:text-primary transition-colors duration-300" onClick={() => navigate("/")}>
              Health Sync
            </h1>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Button>
            ))}
            
            {isLoggedIn ? (
              <Button
                className="bg-primary hover:bg-primary-hover text-white transition-colors"
                onClick={() => navigate("/dashboard")}
              >
                <User className="h-4 w-4 mr-2" />
                My Account
              </Button>
            ) : (
              <Button
                className="bg-primary hover:bg-primary-hover text-white transition-colors"
                onClick={() => navigate("/login")}
              >
                Sign In
              </Button>
            )}
          </div>
          
          {/* Mobile menu (hamburger) */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black text-white w-[250px] pt-12">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Button
                      key={item.path}
                      variant="ghost"
                      className="justify-start text-gray-300 hover:text-white transition-colors"
                      onClick={() => navigateTo(item.path)}
                    >
                      <item.icon className="h-4 w-4 mr-3" />
                      {item.label}
                    </Button>
                  ))}
                  
                  {isLoggedIn ? (
                    <Button
                      className="bg-primary hover:bg-primary-hover text-white transition-colors mt-4"
                      onClick={() => navigateTo("/dashboard")}
                    >
                      <User className="h-4 w-4 mr-2" />
                      My Account
                    </Button>
                  ) : (
                    <Button
                      className="bg-primary hover:bg-primary-hover text-white transition-colors mt-4"
                      onClick={() => navigateTo("/login")}
                    >
                      Sign In
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
