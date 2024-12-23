"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function CaseStudy() {
  return (
    <>
      {/* // Case Studies Section for the Homepage */}
      <motion.section
      className="bg-white py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-neutral-800 text-center">
          Our Success Stories
        </h2>
        <p className="text-neutral-600 text-center mt-4">
          Discover how we've transformed businesses with our AI-powered
          solutions.
        </p>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {/* Card 1 */}
          <motion.div
            className="bg-neutral-100 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQq5z869BKbWgQCQ-cRQML2diEi9w-RpKgg&s"
              alt="Retail Automation"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-600">
                Retail Automation
              </h3>
              <p className="text-neutral-700 mt-4">
                Revolutionized inventory management for leading retailers,
                reducing stock shortages by 30%.
              </p>
              <Link
                href="about"
                className="inline-block mt-4 text-neutral-600 hover:underline"
              >
                Read More
              </Link>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-neutral-100 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://www.pacificdataintegrators.com/hubfs/a-futuristic-and-sophisticated-scene-showcases-the-hQ3gba7oTg-WwCn-D0mnsg-N5J0vNtOTLSLPxbDI-3EUQ%20%281%29.jpeg"
              alt="Financial Analytics"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-600">
                Financial Analytics
              </h3>
              <p className="text-neutral-700 mt-4">
                Delivered AI-powered analytics that helped businesses make
                smarter investment decisions.
              </p>
              <Link
                href="about"
                className="inline-block mt-4 text-neutral-600 hover:underline"
              >
                Read More
              </Link>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-neutral-100 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://healthsnap.io/wp-content/uploads/2023/06/22ba738b-162e-42b7-90a3-f1830ba914cf.png"
              alt="Healthcare Optimization"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-600">
                Healthcare Optimization
              </h3>
              <p className="text-neutral-700 mt-4">
                Improved patient care efficiency by 40% through AI-driven
                healthcare solutions.
              </p>
              <Link
                href="about"
                className="inline-block mt-4 text-neutral-600 hover:underline"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </>
  );
}
