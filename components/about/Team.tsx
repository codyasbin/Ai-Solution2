"use client";
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <motion.section
      className="py-16 bg-purple-50 text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl text-purple-900 font-bold mb-8">Meet Our Team</h2>

        {/* Marquee Container */}
        <div className="overflow-hidden py-4">
          <div className="whitespace-nowrap animate-marquee">
            {/* Team Member 1 */}
            <motion.div
              className="inline-block mx-8 text-center transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img
                src="https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-1/424967863_744172227847861_7687172273595905227_n.jpg?stp=cp6_dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=VvXUQ-J3Lt4Q7kNvgGVoPlt&_nc_zt=24&_nc_ht=scontent.fktm18-1.fna&_nc_gid=AtNAjqlne2OE0u8xStGqWl4&oh=00_AYB0TXBNGxhhmqQjkcH94qqrNar72wHfiAM68LRJjTdJtw&oe=6746081A"
                alt="Jane Doe"
                className="w-40 h-40 rounded-full border-4 border-purple-600 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-purple-700">Jharna Kunwar</h3>
              <p className="text-gray-500">CEO</p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              className="inline-block mx-8 text-center transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <img
                src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg    "
                alt="John Smith"
                className="w-40 h-40 rounded-full border-4 border-purple-600 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-purple-700">John Smith</h3>
              <p className="text-gray-500">CTO</p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              className="inline-block mx-8 text-center transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <img
                src="https://img.freepik.com/free-photo/widely-smiling-businesswoman-working-laptop-sitting-cafe_197531-341.jpg"
                alt="Emily Brown"
                className="w-40 h-40 rounded-full border-4 border-purple-600 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-purple-700">Emily Brown</h3>
              <p className="text-gray-500">Lead AI Engineer</p>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div
              className="inline-block mx-8 text-center transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <img
                src="https://img.freepik.com/free-photo/happy-bearded-man-business-clothes-looking-camera_171337-11392.jpg"
                alt="Michael Lee"
                className="w-40 h-40 rounded-full border-4 border-purple-600 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-purple-700">Michael Lee</h3>
              <p className="text-gray-500">Marketing Director</p>
            </motion.div>

            {/* Add more members here */}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
