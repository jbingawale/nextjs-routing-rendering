import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

import { notFound } from "next/navigation";

export default async function NewsDetailPage({ params }) {
  const { slug: newsSlug } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <Link href={`/news/${newsSlug}/image`}>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </Link>
      <h2>{newsItem.title}</h2>
      <time dateTime={newsItem.date}>{newsItem.date}</time>
      <p>{newsItem.content}</p>
    </article>
  );
}
