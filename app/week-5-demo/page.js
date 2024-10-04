"use client";
import {useState} from "react";
import Toggle from "./toggle";
import Alert from "./alert";
import ControlledComponent from "./controlledcomponent";
import DogForm from "./dogform";



export default function Page() {
    const getValues = (event) => {

        console.log(event.target.value);
      };


  return (
    <main className="ml-4 mt-2">
    <h2 className="text-3xl font-bold m-2">Week-5 Demo</h2>



<input type="text" onChange={(e) => getValues(e)} />

<Toggle />
<Alert type="success" />
<Alert type="abort" />
<ControlledComponent type="abort" />
<DogForm />


      </main>
    );
  };


