'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FileBarChart, TrendingUp, PieChart as PieChartIcon, Activity, Brain, Lightbulb } from "lucide-react";

const sampleTimeSeriesData = [
  { month: 'Jan', value: 1000 },
  { month: 'Feb', value: 2000 },
  { month: 'Mar', value: 1500 },
  { month: 'Apr', value: 3000 },
  { month: 'May', value: 2500 },
  { month: 'Jun', value: 4000 },
];

const sampleDistributionData = [
  { category: 'A', value: 30 },
  { category: 'B', value: 45 },
  { category: 'C', value: 25 },
];

const sampleTrendData = [
  { date: '2023-01', actual: 4000, predicted: 4200 },
  { date: '2023-02', actual: 4500, predicted: 4300 },
  { date: '2023-03', actual: 4200, predicted: 4400 },
  { date: '2023-04', actual: 4800, predicted: 4600 },
  { date: '2023-05', actual: 4600, predicted: 4800 },
  { date: '2023-06', actual: 5000, predicted: 5000 },
];

const analysisCards = [
  {
    title: "Time Series Analysis",
    subtitle: "Monthly Data Trends",
    icon: TrendingUp,
    points: [
      "Consistent upward trend observed",
      "Seasonal patterns identified",
      "Peak performance in June"
    ],
    chart: (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={sampleTimeSeriesData}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
          <XAxis 
            dataKey="month"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            axisLine={{ stroke: 'hsl(var(--muted-foreground))' }}
            tickLine={{ stroke: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            axisLine={{ stroke: 'hsl(var(--muted-foreground))' }}
            tickLine={{ stroke: 'hsl(var(--muted-foreground))' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--background))',
              borderColor: 'hsl(var(--border))'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="hsl(var(--chart-1))" 
            fill="url(#colorValue)"
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  },
  {
    title: "Distribution Analysis",
    subtitle: "Category Distribution",
    icon: PieChartIcon,
    points: [
      "Category B shows highest proportion",
      "Even distribution across segments",
      "Minimal outliers detected"
    ],
    chart: (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={sampleDistributionData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="hsl(var(--chart-2))"
            paddingAngle={5}
            dataKey="value"
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--background))',
              borderColor: 'hsl(var(--border))'
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    )
  },
  {
    title: "Trend Comparison",
    subtitle: "Actual vs Predicted Values",
    icon: Activity,
    points: [
      "Strong correlation between actual and predicted",
      "Prediction accuracy improving over time",
      "Minimal deviation from expected values"
    ],
    chart: (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sampleTrendData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
          <XAxis 
            dataKey="date"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            axisLine={{ stroke: 'hsl(var(--muted-foreground))' }}
            tickLine={{ stroke: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            axisLine={{ stroke: 'hsl(var(--muted-foreground))' }}
            tickLine={{ stroke: 'hsl(var(--muted-foreground))' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--background))',
              borderColor: 'hsl(var(--border))'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="actual" 
            stroke="hsl(var(--chart-3))" 
            activeDot={{ r: 8 }}
          />
          <Line 
            type="monotone" 
            dataKey="predicted" 
            stroke="hsl(var(--chart-4))" 
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }
];

const keyInsights = [
  "Strong positive correlation between variables",
  "Seasonal patterns identified in time series data",
  "Distribution shows normal characteristics",
  "Prediction model shows 95% accuracy",
  "Outliers detected and handled appropriately",
  "Significant trends observed in monthly data"
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
            <Card key={index} className="w-full bg-secondary/50 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-2">
                      {card.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{card.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-foreground/90">Key Observations</h3>
                    <ul className="space-y-2">
                      {card.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card/50 rounded-lg p-4">
                    {card.chart}
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
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
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