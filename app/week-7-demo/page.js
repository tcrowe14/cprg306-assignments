"use client";

import Dog from "./dog";
import DogForm from "./dogform";
import DogList from "./doglist";
import DogData from "./dogs-data.json";

import { useState } from "react";

export default function Page() {
    const [dogList, setDogs] = useState(DogData);

    const handleDeleteDog = (id) => {
        setDogs(dogList.filter((dog) => dog.id !== id));
    };

    const handleAddDog = (dog) => {
        setDogs([...dogList, dog]);
    };

    return (
        <div>
            <h2 className="text-3xl font-bold m-2">Dog List</h2>
            <DogList dogs={dogList} onDelete={handleDeleteDog} /> {/* Use onDelete here */}
            <DogForm onAddDog={handleAddDog} />
        </div>
    );
}