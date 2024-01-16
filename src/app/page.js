import HeroPage from "./components/HeroPage";
import LatestPost from "./components/LatestPost";

export default function Home() {
  return (
   <main className="w-full">
      <section className="max-w-screen-lg mx-auto min-h-screen px-4">
        <HeroPage /> 
        <LatestPost />
      </section>
   </main>
  )
} 
