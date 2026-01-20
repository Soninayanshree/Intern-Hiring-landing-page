import { FormatQuote } from "@mui/icons-material";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Tech Intern",
    feedback:
      "This internship gave me real startup exposure. I worked on live React projects and gained massive confidence.",
  },
  {
    name: "Priya Verma",
    role: "Marketing Intern",
    feedback:
      "Amazing mentorship and hands-on learning. I learned SEO, content strategy, and campaign execution.",
  },
  {
    name: "Rohan Mehta",
    role: "Design Intern",
    feedback:
      "I improved my UI/UX skills by working on real designs. The feedback and guidance were invaluable.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-t from-[#8DD8F7] px-6 md:px-20 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#222F59] mb-4 text-center">
        What Our Interns Say
      </h2>

      <p className="text-[#222F59] font-medium text-center mb-12 max-w-2xl">
        Real experiences from interns who worked on real-world startup projects.
      </p>

      <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#F7FBFF] p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <FormatQuote className="text-[#8DD8F7] text-4xl mb-4" />

            <p className="text-[#222F59]  mb-6 leading-relaxed">
              “{item.feedback}”
            </p>

            <div>
              <h4 className="font-bold text-[#222F59]">{item.name}</h4>
              <span className="text-sm text-[#222F59]">{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
