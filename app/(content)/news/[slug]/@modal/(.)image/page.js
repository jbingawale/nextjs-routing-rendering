"use client";
import { use } from "react";
import { useRouter } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function ImagePage({ params }) {
  const router = useRouter();
  const { slug: newsSlug } = use(params);
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            className="image"
            width="100%"
          />
        </div>
      </dialog>
    </>
  );
}
