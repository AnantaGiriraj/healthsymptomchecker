
import React from "react";
import { Phone, Mail, MapPin, Award, Book, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Doctor {
  id: number;
  name: string;
  photo: string;
  specialization: string;
  degrees: string;
  experience: string;
  address: string;
  phone: string;
  email: string;
  availability: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Aman Kumar",
    photo: "/doc-1.png",
    specialization: "Cardiologist",
    degrees: "MD, FACC",
    experience: "15 years",
    address: "Chandigarh Sector 36 'B'",
    phone: "+91 82234 43848",
    email: "dr.amankumar@gmail.com",
    availability: "Mon-Fri: 9AM-5PM"
  },
  {
    id: 2,
    name: "Dr. Prince Kumar",
    photo: "/doc-4.jpg",
    specialization: "Neurologist",
    degrees: "MD, PhD",
    experience: "12 years",
    address: "Chandigarh sector 15, Medical Plaza",
    phone: "+91 56546 12345",
    email: "dr.princekumar@gmail.com",
    availability: "Mon-Thu: 8AM-6PM"
  },
  {
    id: 3,
    name: "Dr. Raj Agrawal",
    photo: "/doc-3.jpg",
    specialization: "Dermatologist",
    degrees: "MD, FAAD",
    experience: "10 years",
    address: "Sector 22, Health Building",
    phone: "+91 52346 78933",
    email: "dr.rajaggrawal@gmail.com",
    availability: "Tue-Sat: 10AM-4PM"
  },
  {
    id: 4,
    name: "Dr. Ajay Sharma",
    photo: "/doc-2.png",
    specialization: "Gastroenterologist",
    degrees: "MD, FACG",
    experience: "18 years",
    address: "Sector 23, Medical Complex",
    phone: "+91 56789 12345",
    email: "dr.ajaysharma@gmail.com",
    availability: "Mon-Wed, Fri: 9AM-5PM"
  },
  {
    id: 5,
    name: "Dr. Pranav Mahajan",
    photo: "/doc-6.png",
    specialization: "Endocrinologist",
    degrees: "MD, FACE",
    experience: "14 years",
    address: "Sector 38, Health Campus",
    phone: "+91",
    email: "dr.amina@healthapp.com",
    availability: "Mon, Wed, Thu: 8AM-6PM"
  }
];

const Doctors: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white bg-[url('/images/doctors-bg.jpg')] bg-cover bg-fixed bg-opacity-25">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 animate-fadeIn">
          Contact Our Specialists
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Our network of experienced healthcare professionals is ready to help you.
          Reach out to a specialist directly for personalized care.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div 
              key={doctor.id} 
              className="glass rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn"
            >
              <div className="relative">
                <img 
                  src={doctor.photo} 
                  alt={doctor.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute top-4 right-4 bg-health-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {doctor.specialization}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
                <div className="flex items-center mb-2">
                  <Award className="h-4 w-4 text-health-500 mr-2" />
                  <span className="text-gray-600">{doctor.degrees}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Book className="h-4 w-4 text-health-500 mr-2" />
                  <span className="text-gray-600">{doctor.experience} experience</span>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-health-500 mr-2" />
                  <span className="text-gray-600">{doctor.address}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="h-4 w-4 text-health-500 mr-2" />
                  <span className="text-gray-600">{doctor.phone}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Mail className="h-4 w-4 text-health-500 mr-2" />
                  <span className="text-gray-600">{doctor.email}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Clock className="h-4 w-4 text-health-500 mr-2" />
                  <span className="text-gray-600">{doctor.availability}</span>
                </div>
                
                <Button className="w-full bg-health-600 hover:bg-health-700 text-white btn-effect">
                  Schedule Appointment
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
