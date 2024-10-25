"use client";

import { useState, useEffect } from "react";

export default function Page() {
    const [dogUrl, setDogUrl] = useState("");
    const [breeds, setBreeds] = useState([]);

    const getRandomDog = async (breed) => {

        try {
        const response =  breed ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`) : await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogUrl(data.message);
        } catch (error) {
            console.error("error fetching dog", error);
        }
    };

    const getDogBreeds = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breedsAsObjects = data.message;
        const breeds = Object.keys(breedsAsObjects);
        setBreeds(breeds);
    }

    useEffect(() => {
        getRandomDog();
        getDogBreeds();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold m-2">Week-8 Demo</h1>
            <div>
                <select onChange={(event) => getRandomDog(event.target.value)}>
                    {breeds.map((breed) => (
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <img src={dogUrl} alt="random dog" />
                </div>
        </div>
    );
}