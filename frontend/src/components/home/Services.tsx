import React from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      imageUrl: "/images/propertie1.jpg",
      price: 250000,
      beds: 3,
      baths: 2,
      sqft: 1500,
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
      isNew: true,
    },
    {
      imageUrl: "/images/propertie2.jpg",
      price: 350000,
      beds: 4,
      baths: 3,
      sqft: 2000,
      address: "456 Oak Ave",
      city: "Somewhereville",
      state: "NY",
      zipCode: "67890",
    },
    {
      imageUrl: "/images/propertie3.jpg",
      price: 180000,
      beds: 2,
      baths: 1,
      sqft: 1000,
      address: "789 Pine Rd",
      city: "Smalltown",
      state: "TX",
      zipCode: "54321",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto max-w-[1200px] px-4 py-8 mt-20">
      {services.map((service, index) => (
        <Card
          key={index}
          className="w-full max-w-sm mx-auto overflow-hidden transition-shadow duration-300 hover:shadow-lg"
        >
          <CardHeader className="p-0">
            <div className="relative">
              <img
                src={service.imageUrl}
                alt={`Property ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              {service.isNew && (
                <Badge className="absolute top-2 left-2 bg-blue-500 hover:bg-blue-600">
                  New
                </Badge>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-white hover:text-red-500 transition-colors duration-200"
              >
                <Heart className="h-6 w-6" />
                <span className="sr-only">Add to favorites</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-2xl font-bold text-gray-800">
                ${service.price.toLocaleString()}
              </h2>
              <Badge variant="secondary" className="text-xs font-semibold">
                Single-Family Home
              </Badge>
            </div>
            <p className="text-gray-600 mb-4">
              {service.beds} bed • {service.baths} bath •{" "}
              {service.sqft.toLocaleString()} sqft
            </p>
            <p className="text-sm text-gray-500 truncate">{service.address}</p>
            <p className="text-sm text-gray-500">
              {service.city}, {service.state} {service.zipCode}
            </p>
          </CardContent>
          <CardFooter className="p-4 bg-gray-50">
            <Button className="w-full bg-main-color hover:bg-[#ba2c5f]">
              Contact Agent
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Services;
