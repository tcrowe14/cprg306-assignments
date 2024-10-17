"use client";

import { useState } from "react";
import Image from "next/image";
import dogsJson from "./dogs.json";

export default function Page() {
    const [selectedDogId, setSelectedDogID] = useState(0);

let dogs = [...dogsJson];

dogs.sort((a, b) => a.name.localeCompare(b.name));
//remove dog with id=2
// dogs = dogs.filter(dog => dog.id !== 2);

const handleClick = (id) => {
    if (id === selectedDogId) {
        setSelectedDogID(0);
        return;
    }
    setSelectedDogID(id);
}
    return (
        <main>            
            <div className="flex justify-center w-full">
<p>Currently selected id: {selectedDogId}</p>
<ul>
    {dogs.map((dog) => (
        <li 
        key={dog.id}
         onClick={() =>handleClick(dog.id)}
         className={`flex ${
            dog.id === selectedDogId ? "bg-slate-500" : "bg-slate-200"
            } m-10`}
            >
            <h2 className={`text-xl m-4`}>{dog.name}</h2>
            <p className="m-6">{dog.description}</p>
            <Image src={dog.imageUrl} alt={dog.name} width={300} height={150}/>
        </li>
    ))}
</ul>
            </div>
        </main>
    )
};