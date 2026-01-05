export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  return (
    <main>
      <h2>New Details Page</h2>
      <p>News Is about {id}</p>
    </main>
  );
}
