import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({ params }) {
  const { slug: newsSlug } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      <h2>{newsItem.title}</h2>
      <time dateTime={newsItem.date}>{newsItem.date}</time>
      <p>{newsItem.content}</p>
    </article>
  );
}
