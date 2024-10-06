"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { MapPin, House, DollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";

const moroccanCities = {
  CMN: "Casablanca",
  RBA: "Rabat",
  FEZ: "Fez",
  MRK: "Marrakesh",
  TNG: "Tangier",
  AGA: "Agadir",
  OUJ: "Oujda",
  KEN: "Kenitra",
  TET: "Tetouan",
  SAF: "Safi",
  MHD: "Mohammedia",
  EJD: "El Jadida",
  BNI: "Beni Mellal",
  NAD: "Nador",
  KHO: "Khouribga",
  SET: "Settat",
  TZA: "Taza",
  ERR: "Errachidia",
  GUE: "Guelmim",
  LAY: "Laayoune",
  DAK: "Dakhla",
  ESS: "Essaouira",
  TAN: "Tan-Tan",
  OUA: "Ouarzazate",
  LAR: "Larache",
  ALH: "Al Hoceima",
  TFI: "Taourirt",
  BRK: "Berkane",
  KHE: "Khemisset",
  TIF: "Tiznit",
  IFR: "Ifrane",
  AZR: "Azrou",
  MDQ: "Midelt",
  ZAG: "Zagora",
  TAR: "Taroudant",
  CHE: "Chefchaouen",
  ASI: "Asilah",
  KSK: "Ksar el-Kebir",
  FSN: "Fnideq",
  SAI: "Saidia",
  MAR: "Martil",
  OUZ: "Ouezzane",
  BOU: "Bouarfa",
  FQH: "Fquih Ben Salah",
  YUS: "Youssoufia",
  TML: "Temara",
  SLE: "Salé",
};

const propertyTypes = {
  apartment: "Apartment",
  house: "House",
  villa: "Villa",
  duplex: "Duplex",
  studio: "Studio",
  condo: "Condominium",
  townhouse: "Townhouse",
  bungalow: "Bungalow",
  chalet: "Chalet",
  cottage: "Cottage",
  penthouse: "Penthouse",
  loft: "Loft",
  farmhouse: "Farmhouse",
  mansion: "Mansion",
  mobileHome: "Mobile Home",
  terracedHouse: "Terraced House",
  semiDetached: "Semi-Detached House",
  detached: "Detached House",
  flat: "Flat",
  maisonette: "Maisonette",
  riad: "Riad",
  dar: "Dar",
  commercialSpace: "Commercial Space",
  office: "Office",
  retail: "Retail Space",
  warehouse: "Warehouse",
  industrialUnit: "Industrial Unit",
  land: "Land/Plot",
  parkingSpace: "Parking Space",
  garage: "Garage",
  studentAccommodation: "Student Accommodation",
  holidayHome: "Holiday Home",
  historicalProperty: "Historical Property",
  newBuild: "New Build",
  offPlan: "Off-Plan Property",
};

const SearchBar = () => {
  const [type, setType] = useState("rent");
  const [location, setLocation] = useState("");
  const [property, SetProperty] = useState("");
  const [price, setPrice] = useState("");

  const SeachHandler = () => {
    const data = {
      type,
      location,
      property,
      price,
    };
    console.log("searching...", data);
  };

  return (
    <div className="w-full">
      <div className="flex gap-2 py-2">
        <Badge
          onClick={() => setType("rent")}
          className={`cursor-pointer ${type === "rent" ? "bg-main-color" : "bg-gray-400"} rounded-full hover:bg-main-color text-[14px] px-4`}
        >
          Rent
        </Badge>
        <Badge
          onClick={() => setType("buy")}
          className={`cursor-pointer ${type === "buy" ? "bg-main-color" : "bg-gray-400"} rounded-full hover:bg-main-color text-[14px] px-4`}
        >
          Buy
        </Badge>
      </div>
      <div className="bg-gray-50 p-4 rounded-md flex flex-col md:flex-row gap-4 items-center">
        <div className="w-full md:w-auto">
          <div className="location flex gap-2 items-center border-2 border-black rounded-sm px-2 w-full md:w-auto">
            <MapPin color="#ee5d43" />
            <Select onValueChange={(value) => setLocation(value)}>
              <SelectTrigger className="w-full md:w-[280px] focus:outline-none focus:ring-0 border-0 shadow-none">
                <SelectValue placeholder="location" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(moroccanCities).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <div className="location flex gap-2 items-center border-2 border-black rounded-sm px-2 w-full md:w-auto">
            <House color="#70b8ff" />
            <Select onValueChange={(value) => SetProperty(value)}>
              <SelectTrigger className="w-full md:w-[180px] focus:outline-none focus:ring-0 border-0 shadow-none">
                <SelectValue placeholder="properity" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(propertyTypes).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <div className="flex gap-2 items-center border-2 border-black rounded-sm px-2 h-10 w-full md:w-auto">
            <DollarSign color="#4CAF50" />
            <Input
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="price"
              className="border-0 w-full md:w-[140px] focus:outline-none focus:ring-0 focus:border-0"
            />
            <p className="mb-2">DHs</p>
          </div>
        </div>
        <div className="submit w-full md:w-auto">
          <Button
            onClick={() => SeachHandler()}
            className="h-10 w-full md:w-auto"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
