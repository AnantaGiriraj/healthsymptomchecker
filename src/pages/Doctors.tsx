
import React, { useState } from "react";
import { Search, MapPin, Phone, Mail, Star, Filter, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  degrees: string;
  experience: number;
  rating: number;
  location: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  availability: string;
}

const mockDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    degrees: "MD, FACC, FAHA",
    experience: 12,
    rating: 4.8,
    location: "New York",
    address: "123 Health St, New York, NY 10001",
    phone: "(212) 555-1234",
    email: "sarah.johnson@example.com",
    image: "https://picsum.photos/seed/doctor1/300/300",
    availability: "Mon, Wed, Fri (9:00 AM - 5:00 PM)"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    degrees: "MD, PhD, FAAN",
    experience: 15,
    rating: 4.9,
    location: "Boston",
    address: "456 Medical Ave, Boston, MA 02108",
    phone: "(617) 555-2345",
    email: "michael.chen@example.com",
    image: "https://picsum.photos/seed/doctor2/300/300",
    availability: "Tue, Thu (8:00 AM - 4:00 PM)"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Dermatology",
    degrees: "MD, FAAD",
    experience: 8,
    rating: 4.7,
    location: "Los Angeles",
    address: "789 Skin Blvd, Los Angeles, CA 90001",
    phone: "(310) 555-3456",
    email: "emily.rodriguez@example.com",
    image: "https://picsum.photos/seed/doctor3/300/300",
    availability: "Mon-Fri (10:00 AM - 6:00 PM)"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    degrees: "MD, FAAOS",
    experience: 20,
    rating: 4.9,
    location: "Chicago",
    address: "321 Bone St, Chicago, IL 60601",
    phone: "(312) 555-4567",
    email: "james.wilson@example.com",
    image: "https://picsum.photos/seed/doctor4/300/300",
    availability: "Mon, Wed, Fri (7:00 AM - 3:00 PM)"
  },
  {
    id: 5,
    name: "Dr. Aisha Patel",
    specialty: "Pediatrics",
    degrees: "MD, FAAP",
    experience: 10,
    rating: 4.8,
    location: "San Francisco",
    address: "654 Child Way, San Francisco, CA 94102",
    phone: "(415) 555-5678",
    email: "aisha.patel@example.com",
    image: "https://picsum.photos/seed/doctor5/300/300",
    availability: "Tue, Thu, Sat (9:00 AM - 5:00 PM)"
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialty: "Psychiatry",
    degrees: "MD, PhD",
    experience: 14,
    rating: 4.6,
    location: "Seattle",
    address: "987 Mind St, Seattle, WA 98101",
    phone: "(206) 555-6789",
    email: "robert.kim@example.com",
    image: "https://picsum.photos/seed/doctor6/300/300",
    availability: "Mon-Thu (11:00 AM - 7:00 PM)"
  }
];

const Doctors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("rating");
  const [doctors, setDoctors] = useState<Doctor[]>(mockDoctors);

  const specialties = [...new Set(mockDoctors.map(doctor => doctor.specialty))];

  const handleSearch = () => {
    let filtered = mockDoctors;
    
    if (searchTerm) {
      filtered = filtered.filter(
        doctor => 
          doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (specialty) {
      filtered = filtered.filter(doctor => doctor.specialty === specialty);
    }
    
    if (sortBy === "rating") {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "experience") {
      filtered = [...filtered].sort((a, b) => b.experience - a.experience);
    }
    
    setDoctors(filtered);
  };

  // Run search on filters change
  React.useEffect(() => {
    handleSearch();
  }, [specialty, sortBy]); // searchTerm is handled with button click

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating) 
              ? "text-yellow-400 fill-yellow-400" 
              : i < rating 
                ? "text-yellow-400 fill-yellow-400 opacity-50" 
                : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-health-50 to-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="glass rounded-2xl p-8 shadow-lg mb-10 animate-fadeIn">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Find a Doctor
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by name, specialty, or location"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 input-focus"
                />
              </div>
            </div>
            
            <div>
              <Select value={specialty} onValueChange={setSpecialty}>
                <SelectTrigger className="input-focus">
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4 text-gray-400" />
                    <SelectValue placeholder="Specialty" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Specialties</SelectItem>
                  {specialties.map((spec) => (
                    <SelectItem key={spec} value={spec}>
                      {spec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="input-focus">
                  <div className="flex items-center">
                    <ArrowUpDown className="mr-2 h-4 w-4 text-gray-400" />
                    <SelectValue placeholder="Sort By" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Top Rated</SelectItem>
                  <SelectItem value="experience">Most Experienced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex justify-center mb-6">
            <Button 
              onClick={handleSearch}
              className="bg-health-600 hover:bg-health-700 text-white px-8"
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.length > 0 ? (
            doctors.map((doctor) => (
              <div 
                key={doctor.id} 
                className="glass rounded-2xl overflow-hidden shadow-lg card-hover animate-fadeIn"
              >
                <div className="relative pb-1/1">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-56 object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                      <p className="text-health-600 font-medium">{doctor.specialty}</p>
                    </div>
                    <div className="bg-health-50 rounded-full px-3 py-1 text-xs font-medium text-health-600">
                      {doctor.experience} Yrs
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-2">{doctor.degrees}</p>
                  
                  <div className="flex items-center mb-4">
                    {renderStars(doctor.rating)}
                    <span className="ml-2 text-sm text-gray-600">{doctor.rating}</span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0 mr-2" />
                      <p className="text-sm text-gray-600">{doctor.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-400 mr-2" />
                      <p className="text-sm text-gray-600">{doctor.phone}</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-gray-400 mr-2" />
                      <p className="text-sm text-gray-600">{doctor.email}</p>
                    </div>
                  </div>
                  
                  <div className="bg-health-50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-700 font-medium">Available:</p>
                    <p className="text-sm text-gray-600">{doctor.availability}</p>
                  </div>
                  
                  <Button className="w-full bg-health-600 hover:bg-health-700 text-white btn-effect">
                    Contact Now
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 text-lg">No doctors found matching your search criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSpecialty("");
                  setSortBy("rating");
                  setDoctors(mockDoctors);
                }}
                variant="outline" 
                className="mt-4"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Doctors;
