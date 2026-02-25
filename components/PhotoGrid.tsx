import Image from 'next/image';

export function PhotoGrid() {
  const photos = [
    { id: 1, src: '/IMG_1458.jpeg', alt: 'Baan Sayiuan' },
    { id: 2, src: '/IMG_3154.jpeg', alt: 'Baan Sayiuan' },
    { id: 3, src: '/IMG_3365.jpeg', alt: 'Baan Sayiuan' },
    { id: 4, src: '/IMG_7234.jpeg', alt: 'Baan Sayiuan' },
    { id: 5, src: '/IMG_9878.jpeg', alt: 'Baan Sayiuan' },
    { id: 6, src: '/db493aea-9a84-40eb-876c-c82f13e6147f.jpg', alt: 'Baan Sayiuan' },
  ];

  return (
    <section className="py-20">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="aspect-square relative group overflow-hidden bg-clay/20"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-ink-green/0 group-hover:bg-ink-green/10 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
