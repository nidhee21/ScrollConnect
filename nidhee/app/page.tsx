
import Image from "next/image";
import Nav from "./components/navbar/Nav";

function Page() {
  return (
    <div className="p-3 flex">
      <Nav />

      <div className="p-3  flex w-full h-screen">
        <div className="p-3  w-1/2 h-screen">
          <h1 className="text-2xl font-bold">
            Welcome to SIGCE
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="p-4 bg-blue-500 text-white rounded-lg w-fit"> Join with us </button>
        </div>

        <div className="p-3 w-1/2 h-screen">
          <Image
            src="/loginbro.png"
            alt="Login illustration"
            width={500}
            height={300}
            className="w-fit h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
