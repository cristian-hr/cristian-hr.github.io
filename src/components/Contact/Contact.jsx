import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "../../scss/Contact.scss"

function Contact() {
  const initialForm = { name: "", email: "", message: "" };
  const [form, setForm] = useState(initialForm);
  const [validEmail, setvalidEmail] = useState(false);

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function handleInputChange(event) {
    if (event.target.name === "email") setvalidEmail(false);
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validateEmail(form.email)) {
      setvalidEmail(true);
    } else {
      Swal.fire({
        title: "Submited!",
        icon: "success",
        confirmButtonColor: "#353535",
      })
        .then(() => axios.post(`${process.env.REACT_APP_BACK_URL}/sendemail`, {
          name: form.name,
          email: form.email,
          message: form.message,
        }))
        .then(() => {
          setForm(initialForm);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    }
  }

  return (
    <div className="contact">
      <span className="titleContact">Contact</span>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <span>Name </span>
          <input type="text" name="name" value={form.name} onChange={handleInputChange} required />
        </div>
        <div className="divEmailContact">
          <span>Email </span>
          <input type="text" name="email" value={form.email} onChange={handleInputChange} required />
          <span className={validEmail ? "validEmailAlert" : "validEmailAlertHide"}>Insert a valid email</span>
        </div>
        <div>
          <span>Message </span>
          <textarea type="text" name="message" value={form.message} onChange={handleInputChange} required />
        </div>
        <input className="submitContact" type="submit" value="Submit" onSubmit={handleSubmit} />
      </form>
    </div>
  );
}

export default Contact;
