"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  PieChart as PieChartIcon,
  Activity,
  Lightbulb,
} from "lucide-react";

const analysisCards = [
  {
    title: "Statistical Analysis",
    subtitle:
      "Analysis of multiple statistical parameters like mean and median, using box plot",
    icon: TrendingUp,
    points: [
      "Consistent upward trend observed",
      "Seasonal patterns identified",
      "Peak performance in June",
    ],
    image: "/images/analysis/box-plot.jpg", // Replace with actual image path
  },
  {
    title: "Distribution Analysis",
    subtitle: "Category Distribution",
    icon: PieChartIcon,
    points: [
      "Category B shows highest proportion",
      "Even distribution across segments",
      "Minimal outliers detected",
    ],
    image: "/images/analysis/pie-chart.jpg", // Replace with actual image path
  },
  {
    title: "Trend Comparison",
    subtitle: "Actual vs Predicted Values",
    icon: Activity,
    points: [
      "Strong correlation between actual and predicted",
      "Prediction accuracy improving over time",
      "Minimal deviation from expected values",
    ],
    image: "/images/analysis/cluster.jpg", // Replace with actual image path
  },
  {
    title: "Trend Comparison",
    subtitle: "Actual vs Predicted Values",
    icon: Activity,
    points: [
      "Strong correlation between actual and predicted",
      "Prediction accuracy improving over time",
      "Minimal deviation from expected values",
    ],
    image: "/images/analysis/countour.jpg", // Replace with actual image path
  },
];

const keyInsights = [
  "Strong positive correlation between variables",
  "Seasonal patterns identified in time series data",
  "Distribution shows normal characteristics",
  "Prediction model shows 95% accuracy",
  "Outliers detected and handled appropriately",
  "Significant trends observed in monthly data",
];

export default function AnalysisPage() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-chart-2 to-chart-4">
          Data Analysis Results
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-[700px]">
          Comprehensive analysis of patterns and trends in the dataset
        </p>
      </div>

      <div className="space-y-8">
        {analysisCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card
              key={index}
              className="w-full bg-secondary/50 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-2">
                      {card.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-foreground/90">
                      Key Observations
                    </h3>
                    <ul className="space-y-2">
                      {card.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card/50 rounded-lg p-4 flex justify-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        <Card className="w-full bg-secondary/50 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-2">
                Key Insights and Observations
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyInsights.map((insight, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {insight}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
