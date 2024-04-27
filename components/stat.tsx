import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  description: string;
  className?: string;
}

function Stat({ title, description, className }: Props) {
  return (
    <div className={twMerge("flex align-center", className)}>
      <h1 className="text-5xl font-bold h-fit my-auto">{title}</h1>
      <span className="max-w-[230px] ml-6 text-black/60">{description}</span>
    </div>
  )
}

export default Stat
