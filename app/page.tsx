import Header from "@/components/header";
import Stat from "@/components/stat";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <section className="min-h-[80vh] w-full bg-main bg-center bg-cover">
        <div className="h-[80vh] w-full px-10 bg-gradient-to-br from-black from-5% to-transparent text-white flex flex-col align-center justify-center md:px-[20%]">
          <h1 className="max-w-[400px] text-3xl font-bold md:text-5xl">Get help from the expert consultants</h1>
          <p className="max-w-[400px] mt-8 text-white/70 leading-1">
            With lots of unique blocks, you can easily
            build a page without coding. Build your next
            consultancy website within few minutes.
          </p>
          <Button className="w-fit text-md font-bold mt-4" size="lg">Get started now</Button>
        </div>
      </section>

      <section className="w-full py-16 flex flex-col space-y-16 align-center justify-between px-[20%] lg:flex-row lg:py-28 lg:space-y-0">
        <Stat title="1M+" description="Customers visit Wave every month" />
        <Stat
          title="93%"
          description="Satisfaction rate from our customers."
          className="flex-row-reverse lg:flex-row"
        />
        <Stat title="4.9" description="Average customer ratings out of 5.00!" />
      </section>

      <div className="my-4 h-[1px] bg-gradient-to-r from-transparent via-slate-300 via-40% to-transparent w-full" />

      <section className="w-full px-8 md:px-[20%] mt-14">
        <h1 className="text-3xl font-bold text-center">Services we offer for you</h1>
        <h2 className="text-center text-black/60 mt-4 text-md mx-auto max-w-[400px]">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</h2>
      </section>
    </main>
  );
}
