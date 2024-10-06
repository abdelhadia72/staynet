import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  imageUrl: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  isNew?: boolean;
}

export default function PropertyCard({
  imageUrl,
  price,
  beds,
  baths,
  sqft,
  address,
  city,
  state,
  zipCode,
  isNew = false,
}: PropertyCardProps) {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={imageUrl}
            alt="Property"
            className="w-full h-48 object-cover"
          />
          {isNew && (
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
            ${price.toLocaleString()}
          </h2>
          <Badge variant="secondary" className="text-xs font-semibold">
            Single-Family Home
          </Badge>
        </div>
        <p className="text-gray-600 mb-4">
          {beds} bed • {baths} bath • {sqft.toLocaleString()} sqft
        </p>
        <p className="text-sm text-gray-500 truncate">{address}</p>
        <p className="text-sm text-gray-500">
          {city}, {state} {zipCode}
        </p>
      </CardContent>
      <CardFooter className="p-4 bg-gray-50">
        <Button className="w-full">Contact Agent</Button>
      </CardFooter>
    </Card>
  );
}
