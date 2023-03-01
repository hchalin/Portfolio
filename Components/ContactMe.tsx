import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

//custom type hooks
function ContactMe({}: Props) {
  const [autoFill, setAutoFill] = useState("Hello, message me");

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      "hchalin98@gmail.com"
    )}&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Hi, my name is ${formData.name}. ${formData.message}`
    )}`;
    window.open(gmailLink, '_blank')
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I&apos;m who you&apos;re looking for. <span>Lets talk.</span>
        </h4>

        <div className="flex flex-col space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#474790] h-7 w-7 animate-pulse" />
            <p className="text-2xl">(704) 813-4119</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#474790] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Oregon</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#474790] h-7 w-7 animate-pulse" />
            <p className="text-2xl">hchalin98@gmail.com</p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="md:space-x-2 ">
            <input
              {...register("name")}
              placeholder="Name"
              className="contact-input"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              type="email"
              className="contact-input"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contact-input"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contact-input"
          />
          <button className="bg-[#474790] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#565690] transition-bg duration-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
