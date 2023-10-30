import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function Team({ minSize, maxSize }) {
  const inputStyle = "bg-transparent placeholder:text-slate-300";

  const selectItemStyle =
    "focus:bg-sky-600 focus:text-white hover:cursor-pointer";

  const glassColor = "rgb(255,255,255,0.15)";

  return (
    <Card
      className={`w-2/3 m-4 bg-[${glassColor}] backdrop-blur-sm text-white shadow-2xl`}
    >
      <CardHeader className="text-center">
        <CardTitle>Team Details</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid items-center w-full gap-4">
            <div className="flex w-full gap-4">
              <div className="flex flex-col space-y-1.5 w-1/2">
                <Label htmlFor="teamName">Team Name</Label>
                <Input
                  className={inputStyle}
                  id="teamName"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col space-y-1.5 w-1/2">
                <Label htmlFor="teamSize">Team Size</Label>
                <Select>
                  <SelectTrigger className={inputStyle} id="teamSize">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper" className="font-sans">
                    {Array.from({ length: maxSize - minSize }, (_, i) => (
                      <SelectItem
                        key={i}
                        className={selectItemStyle}
                        value={minSize + i}
                      >
                        {minSize + i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <h2 className="text-2xl font-medium text-center ">Team Lead</h2>
            <div className="grid w-full grid-cols-2 gap-8">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  className={inputStyle}
                  id="name"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  className={inputStyle}
                  id="email"
                  placeholder="innovator@innovatia.com"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gender</Label>
                <Select>
                  <SelectTrigger className={inputStyle} id="gender">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper" className="font-sans">
                    <SelectItem className={selectItemStyle} value="male">
                      Male
                    </SelectItem>
                    <SelectItem className={selectItemStyle} value="female">
                      Female
                    </SelectItem>
                    <SelectItem className={selectItemStyle} value="other">
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  className={inputStyle}
                  id="phone"
                  placeholder="9846514561"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="college">College</Label>
                <Input
                  className={inputStyle}
                  id="college"
                  placeholder="Sri Sairam Engineering College"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="year">Year</Label>
                <Select>
                  <SelectTrigger className={inputStyle} id="year">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    className={`bg-[rgba(255,255,255,.9)] font-sans`}
                  >
                    <SelectItem className={selectItemStyle} value="1">
                      1
                    </SelectItem>
                    <SelectItem className={selectItemStyle} value="2">
                      2
                    </SelectItem>
                    <SelectItem className={selectItemStyle} value="3">
                      3
                    </SelectItem>
                    <SelectItem className={selectItemStyle} value="4">
                      4
                    </SelectItem>
                    <SelectItem className={selectItemStyle} value="5">
                      5
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="text-black">
          Cancel
        </Button>
        <Button>Add</Button>
      </CardFooter>
    </Card>
  );
}
