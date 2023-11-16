"use client";

import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { sendRequest } from "@/request";
import contact from "../../public/space-14.json";
import Lottie from "lottie-react";

export default function QueryForm() {
  const inputStyle =
    "bg-transparent placeholder:text-slate-300 text-white border border-slate-300 rounded-md px-4 py-2 focus:outline-none w-full md:w-[80%]";

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleToast = (title, message, color) => {
    const bgClass = `bg-${color}
      backdrop-blur-md text-white rounded font-sans w-[15rem] md:w-[22rem] font-medium`;
    toast({
      title: (
        <div className='flex items-center'>
          <h2 className='font-medium text-md'>{title}</h2>
        </div>
      ),
      description: (
        <div className='flex items-center'>
          <h2 className='font-medium text-md'>{message}</h2>
        </div>
      ),
      duration: 2000,
      className: bgClass,
    });
  };

  const isValid = (data) => {
    return data.length > 1;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (
      !isValid(data.name) ||
      !isValid(data.email) ||
      !isValid(data.message) ||
      !isValid(data.phone)
    ) {
      handleToast(
        "Invalid Details",
        "Please fill all the fields with valid details",
        "red-500"
      );
      return;
    }
    const response = await sendRequest(data, "/query");
    console.log(response);
    handleToast(
      "Successfully Submitted",
      "Your query has been submitted succesfully, we will resolve it quickly",
      "green-500"
    );

    setData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleStateChange = (key, value) => {
    setData({ ...data, [key]: value });
  };

  return (
    <section className='flex flex-col-reverse md:flex-row'>
      <div className='flex flex-col items-center justify-center space-y-8 p-4 md:w-1/2'>
        <h1 className='font-bold text-5xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent p-2 animate-text'>
          Have Queries?
        </h1>
        <form
          className='flex flex-col space-y-4 w-full items-center justify-center'
          onSubmit={submitForm}>
          <input
            className={inputStyle}
            name='name'
            type='text'
            placeholder='Your Name'
            value={data.name}
            onChange={(e) => handleStateChange("name", e.target.value)}
          />
          <input
            className={inputStyle}
            name='email'
            type='text'
            placeholder='Your Email'
            value={data.email}
            onChange={(e) => handleStateChange("email", e.target.value)}
          />
          <input
            className={inputStyle}
            name='phone'
            type='text'
            placeholder='Your Phone'
            value={data.phone}
            onChange={(e) => handleStateChange("phone", e.target.value)}
          />
          <textarea
            className={inputStyle + " resize-none h-[100px]"}
            name='message'
            type='text'
            placeholder='Your Query'
            value={data.message}
            onChange={(e) => handleStateChange("message", e.target.value)}
          />
          <Button type='submit' className={inputStyle}>
            Submit
          </Button>
        </form>
      </div>
      <Lottie animationData={contact} className='md:w-[600px]' />
    </section>
  );
}
