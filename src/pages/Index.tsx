
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Users, Shield, Globe, Award, CheckCircle, Smartphone } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute h-full w-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 400 400"
        >
          <g stroke="currentColor" strokeWidth="1">
            <path d="M200 50a20 20 0 1 0 0-40 20 20 0 0 0 0 40z" />
            <path d="M190 30h20M200 40v20" />
            <circle cx="150" cy="100" r="15" />
            <path d="M142 92l16 16M158 92l-16 16" />
            <path d="M250 100a15 15 0 1 0 0-30 15 15 0 0 0 0 30z" />
            <path d="M243 85h15M250 78v15" />
            <circle cx="100" cy="200" r="25" />
            <path d="M85 185l30 30M115 185l-30 30" />
            <circle cx="300" cy="200" r="20" />
            <path d="M290 190h20M300 180v20" />
            <path d="M150 300a18 18 0 1 0 0-36 18 18 0 0 0 0 36z" />
            <path d="M142 282h16M150 274v16" />
            <circle cx="250" cy="300" r="22" />
            <path d="M235 285l30 30M265 285l-30 30" />
          </g>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
      </div>

      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pt-16 md:pt-24 lg:pt-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center text-center">
              <h1 className="animate-fade-down text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Revolutionizing Healthcare Access in India
              </h1>
              <p className="animate-fade-up mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
                Experience the future of healthcare with AI-powered diagnosis, seamless appointment booking,
                and secure medical record management - all in one place.
              </p>
              <div className="animate-fade-up mt-10 flex items-center gap-x-6">
                <Button
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => navigate("/diagnosis")}
                >
                  Try AI Diagnosis
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg border-2 hover:border-primary hover:text-primary transition-all duration-300"
                  onClick={() => navigate("/appointments")}
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mx-auto max-w-7xl px-6 mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="animate-fade-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mx-auto max-w-7xl px-6 mt-24 sm:mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform offers a range of features designed to make healthcare more accessible and efficient
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="animate-slide-in relative rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 text-3xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mx-auto max-w-7xl px-6 mt-24 sm:mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              How Health Sync Works
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple three-step process makes managing your healthcare effortless
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mx-auto max-w-7xl px-6 mt-24 sm:mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Thousands of users across India trust Health Sync for their healthcare needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="mx-auto max-w-7xl px-6 mt-24 sm:mt-32 mb-24">
          <div className="rounded-3xl bg-gradient-to-r from-secondary/30 via-secondary/50 to-secondary/30 px-8 py-16 transform hover:scale-[1.01] transition-transform duration-300">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Trusted by Healthcare Providers Across India
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Join thousands of healthcare professionals and patients who trust Health Sync
                for their digital healthcare needs.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-8">
                {trustBadges.map((badge, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 bg-white/80 rounded-lg shadow-sm"
                  >
                    <badge.icon className="h-6 w-6 text-primary mr-2" />
                    <span className="font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
              <Button
                className="mt-8 bg-primary hover:bg-primary-hover text-white px-6 py-3"
                onClick={() => navigate("/signup")}
              >
                Create Free Account
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Health Sync. All rights reserved.
            </p>
          </div>
          <div className="mt-4 flex justify-center md:mt-0">
            <Button variant="link" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Button>
            <Button variant="link" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Button>
            <Button variant="link" className="text-sm text-gray-400 hover:text-white">
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

const stats = [
  { value: "1M+", label: "Active Users" },
  { value: "5K+", label: "Healthcare Providers" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Service Availability" },
];

const steps = [
  {
    title: "Create Your Account",
    description: "Sign up in minutes and set up your personal health profile."
  },
  {
    title: "Connect with Providers",
    description: "Find and book appointments with healthcare professionals across India."
  },
  {
    title: "Manage Your Health",
    description: "Access your records, track appointments, and get personalized health insights."
  }
];

const testimonials = [
  {
    quote: "Health Sync has transformed how I manage my family's healthcare. The AI diagnosis feature saved us unnecessary hospital visits.",
    name: "Priya Sharma",
    location: "Mumbai"
  },
  {
    quote: "As a doctor, I appreciate how Health Sync streamlines appointment management and patient communication.",
    name: "Dr. Rajesh Kumar",
    location: "Delhi"
  },
  {
    quote: "The medical records feature helps me keep track of all my health information in one place. Truly revolutionary!",
    name: "Ananya Patel",
    location: "Bangalore"
  }
];

const trustBadges = [
  { icon: Shield, label: "HIPAA Compliant" },
  { icon: Users, label: "5,000+ Providers" },
  { icon: Globe, label: "Nationwide Coverage" },
  { icon: Award, label: "Award Winning" },
];

export default Index;
