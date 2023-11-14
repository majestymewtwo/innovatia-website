import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function Team({ minSize, maxSize, setTeamSize, setTeam }) {
  const inputStyle = "bg-transparent placeholder:text-slate-300 text-white";

  const itemStyle = "flex flex-col space-y-1.5 md:w-1/2 w-full";

  const selectItemStyle =
    "focus:bg-sky-600 focus:text-white hover:cursor-pointer";

  const fixedSize = minSize === maxSize;

  const handleInputChange = (event) => {
    setTeam((prev) => {
      const newTeam = { ...prev, [event.target.id]: event.target.value };
      return newTeam;
    });
  };

  const handleSelectChange = (key, value) => {
    setTeam((prev) => {
      const newTeam = { ...prev, [key]: value };
      return newTeam;
    });
  };

  const renderSelectItems = () => {
    if (fixedSize)
      return (
        <SelectItem className={selectItemStyle} value={String(minSize)}>
          {minSize}
        </SelectItem>
      );

    return Array.from(
      {
        length: maxSize - minSize + 1,
      },
      (_, i) => (
        <SelectItem
          key={i}
          className={selectItemStyle}
          value={String(minSize + i)}>
          {minSize + i}
        </SelectItem>
      )
    );
  };

  return (
    <Card
      className={`w-full xs:w-4/5 sm:w-full md:w-4/5 lg:w-2/3 m-4 bg-white/5 backdrop-blur-sm text-white `}>
      <CardHeader className='text-center'>
        <CardTitle>Team Details</CardTitle>
        <CardDescription className='font-medium text-[#7dd8c9]'>
          Please fill all the details carefully, it will be used for
          verification purposes.{" "}
        </CardDescription>
      </CardHeader>
      <CardContent className='pb-14'>
        <div className='grid items-center w-full gap-4'>
          <div className='flex flex-col justify-center w-full gap-8 sm:flex-row'>
            <div className={itemStyle}>
              <Label htmlFor='teamName'>Team Name</Label>
              <Input
                className={inputStyle}
                id='teamName'
                placeholder='Team Xander'
                onChange={handleInputChange}
              />
            </div>
            <div className={itemStyle}>
              <Label htmlFor='teamSize'>Team Size</Label>
              <Select
                onValueChange={(value) => {
                  setTeamSize(value);
                }}>
                <SelectTrigger className={inputStyle} id='teamSize'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent position='popper' className='font-sans'>
                  {renderSelectItems()}
                </SelectContent>
              </Select>
            </div>
          </div>
          <h2 className='text-2xl font-medium text-center '>Captain</h2>
          <div className='grid w-full grid-cols-1 gap-8 sm:grid-cols-2'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='captainName'>Name</Label>
              <Input
                className={inputStyle}
                id='captainName'
                placeholder='Innovator'
                onChange={handleInputChange}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='captainEmail'>Email</Label>
              <Input
                className={inputStyle}
                id='captainEmail'
                type='email'
                placeholder='innovator@innovatia.com'
                onChange={handleInputChange}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='captainGender'>Gender</Label>
              <Select
                onValueChange={(value) =>
                  handleSelectChange("captainGender", value)
                }
                id='captainGender'>
                <SelectTrigger className={inputStyle} id='captainGender'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent position='popper' className='font-sans'>
                  <SelectItem className={selectItemStyle} value='male'>
                    Male
                  </SelectItem>
                  <SelectItem className={selectItemStyle} value='female'>
                    Female
                  </SelectItem>
                  <SelectItem className={selectItemStyle} value='other'>
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='captainPhone'>Phone</Label>
              <Input
                className={inputStyle}
                id='captainPhone'
                type='number'
                display='none'
                placeholder='9846514561'
                onChange={handleInputChange}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='captainDept'>Department</Label>
              <Input
                className={inputStyle}
                id='captainDept'
                placeholder='Computer Science and Engineering'
                onChange={handleInputChange}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='captainCollege'>College</Label>
              <Input
                className={inputStyle}
                id='captainCollege'
                placeholder='Sri Sairam Engineering College'
                onChange={handleInputChange}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='captainCollegeId'>College Id</Label>
              <Input
                className={inputStyle}
                id='captainCollegeId'
                placeholder='SEC21CJ001'
                onChange={handleInputChange}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='captainYear'>Year</Label>
              <Select
                onValueChange={(value) =>
                  handleSelectChange("captainYear", value)
                }
                id='captainYear'>
                <SelectTrigger className={inputStyle} id='captainYear'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent position='popper' className={` font-sans`}>
                  <SelectItem className={selectItemStyle} value='1'>
                    1
                  </SelectItem>
                  <SelectItem className={selectItemStyle} value='2'>
                    2
                  </SelectItem>
                  <SelectItem className={selectItemStyle} value='3'>
                    3
                  </SelectItem>
                  <SelectItem className={selectItemStyle} value='4'>
                    4
                  </SelectItem>
                  <SelectItem className={selectItemStyle} value='5'>
                    5
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

Team.propTypes = {
  minSize: PropTypes.number.isRequired,
  maxSize: PropTypes.number.isRequired,
  setTeamSize: PropTypes.func.isRequired,
  setTeam: PropTypes.func.isRequired,
};

export default Team;
