// TODO: make a skeleton for this.

// Now that I am wrapping the component that is deepest in the
// "search" page in a suspense, this should never run.

// nvm it DOES show up wth...
// what I do see though is this page, then the page itself with the Suspense fallback, then finally with the data fetched.

// thinking about it more, it's probably because Next wants to render the Page first, which is the top most node in the search route, and until the condition that it is rendered is not met, it will show the loading screen. I think I'm interpreting things properly...
export default function Loading() {
    return (
        <div className="loading">
            <h1>Loading anime and manga search results...</h1>
        </div>
    );
}
