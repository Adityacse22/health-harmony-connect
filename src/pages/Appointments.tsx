
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, User, ChevronRight, Plus, Video, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";

const Appointments = () => {
  const upcomingAppointments = [
    { 
      id: 1, 
      doctor: "Dr. Sarah Johnson", 
      specialty: "Cardiologist",
      location: "City General Hospital",
      address: "123 Medical Center Dr.",
      date: "May 15, 2023", 
      time: "10:30 AM",
      type: "In-person"
    },
    { 
      id: 2, 
      doctor: "Dr. Michael Chen", 
      specialty: "General Physician",
      location: "Wellness Clinic",
      address: "456 Health Blvd.",
      date: "May 22, 2023", 
      time: "2:15 PM",
      type: "Video"
    },
    { 
      id: 3, 
      doctor: "Dr. Lisa Rodriguez", 
      specialty: "Dermatologist",
      location: "Skin Health Center",
      address: "789 Dermatology Ave.",
      date: "June 3, 2023", 
      time: "9:00 AM",
      type: "Phone"
    },
  ];
  
  const pastAppointments = [
    { 
      id: 4, 
      doctor: "Dr. James Wilson", 
      specialty: "Orthopedic Surgeon",
      location: "Joint & Spine Center",
      address: "321 Orthopedic Way",
      date: "April 8, 2023", 
      time: "11:45 AM",
      type: "In-person"
    },
    { 
      id: 5, 
      doctor: "Dr. Emily Parker", 
      specialty: "Ophthalmologist",
      location: "Vision Care Clinic",
      address: "654 Eye Care Dr.",
      date: "March 22, 2023", 
      time: "3:30 PM",
      type: "Video"
    },
  ];
  
  const getAppointmentIcon = (type: string) => {
    switch (type) {
      case "Video": return <Video className="h-5 w-5 text-blue-500" />;
      case "Phone": return <Phone className="h-5 w-5 text-green-500" />;
      default: return <User className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 pb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
            <p className="text-gray-600 mt-1">Manage your healthcare appointments</p>
          </div>
          <Button className="mt-4 md:mt-0 flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Book New Appointment
          </Button>
        </div>
        
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            {upcomingAppointments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingAppointments.map((appointment) => (
                  <Card key={appointment.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          {getAppointmentIcon(appointment.type)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{appointment.doctor}</h4>
                          <p className="text-sm text-gray-500">{appointment.specialty}</p>
                          <span className="inline-block text-xs px-2 py-1 rounded-full bg-primary/10 text-primary mt-1">
                            {appointment.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-start">
                          <Calendar className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                          <div>
                            <p className="text-sm font-medium">{appointment.date}</p>
                            <p className="text-xs text-gray-500">Date</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Clock className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                          <div>
                            <p className="text-sm font-medium">{appointment.time}</p>
                            <p className="text-xs text-gray-500">Time</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                          <div>
                            <p className="text-sm font-medium">{appointment.location}</p>
                            <p className="text-xs text-gray-500">{appointment.address}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" size="sm">Reschedule</Button>
                        <Button size="sm">Get Directions</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <Calendar className="h-12 w-12 mx-auto text-gray-400" />
                  <h3 className="mt-2 text-sm font-semibold text-gray-900">No upcoming appointments</h3>
                  <p className="mt-1 text-sm text-gray-500">Book an appointment with one of our healthcare providers</p>
                  <div className="mt-6">
                    <Button className="flex items-center mx-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="past">
            {pastAppointments.length > 0 ? (
              <div className="space-y-4">
                {pastAppointments.map((appointment) => (
                  <Card key={appointment.id} className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-gray-100 p-3 rounded-full mr-4">
                            {getAppointmentIcon(appointment.type)}
                          </div>
                          <div>
                            <h4 className="font-medium">{appointment.doctor}</h4>
                            <p className="text-sm text-gray-500">{appointment.specialty}</p>
                            <div className="flex items-center mt-1 text-xs text-gray-500">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{appointment.date}</span>
                              <Clock className="h-3 w-3 ml-3 mr-1" />
                              <span>{appointment.time}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <Calendar className="h-12 w-12 mx-auto text-gray-400" />
                  <h3 className="mt-2 text-sm font-semibold text-gray-900">No past appointments</h3>
                  <p className="mt-1 text-sm text-gray-500">Your appointment history will appear here</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Appointments;
