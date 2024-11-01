"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const login = async () => {
        await gitHubSignIn();
    };

    const logout = async () => {
        await firebaseSignOut();
    };
    
    // Check if the user is not logged in, display a message
    if (user === null) {
        return (
            <main>
                <h1>Week 9 Shopping List App</h1>
                <button onClick={login}>Login with GitHub</button>
                <p>Please log in to see the shopping list</p>
            </main>
        );
    }

    // If the user is logged in, display the shopping list link and logout button
    return (
        <main>
            <h1>Week 9 Shopping List App</h1>
            <button onClick={logout}>Logout</button>
            <Link href="/week-9-demo-part2/shopping-list">
                Go to Shopping List
            </Link>
        </main>
    );
}