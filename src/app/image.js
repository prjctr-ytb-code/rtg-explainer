import Image from 'next/image';

export default function ImageWrapper({image}) {
    const {author, download_url, id} = image;

    const imageStyle = {
        borderRadius: '10px',
    }

    return (
        <figure className="mb-4 inline-block max-w-sm">
            <Image
                src={download_url}
                width={500}
                height={500}
                alt={`Picture of the author ${author}`}
                style={imageStyle}
            />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400 p-4">
                Author: {author}
            </figcaption>
        </figure>
    )
}
