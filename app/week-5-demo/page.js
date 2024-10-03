"use client";
import {useState} from "react";
import Toggle from "./toggle";
import Alert from "./alert";
import ControlledComponent from "./controlledcomponent";
import DogForm from "./dogform";
import Dog from "../week-3-demo/dog";


export default function Page() {
    const getValues = (event) => {
        // Get the value of the input field
        console.log(event.target.value);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data
        // Form will not be submitted, i.e. /send will not be called
      };

  return (
    <main className="ml-4 mt-2">
    <h2 className="text-3xl font-bold m-2">Week-5 Demo</h2>



// In JSX, pass the event object to the event handler
<input type="text" onChange={(e) => getValues(e)} />

<Toggle />
<Alert type="success" />
<Alert type="abort" />
<ControlledComponent type="abort" />
<DogForm />


      </main>
    );
  };


