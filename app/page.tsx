import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Database,
  FileSearch,
  Brain,
  ChartBar,
  LineChart,
  Filter,
} from "lucide-react";

const analysisSteps = [
  {
    title: "Data Collection",
    subtitle: "Gathering raw data for analysis",
    icon: Database,
    subsections: [
      {
        title: "Data Sources",
        points: ["Internet", "Kaggle", "Github"],
      },
    ],
  },
  {
    title: "Data Preprocessing",
    subtitle: "Cleaning and preparing the data",
    icon: Filter,
    subsections: [
      {
        title: "Cleaning Steps",
        points: [
          "Numerical Data Scaling",
          "Categorical Data Encoding",
          "Missing Value Treatment",
          "Outlier Detection and Treatment",
        ],
      },
    ],
  },
  {
    title: "Exploratory Analysis",
    subtitle: "Understanding data patterns",
    icon: FileSearch,
    subsections: [
      {
        title: "Analysis Methods",
        points: [
          "Columns Analysis",
          "Statistical Analysis",
          "Distribution Analysis",
          "Pattern Recognition",
          "Trend Identification",
        ],
      },
    ],
  },
  {
    title: "Data Modeling",
    subtitle: "Building predictive models",
    icon: Brain,
    subsections: [
      {
        title: "Model Types",
        points: [
          "Regression Models",
          "Classification Models",
          "Clustering Algorithms",
        ],
      },
    ],
  },
  {
    title: "Visualization",
    subtitle: "Creating insightful visualizations",
    icon: ChartBar,
    subsections: [
      {
        title: "Chart Types",
        points: [
          "Interactive Plots",
          "Statistical Graphs",
          "Correlation Maps",
          "Cluster Plots",
        ],
      },
    ],
  },
  {
    title: "Results & Insights",
    subtitle: "Drawing meaningful conclusions",
    icon: LineChart,
    subsections: [
      {
        title: "Key Findings",
        points: [
          "Pattern Discovery",
          "Predictive Insights",
          "Future Directions",
        ],
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-chart-2 to-chart-4">
          Data Analysis Process
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-[700px]">
          Comprehensive Analysis of the Data
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {analysisSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-secondary/50 backdrop-blur-sm border-primary/20"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-2">
                      {step.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {step.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="mt-4">
                    <h3 className="font-semibold mb-2 text-foreground/90">
                      {subsection.title}
                    </h3>
                    <ul className="space-y-1">
                      {subsection.points.map((point, pointIndex) => (
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
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
