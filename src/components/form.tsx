"use client";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

import Image from 'next/image'

export default function TabsDemo() {
  const { toast } = useToast();
  const [lock, setLock] = useState(false);
  const [result, setResult] = useState([]);
  const [placeholder, setPlaceholder] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorous, setPhosphorous] = useState("");
  const [potassium, setPotassium] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [ph, setPh] = useState("");
  const [rainfall, setRainfall] = useState("");

  const lockTab = () => setLock(true);
  const unlockTab = () => setLock(false);

  const predictGeneral = async () => {
    lockTab();
    setPlaceholder(true);
    const reqdata = [temperature, humidity, ph, rainfall];
    toast({
      title: "Calling API 📡",
      description: "Please wait while we predict the best crops for you",
    });
    try {
      const response = await axios.post(
        "https://farmiqapi.ashutosh7i.dev/predict",
        {
          reqdata,
        }
      );
      const data = response.data;
      toast({
        title: "Response Ready ✅✨",
        description: "We have predicted the best crops for you🌾",
      });
      setPlaceholder(false);
      setShowResults(true);
      unlockTab();

      setResult(data.top_crops);
    } catch (error) {
      unlockTab();
      toast({
        title: "Error ❌",
        description:
          "An error occurred while fetching data. Please try again later.",
      });
      setPlaceholder(false);
      setShowResults(false);
    }
  };

  const predictAdvance = async () => {
    lockTab();
    setPlaceholder(true);
    const new_data = [
      temperature,
      humidity,
      ph,
      rainfall,
      nitrogen,
      phosphorous,
      potassium,
    ];
    toast({
      title: "Calling API 📡",
      description: "Please wait while we predict the best crops for you",
    });
    try {
      const response = await axios.post(
        "https://farmiqapi.ashutosh7i.dev/advance",
        {
          new_data,
        }
      );
      const data = response.data;
      toast({
        title: "Response Ready ✅✨",
        description: "We have predicted the best crops for you🌾",
      });
      setPlaceholder(false);
      setShowResults(true);
      unlockTab();
      setResult(data.top_crops);
    } catch (error) {
      unlockTab();
      toast({
        title: "Error ❌",
        description:
          "An error occurred while fetching data. Please try again later.",
      });
      setPlaceholder(false);
      setShowResults(false);
    }
  };

  return (
    <>
      <div className="p-5 mx-auto">
        <Tabs defaultValue="general" className="sm:w-[400px] mx-auto">
          <h1 className="text-2xl font-bold text-left pb-4 ">
            Enter farm details
          </h1>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="general" disabled={lock}>
              General
            </TabsTrigger>
            <TabsTrigger value="advance" disabled={lock}>
              Advance
            </TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General</CardTitle>
                <CardDescription>
                  {
                    "Easy to obtain parameters like temperature, humidity, ph and rainfall "
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="temperature">Temperature</Label>
                  <Input
                    id="temperature"
                    placeholder="in °C"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="humidity">Humidity</Label>
                  <Input
                    id="humidity"
                    placeholder="in %"
                    value={humidity}
                    onChange={(e) => setHumidity(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="ph">Soil ph</Label>
                  <Input
                    id="ph"
                    placeholder="0-14"
                    value={ph}
                    onChange={(e) => setPh(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="rainfall">Rainfall</Label>
                  <Input
                    id="rainfall"
                    placeholder="in mm"
                    value={rainfall}
                    onChange={(e) => setRainfall(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={predictGeneral}>Submit</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="advance">
            <Card>
              <CardHeader>
                <CardTitle>Advance</CardTitle>
                <CardDescription>
                  {
                    "Advanced parameters like Nitrogen, Phosphorous, Potassium, temperature, humidity, ph and rainfall"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="n">Nitrogen</Label>
                  <Input
                    id="n"
                    placeholder="ratio in %"
                    value={nitrogen}
                    onChange={(e) => setNitrogen(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="p">Phosphorous</Label>
                  <Input
                    id="p"
                    placeholder="ratio in %"
                    value={phosphorous}
                    onChange={(e) => setPhosphorous(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="k">Potassium</Label>
                  <Input
                    id="k"
                    placeholder="ratio in %"
                    value={potassium}
                    onChange={(e) => setPotassium(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="temperature">Temperature</Label>
                  <Input
                    id="temperature"
                    placeholder="in °C"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="humidity">Humidity</Label>
                  <Input
                    id="humidity"
                    placeholder="in %"
                    value={humidity}
                    onChange={(e) => setHumidity(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="ph">Soil ph</Label>
                  <Input
                    id="ph"
                    placeholder="0-14"
                    value={ph}
                    onChange={(e) => setPh(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="rainfall">Rainfall</Label>
                  <Input
                    id="rainfall"
                    placeholder="in mm"
                    value={rainfall}
                    onChange={(e) => setRainfall(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={predictAdvance}>Submit</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <div className="pt-6 mx-auto">
            <Skeleton
              className={`w-full h-full absolute top-0 left-0 ${
                placeholder ? "block" : "hidden"
              }`}
            />
            <div
              className={`${
                showResults ? "block" : "hidden"
              } flex flex-col items-center justify-center border-2 border-green-400 p-4 rounded-md w-full mx-auto `}
            >
              <h4 className="text-sm font-medium leading-none">Best Crops</h4>
              <p className="text-sm text-muted-foreground">
                Plant these 3 crops for maximum yield
              </p>
<div className="grid grid-cols-3 gap-4 items-center text-sm">
  {result.length >= 1 && (
    <div>
      {result[0]}
      <Image
        src={`/crops/${result[0]}.jpg`}
        width={500}
        height={500}
        alt={result[0]}
      />
    </div>
  )}
  {result.length >= 2 && (
    <div>
      {result[1]}
      <Image
        src={`/crops/${result[1]}.jpg`}
        width={500}
        height={500}
        alt={result[1]}
      />
    </div>
  )}
  {result.length >= 3 && (
    <div>
      {result[2]}
      <Image
        src={`/crops/${result[2]}.jpg`}
        width={500}
        height={500}
        alt={result[2]}
      />
    </div>
  )}
</div>
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
}
