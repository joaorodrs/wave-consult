import Image from 'next/image'

type Props = {
  src: string;
  quote: string;
  name: string;
  title: string;
}

function Testimonial({ src, quote, name, title }: Props) {
  return (
    <div className="max-w-[250px] min-w-[200px] flex flex-col align-center justify-between h-72">
      <Image
        src={src}
        alt={src}
        width={100}
        height={50}
        className="mx-auto"
      />
      <h1 className="text-lg font-bold text-center">
        “{quote}”
      </h1>
      <div className="flex align-center space-x-4 mx-auto w-fit">
        <Image
          src="https://github.com/joaorodrs.png"
          alt="Avatar"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h1 className="font-bold">{name}</h1>
          <p className="text-sm text-black/60">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
