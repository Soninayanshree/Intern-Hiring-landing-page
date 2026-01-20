import {
  Paid,
  WorkspacePremium,
  School,
  Work,
} from "@mui/icons-material";

const benefits = [
  {
    title: "Stipend",
    desc: "Get a monthly stipend for your contribution and dedication.",
    icon: <Paid sx={{ fontSize: 60, color: "#222F59" }} />,
  },
  {
    title: "Internship Certificate",
    desc: "Receive a verified certificate after successful completion.",
    icon: <WorkspacePremium sx={{ fontSize: 60, color: "#222F59" }} />,
  },
  {
    title: "1:1 Mentorship",
    desc: "Learn directly from experienced industry mentors.",
    icon: <School sx={{ fontSize: 60, color: "#222F59" }} />,
  },
  {
    title: "Real Project Experience",
    desc: "Work on real startup projects to build your portfolio.",
    icon: <Work sx={{ fontSize: 60, color: "#222F59" }} />,
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-10 px-6 md:px-20 bg-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#222F59]">
          Internship Benefits
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-[#222F59] font-medium">
          Designed to help you learn, grow, and gain real-world experience.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {benefits.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center">
            
            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition">
              {item.icon}
            </div>

            <h3 className="mt-4 text-lg font-bold text-[#222F59]">
              {item.title}
            </h3>

          </div>
        ))}
      </div>
    </section>
  );
}

