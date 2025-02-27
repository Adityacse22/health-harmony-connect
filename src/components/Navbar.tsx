
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navigateTo = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

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
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => navigate("/diagnosis")}
            >
              AI Diagnosis
            </Button>
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => navigate("/appointments")}
            >
              Appointments
            </Button>
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => navigate("/records")}
            >
              Medical Records
            </Button>
            <Button
              className="bg-primary hover:bg-primary-hover text-white transition-colors"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
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
                  <Button
                    variant="ghost"
                    className="justify-start text-gray-300 hover:text-white transition-colors"
                    onClick={() => navigateTo("/diagnosis")}
                  >
                    AI Diagnosis
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-gray-300 hover:text-white transition-colors"
                    onClick={() => navigateTo("/appointments")}
                  >
                    Appointments
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-gray-300 hover:text-white transition-colors"
                    onClick={() => navigateTo("/records")}
                  >
                    Medical Records
                  </Button>
                  <Button
                    className="bg-primary hover:bg-primary-hover text-white transition-colors"
                    onClick={() => navigateTo("/login")}
                  >
                    Sign In
                  </Button>
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
