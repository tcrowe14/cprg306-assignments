export default function Item({ name, quantity, category, onSelect, onRemove }) {
    return (
        <main className="p-2 m-4 bg-red-200 max-w-xs flex justify-between items-center">
            <div onClick={onSelect} className="flex-1">
                <h2 className="text-xl font-bold">{name}</h2>
                <div className="text-sm">Buy {quantity} in {category}</div>
            </div>
            <button 
                className="bg-red-500 text-white py-1 px-3 rounded ml-4"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering onSelect when clicking remove
                    onRemove(); // Call the onRemove function
                }}
            >
                Remove
            </button>
        </main>
    );
};
