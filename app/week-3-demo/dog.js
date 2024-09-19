export default function Dog({ name, breed, age, color }) {
    return (
        <section className="m-2">
            <h2 className="text-green-800 font-bold">{name}</h2>
            <p>Breed: {breed}</p>
            <p>Age: {age}</p>
            <p>Color: {color}</p>
        </section>
    );
};