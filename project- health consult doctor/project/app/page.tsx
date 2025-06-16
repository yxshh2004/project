'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Heart, 
  Clock, 
  Shield, 
  Smartphone, 
  Calendar, 
  Search, 
  Star,
  MapPin,
  Video,
  MessageCircle,
  Phone,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  Menu,
  X
} from 'lucide-react';

const specialties = [
  'General Medicine',
  'Cardiology',
  'Dermatology',
  'Pediatrics',
  'Orthopedics',
  'Psychiatry',
  'Gynecology',
  'Neurology'
];

const topDoctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    rating: 4.9,
    reviews: 245,
    experience: '15 years',
    location: 'New York, NY',
    avatar: 'https://images.pexels.com/photos/559628/pexels-photo-559628.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    price: 120,
    available: true,
    nextSlot: 'Today 2:30 PM'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Dermatologist',
    rating: 4.8,
    reviews: 189,
    experience: '12 years',
    location: 'Los Angeles, CA',
    avatar: 'https://images.pexels.com/photos/582750/pexels-photo-582750.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    price: 95,
    available: true,
    nextSlot: 'Today 4:00 PM'
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    rating: 4.9,
    reviews: 312,
    experience: '18 years',
    location: 'Chicago, IL',
    avatar: 'https://images.pexels.com/photos/4270371/pexels-photo-4270371.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    price: 110,
    available: false,
    nextSlot: 'Tomorrow 9:00 AM'
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialty: 'Orthopedic Surgeon',
    rating: 4.7,
    reviews: 156,
    experience: '20 years',
    location: 'Houston, TX',
    avatar: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    price: 140,
    available: true,
    nextSlot: 'Today 6:30 PM'
  }
];

const features = [
  {
    icon: Heart,
    title: 'Consult Top Doctors',
    description: 'Choose from a wide network of verified medical professionals across various specialties.'
  },
  {
    icon: Calendar,
    title: 'Book Appointments Instantly',
    description: 'Skip the waiting room and schedule appointments in seconds.'
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Get medical support anytime, anywhere — even on weekends or holidays.'
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    description: 'Your medical data and consultations are protected with advanced encryption.'
  }
];

const stats = [
  { number: '50,000+', label: 'Happy Patients' },
  { number: '2,500+', label: 'Verified Doctors' },
  { number: '99.8%', label: 'Success Rate' },
  { number: '24/7', label: 'Support Available' }
];

export default function Home() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredDoctors = topDoctors.filter(doctor => {
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty.includes(selectedSpecialty);
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">DoctorBuddy</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-600 transition-colors">Find Doctors</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Sign In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#doctors" className="block text-gray-700 hover:text-blue-600 transition-colors">Find Doctors</a>
              <a href="#features" className="block text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Sign In
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  🩺 Trusted by 50,000+ Patients
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Health, Our{' '}
                  <span className="text-blue-600">Priority</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect with certified doctors through secure online consultations. 
                  Get expert medical advice from the comfort of your home, 24/7.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Consultation
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-gray-300">
                  <Video className="h-5 w-5 mr-2" />
                  How It Works
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>100% Secure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Verified Doctors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Consultation</h3>
                    <p className="text-gray-600">Get medical advice in minutes</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <Video className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-blue-900">Video Call</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-green-900">Chat</p>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                      Start Consultation Now
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      Average wait time: <span className="font-medium text-green-600">2 minutes</span>
                    </p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-green-100 p-3 rounded-full animate-pulse">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-100 p-3 rounded-full animate-pulse">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DoctorBuddy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience healthcare like never before with our comprehensive platform designed for your convenience and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Top Doctors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Consult with board-certified physicians who are experts in their fields
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search doctors or specialties..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Tabs value={selectedSpecialty} onValueChange={setSelectedSpecialty} className="w-full md:w-auto">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 bg-white">
                  <TabsTrigger value="All">All</TabsTrigger>
                  <TabsTrigger value="Cardiology">Cardiology</TabsTrigger>
                  <TabsTrigger value="Dermatology">Dermatology</TabsTrigger>
                  <TabsTrigger value="Pediatrics">Pediatrics</TabsTrigger>
                  <TabsTrigger value="Orthopedics">Orthopedics</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Doctor Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="text-center pb-4">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={doctor.avatar} alt={doctor.name} />
                    <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{doctor.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {doctor.specialty}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{doctor.rating}</span>
                      <span className="text-gray-500">({doctor.reviews})</span>
                    </div>
                    <Badge variant={doctor.available ? "default" : "secondary"} className={doctor.available ? "bg-green-100 text-green-800" : ""}>
                      {doctor.available ? "Available" : "Busy"}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{doctor.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Next: {doctor.nextSlot}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-lg font-bold text-gray-900">
                      ${doctor.price}
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700"
                      disabled={!doctor.available}
                    >
                      {doctor.available ? "Book Now" : "Schedule"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with DoctorBuddy in just three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Your Doctor</h3>
              <p className="text-gray-600">
                Browse our network of verified doctors and select the specialist that best fits your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book Appointment</h3>
              <p className="text-gray-600">
                Schedule your consultation at a convenient time. Same-day appointments often available.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start Consultation</h3>
              <p className="text-gray-600">
                Connect with your doctor via video call, phone, or chat. Get prescriptions and follow-up care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of patients who trust DoctorBuddy for their healthcare needs. 
            Start your journey to better health today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Calendar className="h-5 w-5 mr-2" />
              Book Your First Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">DoctorBuddy</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Making healthcare accessible, convenient, and secure for everyone.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Phone className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Video Consultations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Prescription Refills</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Health Records</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Specialist Referrals</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Specialties</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">General Medicine</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cardiology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dermatology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mental Health</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DoctorBuddy. All rights reserved. | Healthcare reimagined for the digital age.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}