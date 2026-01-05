import Link from "next/link";

export default function News() {
  return (
    <main>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/airobot">AI Robots are incrediable</Link>
        </li>
        <li>
          <Link href="/news/accident">
            Accident at Hadapsar (Car crashed a bike Rider)
          </Link>
        </li>
        <li>
          <Link href="/news/robbary">Robbary haist at Bank</Link>
        </li>
      </ul>
    </main>
  );
}
