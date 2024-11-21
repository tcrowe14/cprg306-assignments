export function GET() {
    const num = Math.floor(Math.random() * 3) + 1;
    const url = `http://localhost:3000/images/dog${num}.jpg`;
  
    return new Response(url, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }
  