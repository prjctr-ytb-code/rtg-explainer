import Image from 'next/image';

export default function Header() {
    return (
        <header className="border-b-neutral-400 border-b flex flex-row justify-start items-center ps-4">
            <Image
                src="./camera.svg"
                alt="Logo"
                width={100}
                height={24}
                priority
            />
            <h1 className="uppercase text-3xl">Images Gallery</h1>
        </header>
    )
}
