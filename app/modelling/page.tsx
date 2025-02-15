import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const dataCards = [
  {
    title: "Dataset Size",
    content:
      "The dataset contains **10,000** samples, spanning multiple categories.",
    indicator: "Data preprocessed successfully.",
  },
  {
    title: "Feature Count",
    content: "Each sample has **20** features extracted using PCA.",
    indicator: "Dimensionality reduction applied.",
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
    <div className="container mx-auto p-6 space-y-6">
      {/* Data Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataCards.map((card, index) => (
          <Card key={index} className="p-4">
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
        ))}
      </div>

      {/* Model Cards */}
      <div className="space-y-4">
        {modelCards.map((model, index) => (
          <Card key={index} className="p-6">
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
        ))}
      </div>

      {/* Comparison Cards */}
      <div className="space-y-4">
        {comparisonCards.map((comparison, index) => (
          <Card key={index} className="p-6">
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
        ))}
      </div>

      {/* Key Insights & Conclusion */}
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Key Insights & Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Random Forest performed the best overall, especially on noisy data.
            Logistic Regression is a viable choice for simpler datasets but
            struggles with high-dimensionality. Future improvements can be made
            by tuning hyperparameters or experimenting with neural networks.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
