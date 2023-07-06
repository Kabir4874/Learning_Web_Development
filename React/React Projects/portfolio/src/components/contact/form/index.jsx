import React from "react";
import "./style.scss";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send("service_gurzj1s", "template_aw29mrm", data, "Ol6UypA81oJ_C0oh0")
      .then((response) => {
        console.log("Success!", response.status, response.text);
        formSuccess();
      })
      .catch((err) => {
        console.log("Failed...", err);
      });
  };
  const formSuccess = () => {
    toast("Thanks for submitting your Query!");
    document.getElementById("queryForm").reset();
  };
  return (
    <div className="query-form">
      <ToastContainer />
      <form action="" id="queryForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <input
            type="text"
            name="form_name"
            placeholder="Name"
            {...register("form_name", { required: "Name is required" })}
          />
          {errors.form_name?.message && (
            <p className="errors">{errors.form_name?.message}</p>
          )}
        </div>
        <div className="input-field">
          <input
            type="text"
            name="reply_to"
            placeholder="Email"
            {...register("reply_to", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.reply_to?.message && (
            <p className="errors">{errors.reply_to?.message}</p>
          )}
        </div>
        <div className="input-field">
          <input
            type="text"
            name="phone_number"
            placeholder="Phone"
            {...register("phone_number", {
              required: "Phone is required",
              minLength: {
                value: 8,
                message: "Phone is not valid",
              },
            })}
          />
          {errors.phone_number?.message && (
            <p className="errors">{errors.phone_number?.message}</p>
          )}
        </div>
        <div className="input-field">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            {...register("subject", {
              required: "Subject is required",
              minLength: {
                value: 10,
                message: "Minimum 10 characters required",
              },
            })}
          />
          {errors.subject?.message && (
            <p className="errors">{errors.subject?.message}</p>
          )}
        </div>
        <div className="input-field full-width">
          <textarea
            className="textarea"
            name="message"
            placeholder="Your Message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 20,
                message: "Minimum 10 characters required",
              },
              maxLength: {
                value: 500,
                message: "Maximum 500 characters allowed",
              },
            })}
          >
            {errors.message?.message && (
              <p className="errors">{errors.message?.message}</p>
            )}
          </textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

// service_gurzj1s
// template_aw29mrm
// Ol6UypA81oJ_C0oh0
