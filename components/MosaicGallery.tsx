import Image from 'next/image';

interface MosaicGalleryProps {
  images: Array<{ src: string; alt: string }>;
}

export function MosaicGallery({ images }: MosaicGalleryProps) {
  if (images.length < 3) return null;

  return (
    <section className="py-16 px-6 md:px-12">
      {/* 1 large + 2 small */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="col-span-2 md:col-span-1 aspect-[4/3] relative">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className="aspect-[4/3] relative">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="aspect-[4/3] relative">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>

      {/* 3-up row */}
      {images.length >= 6 && (
        <div className="grid grid-cols-3 gap-2">
          {images.slice(3, 6).map((image, i) => (
            <div key={i} className="aspect-[4/3] relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 33vw"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
