import { LaptopMac, Campaign, Brush } from "@mui/icons-material";

const roles = [
  {
    title: "Tech Intern",
    desc: "Work on real projects using React, Node.js, MongoDB, and modern web technologies.",
    icon: <LaptopMac sx={{ fontSize: 50, color: "#222F59" }} />,
  },
  {
    title: "Marketing Intern",
    desc: "Assist in digital campaigns, content creation, SEO, and social media growth.",
    icon: <Campaign sx={{ fontSize: 50, color: "#222F59" }} />,
  },
  {
    title: "Design Intern",
    desc: "Design stunning UI/UX, create graphics, and enhance brand identity.",
    icon: <Brush sx={{ fontSize: 50, color: "#222F59" }} />,
  },
];

export default function Roles() {
  return (
    <section
      id="roles"
      className="py-16 bg-[#222F59] flex flex-col items-center px-6 md:px-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white ">
        Internship Roles
      </h2>

      <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl">
        {roles.map((role) => (
          <div
            key={role.title}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform text-[#222F59]"
          >
            <div className="mb-4">{role.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-[#222F59]">{role.title}</h3>
            <p className="text-[#222F59]">{role.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
