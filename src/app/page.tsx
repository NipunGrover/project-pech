import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center">Fima Export</h1>
      <p className="mb-8 text-lg text-center max-w-xl">
        This is a placeholder homepage. The repository did not include the
        referenced <code>images/fimaexport.png</code>, so the layout below is a
        simple example.
      </p>
      <div className="w-full max-w-md">
        <Image
          src="/next.svg"
          alt="Example image"
          width={500}
          height={300}
          className="mx-auto"
        />
      </div>
    </main>
  );
}
