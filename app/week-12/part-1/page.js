export default async function Page() {
    // Fetch data from the API
    const response = await fetch(
      "http://localhost:3000/week-12/part-1/api?t=" + Date.now()
    );
    const data = await response.text();
    console.log("Fetched URL:", data);
  
    return (
      <main>
        <h1>Week 12 Part 1</h1>
        <p>{data}</p>
        <img src={`${data}?t=${Date.now()}`} alt="random" />
      </main>
    );
  }
  