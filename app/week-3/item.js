export default function Item({ name, quantity, category }) {
    return (
        <main>
            <li className="p-2 m-4 bg-red-200 max-w-sm">
            <h2 className="text-xl font-bold">{name}</h2>
            <div className="text-sm"> Buy {quantity} in {category}</div>
            </li>
            </main>
    );
};
