import heroImg from "../assets/home.png";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gradient-to-r from-[#8DD8F7] to-white text-white">
      
      <div className="flex-1 flex flex-col gap-6 md:max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Kickstart Your Career with <span className="text-[#222F59]">Real Startup Projects</span>
        </h1>
        <p className="text-lg md:text-xl text-black">
          Learn by doing, get mentorship, and gain real experience with industry projects.
        </p>
        <div>
          <button className="bg-[#222F59] px-3 py-2 rounded text-white font-semibold">
              Apply Now
            </button>
        </div>
      </div>

      <div className="flex-1 mb-8 md:mb-0 flex justify-center">
        <img
          src={heroImg}
          alt="Internship Illustration"
          className="w-64 md:w-full object-contain"
        />
      </div>
    </section>
  );
}
