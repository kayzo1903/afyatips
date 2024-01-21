import React, { Suspense, lazy } from "react";
import { getPopularPost } from "../utils/sanityData";
import PostCat from "./PostCat";
import Loadingpage from "../blog/Loading";

const Morepopular = async () => {
  const data = await getPopularPost();

  if (!data) {
    return (
      <section className="w-full py-8">
        <div className="w-full space-y-4">
          <h3 className="text-xl font-bold dark:text-main">Popular Post</h3>
          <div>Opps reload your page again</div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-8">
      <div className="w-full space-y-4">
        <h3 className="text-xl font-bold dark:text-main">Popular Post</h3>
        <Suspense fallback={<Loadingpage />}>
          <PostCat post={data} />
        </Suspense>
      </div>
    </section>
  );
};

export default Morepopular;
