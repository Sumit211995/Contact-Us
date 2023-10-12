"use client";
import { useForm } from "react-hook-form";
import "./globals.css";

export default function Requestform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  console.log("Error = ", errors);
  const onSubmit = (data) => console.log("User Data = ", data);
  return (
    <div className="flex contactform">
      <form
        className="w-full max-w-sm form-input"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 id="form-heading">Send Message</h2>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="form-input"
            {...register("fullName", { required: "Enter your full name!" })}
            placeholder="Full Name"
          />
        </div>
        <p className="flex items-center mt-6 text-sm text-error-50 text-red-600">
          {errors.fullName?.message}
        </p>

        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="form-input"
            {...register("email", { required: "Please enter a valid email!" })}
            placeholder="Email"
          />
        </div>
        <p className="flex items-center mt-6 text-sm text-error-50 text-red-600">
          {errors.email?.message}
        </p>

        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="message-input"
            {...register("userMessage", {
              required: "Please enter the message!",
              minLength: {
                value: 10,
                message: "Minimum 10 character required!",
              },
            })}
            placeholder="Type your Message..."
          />
        </div>
        <p className="flex items-center mt-6 text-sm text-error-50 text-red-600">
          {errors.userMessage?.message}
        </p>
        <button id="submit-button" type="Submit">
          Send
        </button>
      </form>
    </div>
  );
}
