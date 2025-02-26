
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-semibold text-white cursor-pointer" onClick={() => navigate("/")}>
              Health Sync
            </h1>
          </div>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
