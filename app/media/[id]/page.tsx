export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const stuff = await params;
  return (
    <main>
      <h1>helloasdkfjasdjf</h1>
      <span>id: {stuff.id}</span>
    </main>
  );
}
