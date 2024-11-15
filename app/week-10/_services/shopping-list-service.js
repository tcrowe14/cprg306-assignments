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
    setDoc,
    deleteDoc
} from "firebase/firestore";

// Function to retrieve all items for a specific user
export const getItem = async (userId) => {
    try {
        const itemCollection = collection(db, "users", userId, "items");
        const querySnapshot = await getDocs(itemCollection);

        const items = [];
        querySnapshot.forEach((doc) => {
            items.push({ docId: doc.id, ...doc.data() }); // Use `docId` for Firestore's document ID
        });

        return items;
    } catch (error) {
        console.error("Error fetching items:", error);
        throw error;
    }
};

// Function to add an item
export const addItem = async (userId, item) => {
    try {
        const docRef = await addDoc(collection(db, "users", userId, "items"), item); // Add document to Firestore
        console.log("Item added successfully with ID:", docRef.id);
        return docRef.id; // Return the Firestore document ID
    } catch (e) {
        console.error("Error adding item:", e);
        throw e;
    }
};

export const removeItem = async (userId, docId) => {
    try {
        console.log(`Attempting to delete document with userId: ${userId} and docId: ${docId}`);
        const docRef = doc(db, "users", userId, "items", docId.toString()); // Convert docId to string
        await deleteDoc(docRef);
        console.log(`Document ${docId} successfully deleted.`);
    } catch (error) {
        console.error("Error during Firestore deletion:", error);
        throw error;
    }
};
