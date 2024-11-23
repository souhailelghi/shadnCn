import { motion } from "framer-motion";
import { Calendar, Clock, Trophy, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography ,Box} from "@mui/material";
 import { ArrowForward } from "@mui/icons-material";

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "World-Class Sports Facilities",
      subtitle: "Experience the best in university athletics",
    },
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Train Like a Champion",
      subtitle: "State-of-the-art equipment and expert coaching",
    },
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Join the Community",
      subtitle: "Connect with fellow sports enthusiasts",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const features = [
    {
      icon: Trophy,
      title: "Multiple Sports",
      description:
        "Access to various sports facilities including football, tennis, padel, and volleyball",
    },
    {
      icon: Calendar,
      title: "Easy Booking",
      description:
        "Simple and quick online booking system for all university sports facilities",
    },
    {
      icon: Users,
      title: "Team Building",
      description:
        "Perfect for organizing team sports and recreational activities",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description:
        "Extended facility hours to accommodate different schedules",
    },
  ];

  const sports = [
    { name: "Football", image: "/placeholder.svg?height=400&width=600" },
    { name: "Tennis", image: "/placeholder.svg?height=400&width=600" },
    { name: "Padel", image: "/placeholder.svg?height=400&width=600" },
    { name: "Volleyball", image: "/placeholder.svg?height=400&width=600" },
  ];



  //todo : 
  return (
    <div className="min-h-screen">
    {/* Hero Section with Slider */}
    <div className="relative bg-[#1E3B8B] text-white h-[600px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-6 max-w-4xl mx-auto px-6">
              <motion.h1
                key={`${index}-title`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold mb-6"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                key={`${index}-subtitle`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white/80"
              >
                {slide.subtitle}
              </motion.p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="py-24 bg-[#f8f9fc]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#1E3B8B] mb-4">
            Why Choose Our Facilities?
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience top-notch sports facilities with modern amenities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card sx={{ boxShadow: 3, height: "100%" }}>
                <CardContent sx={{ paddingTop: 6 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      backgroundColor: "#1E3B8B10",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 2,
                    }}
                  >
                    <ArrowForward sx={{ width: 24, height: 24, color: "#1E3B8B" }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* Sports Section */}
    <div className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#1E3B8B] mb-4">
            Available Sports
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our wide range of sports facilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sports.map((sport, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {sport.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="bg-[#1E3B8B] text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Ready to Book Your Sports Facility?</h2>
          <p className="text-lg">
            Sign up and start booking today to access our world-class sports
            facilities.
          </p>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              backgroundColor: "#FF4C00",
              textTransform: "none",
              padding: "12px 24px",
            }}
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </div>
  </div>
  )
}
export default HomePage