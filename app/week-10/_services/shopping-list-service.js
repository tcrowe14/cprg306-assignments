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

export const removeItem = async (userId, docId) => {
    try {
        // Ensure userId and docId are strings
        const itemDoc = doc(db, "users", String(userId), "items", String(docId));
        console.log("Attempting to delete document at path:", itemDoc.path);
        
        await deleteDoc(itemDoc);
        console.log(`Item ${docId} removed successfully from Firestore`);
    } catch (error) {
        console.error("Error during Firestore deletion:", error.message, error);
    }
};