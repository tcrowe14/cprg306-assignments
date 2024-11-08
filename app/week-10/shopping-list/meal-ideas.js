"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    return response.json();
}

export default function MealIdeas(props) {
    const ingredient = props.ingredient;
    const [meals, setMeals] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (ingredient !== '') {
            loadMealIdeas();
        }
    }, [ingredient]);

    async function loadMealIdeas() {
        try {
            const data = await fetchMealIdeas(ingredient);
            if (data.meals) {
                setMeals(data.meals);
                setMessage('');
            } else {
                setMeals([]);
                setMessage('No meals found =(');
            }
        } catch (error) {
            setMessage('Error fetching meal ideas.');
            console.error('Error:', error);
        }
    }

    return (
        <div className="space-y-2 max-h-80 pt-2">
            {message && <p>{message}</p>}
            {meals.length > 0 && meals.map((meal) => (
                <li key={meal.idMeal} className="list-none">
                    <ul className="bg-red-200">
                        <h1 className="text-xl">{meal.strMeal}</h1>
                    </ul>
                </li>
            ))}
        </div>
    );
}
