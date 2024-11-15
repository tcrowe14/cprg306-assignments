export default function Item({ id, name, quantity, category, onSelect, onRemove }) {
    if (!id) {
        console.warn("Item rendered without id:", { name, quantity, category });
    }

    return (
        <main className="p-2 m-4 bg-red-200 max-w-xs flex justify-between items-center">
            <div className="flex-1" onClick={() => onSelect(name)}>
                <h2 className="text-xl font-bold">{name}</h2>
                <div className="text-sm">Buy {quantity} in {category}</div>
            </div>
            <button
                className="bg-red-500 text-white py-1 px-3 rounded ml-4"
                onClick={(e) => {
                    e.stopPropagation();
                    console.log("Remove button clicked for id:", id); // Log `id` here
                    onRemove(); // Trigger removal
                }}
            >
                Remove
            </button>
        </main>
    );
}
