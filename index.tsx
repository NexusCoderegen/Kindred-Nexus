
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleCardClick = (title) => {
    const routes = {
      "SEO Domination": "/seo-domination",
      "Social Media Growth": "/social-media-growth",
      "Lead Generation": "/lead-generation"
    };
    router.push(routes[title]);
  };

  return (
    <div className="min-h-screen bg-[#0d1b1e] text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold tracking-tight mb-4 text-gray-100">Kindred Nexus</h1>
        <p className="text-lg text-gray-300">Marketing Group | Bridging Digital Precision with Real-World Impact</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {["SEO Domination", "Social Media Growth", "Lead Generation"].map((title, i) => (
          <motion.div
            key={i}
            className="h-60 cursor-pointer"
            onClick={() => handleCardClick(title)}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <Card className="bg-[#1e2c2f] hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-100">{title}</h2>
                <p className="text-sm text-gray-400">
                  Cutting-edge solutions tailored to amplify your brand's digital footprint.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-center mt-20"
      >
        <Button className="bg-maroon-700 hover:bg-maroon-800 text-white text-lg px-8 py-4 rounded-xl">
          Schedule a Free Strategy Call
        </Button>
      </motion.div>
    </div>
  );
}
