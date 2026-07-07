// Now that I am wrapping the component that is deepest in the
// "search" page in a suspense, this should never run.
export default function Loading() {
  return (
    <div className="loading">
      <h1>Loading anime and manga search results...</h1>
    </div>
  );
}
