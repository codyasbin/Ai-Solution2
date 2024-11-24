"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    role: "CEO, RetailCo",
    image: "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
    feedback:
      "AI-Solution helped us automate workflows, saving countless hours every week. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Asbin Magar",
    role: "Dev, TechWave",
    image: "https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-1/433938496_3655517964766456_8135263665493237232_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=oRaIM6qYG2gQ7kNvgGzmctJ&_nc_zt=24&_nc_ht=scontent.fktm18-1.fna&_nc_gid=AA2spGadsgbBjjVWBxXfaGo&oh=00_AYDA2WEBIrLXOMoUZff3CIYOPtIZpe-nWHHTUxRFtYnhMg&oe=674616E0",
    feedback:
      "Partnering with AI-Solution was the best decision for our startup. Their solutions streamlined our processes and gave us a competitive edge in the market.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    role: "CFO, FinAnalytics",
    image: "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
    feedback:
      "The predictive analytics from AI-Solution transformed our decision-making process and boosted profits!",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Emily Brown",
    role: "CTO, HealthTech",
    image: "https://img.freepik.com/free-photo/portrait-young-pretty-positive-girl-smiling_176420-9609.jpg",
    feedback:
      "AI-Solution's healthcare optimization tools have revolutionized our patient management system.",
    rating: 5,

  },
  
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll functionality using useEffect
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 3000); // Change every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <motion.section
      className="relative h-screen bg-gradient-to-b from-purple-900 to-purple-950 text-white py-16 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center">What Our Clients Say</h2>
        <p className="text-gray-300 text-center mt-4">
          Trusted by businesses across industries to deliver excellence.
        </p>

        {/* Main Testimonial Display */}
        <div className="relative h-96 mt-16 flex justify-center items-center">
          {/* Supporting Testimonials (Left) */}
          <motion.div
            className="absolute left-10 hidden md:block bg-white p-4 rounded-full shadow-md transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={
                testimonials[(activeIndex + testimonials.length - 1) % testimonials.length].image
              }
              alt={
                testimonials[(activeIndex + testimonials.length - 1) % testimonials.length].name
              }
              className="w-16 h-16 rounded-full mx-auto border-4 border-purple-600"
            />
            <p className="mt-2 text-gray-800 font-semibold text-center">
              {
                testimonials[(activeIndex + testimonials.length - 1) % testimonials.length].name
              }
            </p>
            <p className="text-sm text-gray-500 text-center">
              {
                testimonials[(activeIndex + testimonials.length - 1) % testimonials.length].role
              }
            </p>
          </motion.div>

          {/* Active Testimonial */}
          <motion.div
            key={testimonials[activeIndex].id}
            className="bg-white p-8 rounded-full shadow-lg text-center w-96 transform hover:scale-110 transition-all duration-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="w-20 h-20 rounded-full mx-auto border-4 border-purple-600"
            />
            <p className="mt-6 italic text-gray-700">
              "{testimonials[activeIndex].feedback}"
            </p>
            <div className="mt-4 flex justify-center text-yellow-500">
              {[...Array(Math.floor(testimonials[activeIndex].rating))].map(
                (_, i) => (
                  <span key={i}>★</span>
                )
              )}
              {testimonials[activeIndex].rating % 1 !== 0 && (
                <span className="text-yellow-300">★</span> // Half-star
              )}
            </div>
            <p className="mt-4 font-bold">{testimonials[activeIndex].name}</p>
            <p className="text-sm text-gray-500">{testimonials[activeIndex].role}</p>
          </motion.div>

          {/* Supporting Testimonials (Right) */}
          <motion.div
            className="absolute right-10 hidden md:block bg-white p-4 rounded-full shadow-md transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={testimonials[(activeIndex + 1) % testimonials.length].image}
              alt={testimonials[(activeIndex + 1) % testimonials.length].name}
              className="w-16 h-16 rounded-full mx-auto border-4 border-purple-600"
            />
            <p className="mt-2 text-gray-800 font-semibold text-center">
              {testimonials[(activeIndex + 1) % testimonials.length].name}
            </p>
            <p className="text-sm text-gray-500 text-center">
              {testimonials[(activeIndex + 1) % testimonials.length].role}
            </p>
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-center space-x-4">
          <button
            onClick={prevTestimonial}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full shadow-md"
          >
            Prev
          </button>
          <button
            onClick={nextTestimonial}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </motion.section>
  );
}
