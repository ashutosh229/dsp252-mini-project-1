"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const clusters = [
  {
    title: "K-Means Clustering",
    image: "/images/clusters/k-means.jpg",
    description:
      "K-Means is a centroid-based clustering technique that partitions data into K clusters. It works best with well-separated clusters.",
  },
  {
    title: "DBSCAN Clustering",
    image: "/images/clusters/dbscan.jpg",
    description:
      "DBSCAN groups together closely packed points while marking outliers. It does not require specifying the number of clusters beforehand.",
  },
  {
    title: "Hierarchial Clustering",
    image: "/images/clusters/heirarchial.jpg",
    description:
      "Hierarchical clustering builds a tree of clusters, either through a bottom-up (agglomerative) or top-down (divisive) approach.",
  },
  {
    title: "Dendogram",
    image: "/images/clusters/dendogram.jpg",
    description:
      "Hierarchical clustering builds a tree of clusters, either through a bottom-up (agglomerative) or top-down (divisive) approach.",
  },
];

export default function ClusteringPage() {
  return (
    <motion.div
      className="container mx-auto p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl font-bold text-center">Clustering Analysis</h1>
      <p className="text-muted-foreground text-center mb-6">
        Exploring different clustering techniques for pattern recognition in
        data.
      </p>

      {/* Clustering Cards */}
      <div className="flex flex-col space-y-6">
        {clusters.map((cluster, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>{cluster.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full flex justify-center">
                  <img
                    src={cluster.image}
                    alt={cluster.title}
                    className="max-w-full h-auto rounded-lg border"
                  />
                </div>
                <p className="mt-4">{cluster.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
