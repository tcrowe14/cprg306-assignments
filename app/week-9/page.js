"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    const home = async () => {
        router.push("/");
    };

    const login = async () => {
        await gitHubSignIn();
        router.push("/week-9/shopping-list");
    };

    const logout = async () => {
        await firebaseSignOut();
    };

    useEffect(() => {
        if (user) {
            router.push("/week-9/shopping-list");
        }
    }, [user, router]);

    if (user === null) {
        return (
            <main>
                <h1 className="text-3xl font-bold m-2">Shopping List App</h1>
                <p className="m-2">Please log in to see the shopping list</p>
                <button className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded ml-6 mt-3" onClick={login}>Login with GitHub</button>
                <button className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded ml-6 mt-3" onClick={home}>Index</button>
            </main>
        );
    }

    return (
        <main>
            <h1 className="text-3xl font-bold m-2">Shopping List App</h1>
            <div>
                <Link href="/week-9/shopping-list" className="m-2">
                    Go to Shopping List
                </Link>
            </div>
            <button className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded ml-6 mt-3" onClick={logout}>Logout</button>
            <button className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded ml-6 mt-3" onClick={home}>Index</button>
        </main>
    );
}
