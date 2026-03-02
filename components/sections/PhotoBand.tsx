import Image from 'next/image';

const photos = [
  { src: '/IMG_7234.jpeg',  alt: 'Baan Sayiuan' },
  { src: '/IMG_0777.jpeg',  alt: 'Rawai' },
  { src: '/IMG_3365.jpeg',  alt: 'Phuket' },
  { src: '/IMG_3541.jpeg',  alt: 'Thailande' },
];

export function PhotoBand() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 h-[260px] md:h-[360px]">
      {photos.map((p) => (
        <div key={p.src} className="relative overflow-hidden img-zoom">
          <Image
            src={p.src}
            alt={p.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}
