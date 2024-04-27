import Image from 'next/image'
import { ArrowRight } from 'lucide-react';

type Props = {
  src: string;
  title: string;
}

function ServiceCard({ src, title }: Props) {
  return (
    <div className="w-fit">
      <Image src={src} alt={src} width={255} height={167} />
      <div className="flex justify-between py-2 px-4 border border-slate-200 border-t-transparent rounded-b-xl">
        <span>{title}</span>
        <ArrowRight />
      </div>
    </div>
  )
}

export default ServiceCard
