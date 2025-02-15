"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { motion } from "framer-motion";

const dataCards = [
  {
    title: "Dataset Size",
    content:
      "The dataset contains **12,000** samples, spanning multiple categories.",
    indicator: "Data preprocessed successfully.",
  },
  {
    title: "Feature Count",
    content: "Each sample has **20** features",
    indicator: "Original Dataset",
  },
];

const modelCards = [
  {
    name: "Logistic Regression",
    hyperparameters: "C=1.0, max_iter=100",
    accuracy: "85.6%",
    description: "A simple linear model for classification.",
    analysisTitle: "Performance on Panic Attack Detection",
    analysisDesc: "Evaluating model accuracy on test data.",
    results: "Performed well on balanced datasets.",
    insights: "Struggles with high-dimensional data.",
  },
  {
    name: "Random Forest",
    hyperparameters: "n_estimators=100, max_depth=10",
    accuracy: "91.2%",
    description: "An ensemble learning method using decision trees.",
    analysisTitle: "Robust Classification Performance",
    analysisDesc: "Handles non-linear relationships effectively.",
    results: "Outperformed other models on noisy data.",
    insights: "More computationally expensive.",
  },
  {
    name: "Gradient Boosting",
    hyperparameters: "n_estimators=100, max_depth=10",
    accuracy: "91.2%",
    description: "An ensemble learning method using decision trees.",
    analysisTitle: "Robust Classification Performance",
    analysisDesc: "Handles non-linear relationships effectively.",
    results: "Outperformed other models on noisy data.",
    insights: "More computationally expensive.",
  },
  {
    name: "Support Vector Machines (SVR)",
    hyperparameters: "n_estimators=100, max_depth=10",
    accuracy: "91.2%",
    description: "An ensemble learning method using decision trees.",
    analysisTitle: "Robust Classification Performance",
    analysisDesc: "Handles non-linear relationships effectively.",
    results: "Outperformed other models on noisy data.",
    insights: "More computationally expensive.",
  },
  {
    name: "XGBoost",
    hyperparameters: "n_estimators=100, max_depth=10",
    accuracy: "91.2%",
    description: "An ensemble learning method using decision trees.",
    analysisTitle: "Robust Classification Performance",
    analysisDesc: "Handles non-linear relationships effectively.",
    results: "Outperformed other models on noisy data.",
    insights: "More computationally expensive.",
  },
];

const comparisonCards = [
  {
    title: "Model Performance Comparison",
    description: "Comparison of accuracy across different models.",
    image: "/images/model_comparison.png",
    insights: "Random Forest outperforms Logistic Regression.",
  },
];

export default function ModellingPage() {
  return (
    <motion.div
      className="container mx-auto p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Data Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataCards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="p-4 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  dangerouslySetInnerHTML={{
                    __html: card.content.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>"),
                  }}
                />
                <p className="text-sm text-muted-foreground mt-2">
                  {card.indicator}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Model Cards */}
      <div className="space-y-4">
        {modelCards.map((model, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>{model.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Hyperparameters:</strong> {model.hyperparameters}
                </p>
                <p>
                  <strong>Accuracy:</strong> {model.accuracy}
                </p>
                <p>
                  <strong>Description:</strong> {model.description}
                </p>
                <p>
                  <strong>Analysis:</strong> {model.analysisTitle} -{" "}
                  {model.analysisDesc}
                </p>
                <p>
                  <strong>Results:</strong> {model.results}
                </p>
                <p>
                  <strong>Insights:</strong> {model.insights}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Comparison Cards */}
      <div className="space-y-4">
        {comparisonCards.map((comparison, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>{comparison.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{comparison.description}</p>
                <div className="w-full flex justify-center">
                  <img
                    src={comparison.image}
                    alt="Comparison Graph"
                    className="max-w-full h-auto rounded-lg border"
                  />
                </div>
                <p className="mt-4">
                  <strong>Insights:</strong> {comparison.insights}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Key Insights & Conclusion */}
      <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
        <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle>Key Insights & Conclusion</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Random Forest performed the best overall, especially on noisy
              data. Logistic Regression is a viable choice for simpler datasets
              but struggles with high-dimensionality. Future improvements can be
              made by tuning hyperparameters or experimenting with neural
              networks.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
