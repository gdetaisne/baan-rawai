import Image from 'next/image';

export function PhotoGrid() {
  const photos = [
    { id: 1, src: '/IMG_1458.jpeg', alt: 'Baan Sayiuan' },
    { id: 2, src: '/IMG_3154.jpeg', alt: 'Baan Sayiuan' },
    { id: 3, src: '/IMG_3365.jpeg', alt: 'Baan Sayiuan' },
    { id: 4, src: '/IMG_7234.jpeg', alt: 'Baan Sayiuan' },
    { id: 5, src: '/IMG_9878.jpeg', alt: 'Baan Sayiuan' },
    { id: 6, src: '/IMG_7221.jpeg', alt: 'Baan Sayiuan' },
  ];

  return (
    <section className="py-12 bg-sand-50">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="aspect-square relative group overflow-hidden rounded-2xl shadow-soft hover:shadow-medium transition-all"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
