import React, { Suspense } from "react";
import { getLatestPost } from "../utils/sanityData";
import Loadingpage from "../blog/Loading";
import { lazy } from "react";
// Lazy load PostCat component
const PostCat = lazy(() => import("./PostCat"));

const LatestPost = async () => {
  const data = await getLatestPost();

  if (!data) {
    return (
      <section className="w-full py-8">
        <div className="w-full space-y-4">
          <h3 className="text-xl font-bold">Articles</h3>
          <div>Opps reload your page again</div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-8">
      <div className="w-full space-y-4">
        <h3 className="text-xl font-bold">Articles</h3>
        <Suspense fallback={<Loadingpage />}>
          {/* Use lazy-loaded PostCat component */}
          <PostCat post={data} />
        </Suspense>
      </div>
    </section>
  );
};
export default LatestPost;
