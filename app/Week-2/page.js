import Head from "next/head";
import Heading from "./heading";
export default function Page() {

// Javascript declarations
    let a = 5;
    let b = 10;

    return (
        <div>
            <Heading />
            <p>Week 2 Demo</p>
            <p>The sum of a + b is {a+b}.</p>
        </div>

    );
}