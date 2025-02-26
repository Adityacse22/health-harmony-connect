
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pt-16 md:pt-24 lg:pt-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center text-center">
              <h1 className="animate-fade-down text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Revolutionizing Healthcare Access in India
              </h1>
              <p className="animate-fade-up mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
                Experience the future of healthcare with AI-powered diagnosis, seamless appointment booking,
                and secure medical record management - all in one place.
              </p>
              <div className="animate-fade-up mt-10 flex items-center gap-x-6">
                <Button
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg"
                  onClick={() => navigate("/diagnosis")}
                >
                  Try AI Diagnosis
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg"
                  onClick={() => navigate("/appointments")}
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mx-auto max-w-7xl px-6 mt-24 sm:mt-32">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="animate-slide-in relative rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 text-2xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="mx-auto max-w-7xl px-6 mt-24 sm:mt-32 mb-24">
          <div className="rounded-3xl bg-secondary/30 px-8 py-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Trusted by Healthcare Providers Across India
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Join thousands of healthcare professionals and patients who trust Health Sync
                for their digital healthcare needs.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Health Sync. All rights reserved.
            </p>
          </div>
          <div className="mt-4 flex justify-center md:mt-0">
            <Button variant="link" className="text-sm text-gray-500 hover:text-primary">
              Privacy Policy
            </Button>
            <Button variant="link" className="text-sm text-gray-500 hover:text-primary">
              Terms of Service
            </Button>
            <Button variant="link" className="text-sm text-gray-500 hover:text-primary">
              Contact
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    title: "AI-Powered Diagnosis",
    description: "Get instant preliminary health assessments powered by advanced AI technology.",
    icon: "🤖",
  },
  {
    title: "Online Appointments",
    description: "Book appointments with healthcare providers across India seamlessly.",
    icon: "📅",
  },
  {
    title: "Digital Medical Records",
    description: "Access your medical history securely from anywhere, anytime.",
    icon: "📄",
  },
  {
    title: "Emergency Services",
    description: "Quick access to emergency services with real-time location sharing.",
    icon: "🚑",
  },
  {
    title: "Digital Prescriptions",
    description: "Receive and manage digital prescriptions from your healthcare providers.",
    icon: "💊",
  },
  {
    title: "Environmental Impact",
    description: "Track your contribution to reducing carbon footprint through digital healthcare.",
    icon: "🌱",
  },
];

export default Index;
