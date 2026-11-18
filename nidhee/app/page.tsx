
import Image from "next/image";
import Nav from "./components/navbar/Nav";

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1 w-full flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-6xl flex md:flex-row flex-col items-center justify-center gap-10">

          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-8 text-center">
            <h1 className="text-2xl font-bold">
              Welcome to SIGCE
            </h1>

            <p className="max-w-md">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <button className="p-4 bg-black text-white rounded-lg w-fit">
              Join with us
            </button>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Image
              src="/loginbro.png"
              alt="Login illustration"
              width={500}
              height={500}
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>

        </div>
      </main>
    </div>
  );
}

export default Page;
