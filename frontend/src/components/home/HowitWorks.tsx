"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DollarSign,
  Calculator,
  PiggyBank,
  Home,
  Key,
  Briefcase,
} from "lucide-react";

const categories = ["Buying", "Renting", "Selling"];

const contentMap = {
  Buying: [
    {
      title: "Find out how much you can afford",
      description:
        "We'll help you estimate your budget range. Save to your buyer profile to help in your search.",
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      action: "Try our affordability calculator",
      link: "#affordability-calculator",
    },
    {
      title: "Understand your monthly costs",
      description:
        "Get an in-depth look at what your monthly and closing costs will look like based on your financial situation and goals.",
      icon: <Calculator className="h-6 w-6 text-primary" />,
      action: "Try our mortgage calculator",
      link: "#mortgage-calculator",
    },
    {
      title: "Get help with your down payment",
      description:
        "You may be able to buy a home with just 3.5% down. Saving for that can be challenging—down payment assistance programs can help.",
      icon: <PiggyBank className="h-6 w-6 text-primary" />,
      action: "Find down payment help",
      link: "#down-payment-help",
    },
  ],
  Renting: [
    {
      title: "Explore rental options",
      description:
        "Browse through our extensive list of rental properties to find your perfect home.",
      icon: <Home className="h-6 w-6 text-primary" />,
      action: "Start your rental search",
      link: "#rental-search",
    },
    {
      title: "Understand rental costs",
      description:
        "Get a clear picture of all costs associated with renting, including security deposits and monthly utilities.",
      icon: <Calculator className="h-6 w-6 text-primary" />,
      action: "Estimate rental costs",
      link: "#rental-cost-estimator",
    },
    {
      title: "Learn about tenant rights",
      description:
        "Familiarize yourself with your rights as a tenant and what to expect from your landlord.",
      icon: <Key className="h-6 w-6 text-primary" />,
      action: "Read tenant rights guide",
      link: "#tenant-rights",
    },
  ],
  Selling: [
    {
      title: "Estimate your home's value",
      description:
        "Get an accurate estimate of your home's current market value to help you set the right price.",
      icon: <Home className="h-6 w-6 text-primary" />,
      action: "Get a home value estimate",
      link: "#home-value-estimator",
    },
    {
      title: "Prepare your home for sale",
      description:
        "Learn about the steps you can take to make your home more attractive to potential buyers.",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      action: "Read home preparation guide",
      link: "#home-prep-guide",
    },
    {
      title: "Understand selling costs",
      description:
        "Get a clear picture of all costs associated with selling your home, including agent fees and closing costs.",
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      action: "Estimate selling costs",
      link: "#selling-cost-calculator",
    },
  ],
};

export default function HowItWorks() {
  const [activeCategory, setActiveCategory] = useState("Buying");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">Discover how we can help</h2>
      <Tabs
        value={activeCategory}
        onValueChange={setActiveCategory}
        className="w-full"
      >
        <TabsList className="mb-8">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="px-4 py-2 text-sm font-medium"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {contentMap[category].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <a
                      href={item.link}
                      className="text-primary hover:underline"
                    >
                      {item.action}
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
