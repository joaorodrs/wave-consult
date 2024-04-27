type Props = {
  title: string;
  description: string;
}

function Stat({ title, description }: Props) {
  return (
    <div className="flex align-center">
      <h1 className="text-5xl font-bold">{title}</h1>
      <span className="max-w-[230px] ml-6 text-black/60">{description}</span>
    </div>
  )
}

export default Stat
