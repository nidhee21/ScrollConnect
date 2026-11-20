
import Image from "next/image";
import Nav from "./components/navbar/Nav";
import ProfileCard from "./components/navbar/ProfileCard";
import StudentInfo from "./components/StudentInfo";
import Link from 'next/link'

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1 w-full px-6 py-10">

        {/* Hero Section */}
        <section className="w-full max-w-6xl mx-auto min-h-[70vh] flex md:flex-row flex-col items-center justify-center gap-10">

          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-8 text-center">
            <h1 className="text-4xl font-bold">
              Welcome to ScrollConnect
            </h1>

            <p className="max-w-md text-2xl">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <button className="p-4 bg-black text-white rounded-lg w-fit text-3xl font-semibold hover:bg-gray-800 transition-colors">
              Join with us
            </button>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Image
              src="/loginbro.png"
              alt="Login illustration"
              width={900}
              height={900}
              className="w-full max-w-[650px] h-auto object-contain"
            />
          </div>

        </section>

        {/* Students Section */}
        <section className="w-full py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Students
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <ProfileCard name="Nidhee" role="Frontend Developer" age={20} />
            <ProfileCard name="Riddhi" role="Designer" age={13} />
            <ProfileCard name="Gaurav" role="Student" age={11} />
          </div>
        </section>

        {/* Student Info Section */}
        <section className="w-full py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Student Info
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">   
          <StudentInfo name="Nidhee" course="Computer Science" />
          <StudentInfo name="Riddhi" course="Design" />
          <StudentInfo name="Gaurav" course="Mathematics" />
          </div>
        </section>


            </main>
    </div>
  );
}

export default Page;
