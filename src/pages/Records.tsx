
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Search, Upload, Download, Filter, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";

const Records = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const records = [
    { id: 1, title: "Complete Blood Count", date: "May 10, 2023", provider: "City General Hospital", type: "Lab Results", size: "1.2 MB" },
    { id: 2, title: "Annual Physical Exam", date: "April 15, 2023", provider: "Dr. Sarah Johnson", type: "Examination", size: "3.5 MB" },
    { id: 3, title: "COVID-19 Vaccination", date: "March 5, 2023", provider: "Community Health Center", type: "Vaccination", size: "0.8 MB" },
    { id: 4, title: "Chest X-Ray", date: "February 20, 2023", provider: "Radiology Partners", type: "Imaging", size: "8.4 MB" },
    { id: 5, title: "Lipid Panel", date: "January 12, 2023", provider: "Wellness Clinic", type: "Lab Results", size: "1.1 MB" },
    { id: 6, title: "Allergy Test Results", date: "December 8, 2022", provider: "Allergy Specialists", type: "Lab Results", size: "2.3 MB" },
  ];
  
  const filteredRecords = records.filter(record => 
    record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const recordTypes = ["All", "Lab Results", "Imaging", "Vaccination", "Examination", "Prescription"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 pb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Medical Records</h1>
            <p className="text-gray-600 mt-1">Access and manage your health documents</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button className="flex items-center">
              <Upload className="h-4 w-4 mr-2" />
              Upload Record
            </Button>
          </div>
        </div>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  type="text" 
                  placeholder="Search records..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Date Range
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="mb-6">
            {recordTypes.map(type => (
              <TabsTrigger key={type} value={type} className="px-4">{type}</TabsTrigger>
            ))}
          </TabsList>
          
          {recordTypes.map(tabType => (
            <TabsContent key={tabType} value={tabType}>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="min-w-full divide-y divide-gray-200">
                  <div className="bg-gray-50 flex">
                    <div className="py-3.5 px-4 text-sm font-semibold text-gray-900 w-5/12">Document</div>
                    <div className="py-3.5 px-4 text-sm font-semibold text-gray-900 w-3/12 hidden md:block">Provider</div>
                    <div className="py-3.5 px-4 text-sm font-semibold text-gray-900 w-2/12 hidden md:block">Date</div>
                    <div className="py-3.5 px-4 text-sm font-semibold text-gray-900 w-1/12 hidden md:block">Size</div>
                    <div className="py-3.5 px-4 text-sm font-semibold text-gray-900 w-1/12 text-right">Action</div>
                  </div>
                  <div className="divide-y divide-gray-200 bg-white">
                    {filteredRecords
                      .filter(record => tabType === "All" || record.type === tabType)
                      .map(record => (
                        <div key={record.id} className="hover:bg-gray-50 flex">
                          <div className="px-4 py-4 w-5/12">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-gray-400 mr-3" />
                              <div>
                                <div className="font-medium text-gray-900">{record.title}</div>
                                <div className="text-sm text-gray-500 md:hidden">{record.provider}</div>
                                <div className="text-sm text-gray-500 md:hidden">{record.date}</div>
                              </div>
                            </div>
                          </div>
                          <div className="px-4 py-4 w-3/12 hidden md:flex items-center">{record.provider}</div>
                          <div className="px-4 py-4 w-2/12 hidden md:flex items-center">{record.date}</div>
                          <div className="px-4 py-4 w-1/12 hidden md:flex items-center">{record.size}</div>
                          <div className="px-4 py-4 w-1/12 flex items-center justify-end">
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                
                {filteredRecords.filter(record => tabType === "All" || record.type === tabType).length === 0 && (
                  <div className="py-12 text-center">
                    <FileText className="h-12 w-12 mx-auto text-gray-400" />
                    <h3 className="mt-2 text-sm font-semibold text-gray-900">No records found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {searchTerm ? "Try adjusting your search criteria" : "Get started by uploading a medical record"}
                    </p>
                    <div className="mt-6">
                      <Button className="flex items-center mx-auto">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Record
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
};

export default Records;
