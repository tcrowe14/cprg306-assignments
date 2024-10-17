import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold ml-8 mt-4">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li className="ml-12 mt-4">
          <Link href="/week-2">Week 2 Assignment</Link>
        </li>
        <li className="ml-12">
          <Link href="/week-3">Week 3 Assignment</Link>
        </li>
        <li className="ml-12">
          <Link href="/week-4">Week 4 Assignment</Link>
        </li>
        <li className="ml-12">
          <Link href="/week-5">Week 5 Assignment</Link>
        </li>
        <li className="ml-12">
          <Link href="/week-6">Week 6 Assignment</Link>
        </li>
        <li className="ml-12">
          <Link href="/week-7">Week 7 Assignment</Link>
        </li>
      </ul>
    </div>
  );
}