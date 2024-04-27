import Header from "@/components/header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <div className="min-h-[80vh] w-full bg-main bg-center bg-cover">
        <div className="h-[80vh] w-full px-10 bg-gradient-to-br from-black from-5% to-transparent text-white flex flex-col align-center justify-center md:px-[20%]">
          <h1 className="max-w-[400px] text-3xl font-bold md:text-5xl">Get help from the expert consultants</h1>
          <p className="max-w-[400px] mt-8 text-white/70 leading-1">
            With lots of unique blocks, you can easily
            build a page without coding. Build your next
            consultancy website within few minutes.
          </p>
          <Button className="w-fit text-md font-bold mt-4" size="lg">Get started now</Button>
        </div>
      </div>
    </main>
  );
}
