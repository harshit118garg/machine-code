import { Image } from "../../../shared";

interface CardTeaserProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export default function CardTeaser({
  title,
  description,
  imageUrl,
  linkUrl,
}: CardTeaserProps) {
  return (
    <div className="w-full h-full border rounded-lg overflow-hidden shadow-lg flex">
      <div className="w-full aspect-w-16 aspect-h-9 image-wrapper">
        <Image alt={title} src={imageUrl} />
      </div>
      <div className="content-wrapper p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href={linkUrl} className="text-blue-500 hover:underline">
          Read more
        </a>
      </div>
    </div>
  );
}
