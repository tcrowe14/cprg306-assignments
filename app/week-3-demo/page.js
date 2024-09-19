import Dog from "./dog";

export default function Page() {
    let dog1 = {
        name: "Buddy",
        breed: "Golden Retriever",
        age: 2,
        color: "Golden"
    };
    let dog2 = {
        name: "Max",
        breed: "Shitzu",
        age: 13,
        color: "Black & White"
    };
    let dog3 = {
        name: "Shaggy",
        breed: "Chow",
        age: 6,
        color: "White"
    };
    let dog4 = {
        name: "Molly",
        breed: "Labrador",
        age: 4,
        color: "Black"
    };
    return (
        
    <main className="ml-4 mt-2">
        <h1 className="text-2xl font-bold">Week 3 Demo</h1>
<Dog 
    name={dog1.name}
    breed={dog1.breed}
    age={dog1.age}
    color={dog1.color}
    />
    <Dog 
    name={dog2.name}
    breed={dog2.breed}
    age={dog2.age}
    color={dog2.color}
    />
    <Dog 
    name={dog3.name}
    breed={dog3.breed}
    age={dog3.age}
    color={dog3.color}
    />
    <Dog 
    name={dog4.name}
    breed={dog4.breed}
    age={dog4.age}
    color={dog4.color}
    />

    </main>
    )
}
