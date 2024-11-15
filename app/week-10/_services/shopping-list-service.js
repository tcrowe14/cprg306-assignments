import { db } from "../_utils/firebase";
import { 
    collection, 
    getDocs, 
    addDoc, 
    getDoc, 
    onSnapshot, 
    query, 
    doc, 
    where,
    deleteDoc
} from "firebase/firestore";

// Function to retrieve all items for a specific user
export const getItem = async (userId) => {
    try {
        const itemCollection = collection(db, "users", userId, "items"); // Adjusted path to nested collection
        const querySnapshot = await getDocs(itemCollection);

        const items = [];
        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });

        return items;
    } catch (e) {
        console.error("Error fetching items:", e);
    }
};

// Function to add an item
export const addItem = async (userId, item) => {
    try {
        if (!item || !item.name) {
            throw new Error("Item name is required");
        }
        if (!userId) {
            throw new Error("User ID is required");
        }

        const itemCollection = collection(db, "users", userId, "items"); // Adjusted path to nested collection
        const itemRef = await addDoc(itemCollection, item);
        return itemRef.id;
    } catch (e) {
        console.error("Error in addItem:", e);
    }
};

export const removeItem = async (userId, itemId) => {
    try {
        if (!userId || !itemId) {
            throw new Error("User ID and Item ID are required");
        }

        const itemDoc = doc(db, "users", userId, "items", itemId); // Path to the specific item document
        await deleteDoc(itemDoc);
        console.log("Item removed successfully");
    } catch (e) {
        console.error("Error removing item:", e);
    }
};