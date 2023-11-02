import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function Member({ id, handleMemberDetails }) {
  const inputStyle = "bg-transparent placeholder:text-slate-300 text-white ";

  const itemStyle = "flex flex-col space-y-1.5 w-full";

  const selectItemStyle =
    "focus:bg-sky-600 focus:text-white hover:cursor-pointer";

  const [member, setMember] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    dept: "",
    collegeId: "",
    college: "",
    year: "",
  });

  useEffect(() => {
    handleMemberDetails(id, member);
  }, [member]);

  const handleInputChange = (event) => {
    setMember((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const handleSelectChange = (key, value) => {
    setMember((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Card className={`w-full bg-white/5 backdrop-blur-sm text-white`}>
      <CardHeader className="text-center">
        <CardTitle>Co - Astronaut - {id}</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent className="pb-14">
        <div className="grid items-center w-full grid-cols-1 gap-4 md:grid-cols-2">
          <div className={itemStyle}>
            <Label htmlFor="name">Name</Label>
            <Input
              onChange={handleInputChange}
              className={inputStyle}
              id="name"
              placeholder="John Doe"
            />
          </div>
          <div className={itemStyle}>
            <Label htmlFor="email">Email</Label>
            <Input
              className={inputStyle}
              id="email"
              placeholder="innovator@innovatia.com"
              onChange={handleInputChange}
              type="email"
            />
          </div>
          <div className={itemStyle}>
            <Label htmlFor="gender">Gender</Label>
            <Select
              onValueChange={(value) => {
                handleSelectChange("gender", value);
              }}
            >
              <SelectTrigger id="gender" className={inputStyle}>
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
          <div className={itemStyle}>
            <Label htmlFor="phone">Phone</Label>
            <Input
              className={inputStyle}
              id="phone"
              type="number"
              placeholder="9846514561"
              value={member.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="dept">Department</Label>
            <Input
              className={inputStyle}
              id="dept"
              placeholder="M.Tech CSE"
              onChange={handleInputChange}
            />
          </div>
          <div className={itemStyle}>
            <Label htmlFor="college">College</Label>
            <Input
              className={inputStyle}
              id="college"
              placeholder="Sri Sairam Engineering College"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="collegeId">College Id</Label>
            <Input
              className={inputStyle}
              id="collegeId"
              placeholder="SEC21CJ001"
              onChange={handleInputChange}
            />
          </div>
          <div className={itemStyle}>
            <Label htmlFor="year">Year</Label>
            <Select
              onValueChange={(value) => {
                handleSelectChange("year", value);
              }}
            >
              <SelectTrigger id="year" className={inputStyle}>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper" className="font-sans">
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
      </CardContent>
    </Card>
  );
}

Member.propTypes = {
  id: PropTypes.number.isRequired,
  handleMemberDetails: PropTypes.func.isRequired,
};

export default Member;
