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
    indicator: "No dimensions are reduced for preventing loss of data",
  },
];

const modelCards = [
  {
    name: "Random Forest",
    hyperparameters: "n_estimators=100",
    r2_score: "0.4685",
    description: "An ensemble learning method using decision trees.",
    analysisTitle: "Regression solution for getting Panic Score",
    // analysisDesc: "Feature importance ranking",
    results: "Ranked the features in the order of their importance",
    // insights: "More computationally expensive.",
  },
  {
    name: "Gradient Boosting",
    hyperparameters: "n_estimators=100, learning_rate=0.01",
    r2_score: "0.4938",
    description:
      "Gradient Boosting is an ensemble machine learning technique used for both classification and regression tasks. It builds a strong predictive model by combining multiple weak learners (typically decision trees) in a sequential manner. Each new tree corrects the mistakes of the previous ones.",
    analysisTitle: "Regression",
    // analysisDesc: "Handles non-linear relationships effectively.",
    results:
      "Handled the non-linear relationships between the data points effectively",
    // insights: "More computationally expensive.",
  },
  {
    name: "Support Vector Machines (SVR)",
    hyperparameters: "C=0.1, kernel=linear",
    r2_score: "0.3960",
    description:
      "Support Vector Regression (SVR) is a type of regression model based on Support Vector Machines (SVMs). Unlike traditional regression models that minimize error directly, SVR aims to find a function that fits the data within a certain margin (epsilon, 𝜀), while ignoring small errors.",
    analysisTitle: "Regression",
    // analysisDesc: "Can model non-linear relationships using kernels",
    results: "Modelled the non-linear relationships using kernels",
    // insights: "More computationally expensive.",
  },
  {
    name: "XGBoost",
    hyperparameters: "n_estimators=100, learning_rate=0.1",
    r2_score: "0.4790",
    description:
      "XGBoost is a powerful machine learning algorithm based on Gradient Boosting, designed for speed and performance. It is widely used in classification, regression, and ranking problems due to its efficiency and accuracy.",
    analysisTitle: "Regression",
    // analysisDesc: "Fast and efficient",
    results: "The fastest model among all",
    // insights: "More computationally expensive.",
  },
];

const comparisonCards = [
  {
    title: "Model Performance Comparison",
    description: "Comparison of scores across different models.",
    image: "/images/modelling/comparison-plot.jpg",
    insights:
      "Gradient Boosting comes out to be the most powerful regression model",
  },
  {
    title: "Feature Importance Analysis",
    description:
      "Comparison of features in terms of their importance to predict the panic score",
    image: "/images/modelling/feature-importance.jpg",
    insights: "Region cluster is the most important feature",
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
                  <strong>Accuracy:</strong> {model.r2_score}
                </p>
                <p>
                  <strong>Description:</strong> {model.description}
                </p>
                <p>
                  <strong>Analysis:</strong> {model.analysisTitle}
                  {/* {model.analysisDesc} */}
                </p>
                <p>
                  <strong>Results:</strong> {model.results}
                </p>
                {/* <p>
                  <strong>Insights:</strong> {model.insights}
                </p> */}
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
