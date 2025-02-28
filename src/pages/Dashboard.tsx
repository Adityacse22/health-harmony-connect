
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, FileText, Heart, Activity, Clock, ArrowUpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const [greeting, setGreeting] = useState(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  });
  
  const upcomingAppointments = [
    { id: 1, doctor: "Dr. Sarah Johnson", specialty: "Cardiologist", date: "May 15, 2023", time: "10:30 AM" },
    { id: 2, doctor: "Dr. Michael Chen", specialty: "General Physician", date: "May 22, 2023", time: "2:15 PM" },
  ];
  
  const healthStats = [
    { name: "Heart Rate", value: "72 bpm", icon: Heart, color: "text-accent" },
    { name: "Blood Pressure", value: "118/78", icon: Activity, color: "text-blue-500" },
    { name: "Sleep", value: "7.5 hrs", icon: Clock, color: "text-indigo-500" },
    { name: "Steps", value: "8,452", icon: ArrowUpCircle, color: "text-green-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{greeting}, John</h1>
          <p className="text-gray-600 mt-1">Here's an overview of your health</p>
        </div>
        
        {/* Health Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {healthStats.map((stat) => (
            <Card key={stat.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{stat.name}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Upcoming Appointments */}
          <Card className="md:col-span-2 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-start p-3 rounded-lg border bg-white hover:bg-gray-50">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{appointment.doctor}</h4>
                        <p className="text-sm text-gray-500">{appointment.specialty}</p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{appointment.date}</span>
                          <Clock className="h-4 w-4 ml-3 mr-1" />
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs">Reschedule</Button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-4">No upcoming appointments</p>
              )}
              <Button variant="outline" className="w-full mt-4">View All Appointments</Button>
            </CardContent>
          </Card>
          
          {/* Recent Medical Records */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold flex items-center">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                Recent Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 rounded-lg border bg-white hover:bg-gray-50 cursor-pointer">
                  <h4 className="font-medium">Blood Test Results</h4>
                  <p className="text-xs text-gray-500">May 5, 2023</p>
                </div>
                <div className="p-3 rounded-lg border bg-white hover:bg-gray-50 cursor-pointer">
                  <h4 className="font-medium">Annual Check-up Notes</h4>
                  <p className="text-xs text-gray-500">April 12, 2023</p>
                </div>
                <div className="p-3 rounded-lg border bg-white hover:bg-gray-50 cursor-pointer">
                  <h4 className="font-medium">Vaccination Record</h4>
                  <p className="text-xs text-gray-500">March 28, 2023</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">View All Records</Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button className="bg-primary hover:bg-primary-hover flex items-center justify-center py-6">
            <Calendar className="h-5 w-5 mr-2" />
            Book Appointment
          </Button>
          <Button variant="outline" className="flex items-center justify-center py-6">
            <FileText className="h-5 w-5 mr-2" />
            Upload Medical Record
          </Button>
          <Button 
            className="bg-accent hover:bg-accent-hover text-white flex items-center justify-center py-6"
            onClick={() => window.location.href = "/diagnosis"}
          >
            <Activity className="h-5 w-5 mr-2" />
            Start AI Diagnosis
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
