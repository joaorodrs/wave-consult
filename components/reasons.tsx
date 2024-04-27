type Props = {
  title: string;
  n: number;
}

function Reasons({ title, n }: Props) {
  return (
    <div className="flex w-full space-x-4">
      <div className="size-10 flex bg-blue-100 rounded-full align-center justify-center align-middle">
        <h1 className="my-auto font-bold text-blue-500">{n}</h1>
      </div>
      <div className="w-fit">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-sm text-black/60">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
      </div>
    </div>
  )
}

export default Reasons
