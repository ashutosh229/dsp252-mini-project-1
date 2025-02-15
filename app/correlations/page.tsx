"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const correlations = [
  {
    title: "Correlation Heatmap 1",
    image: "/images/correlations/correlations-1.jpg",
    insights:
      "Higher heart rates are strongly correlated with increased panic attack frequency. Managing stress and heart rate may help reduce episodes.",
  },
  {
    title: "Correlation Heatmap 2",
    image: "/images/correlations/correlations-2.jpg",
    insights:
      "Individuals with fewer sleep hours tend to report higher anxiety levels. Prioritizing sleep can improve mental well-being.",
  },
  {
    title: "Cross Correlations 1",
    image: "/images/correlations/cross-correlations-1.jpg",
    insights:
      "Excessive caffeine consumption is linked to heightened panic symptoms, indicating that reducing intake could be beneficial.",
  },
  {
    title: "Cross Correlations 2",
    image: "/images/correlations/cross-correlations-2.jpg",
    insights:
      "Excessive caffeine consumption is linked to heightened panic symptoms, indicating that reducing intake could be beneficial.",
  },
];

export default function CorrelationsPage() {
  return (
    <motion.div
      className="container mx-auto p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl font-bold text-center">Correlations Analysis</h1>
      <p className="text-muted-foreground text-center mb-6">
        Exploring relationships between key factors affecting panic attacks.
      </p>

      {/* Correlation Cards - Now displayed vertically */}
      <div className="flex flex-col space-y-6">
        {correlations.map((correlation, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>{correlation.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full flex justify-center">
                  <img
                    src={correlation.image}
                    alt={correlation.title}
                    className="max-w-full h-auto rounded-lg border"
                  />
                </div>
                <p className="mt-4">
                  <strong>Insights:</strong> {correlation.insights}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
