import {
  Instagram,
  LinkedIn,
  Twitter,
  LocationOn,
  Email,
  Phone,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-[#222F59] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">

        <div>
          <h3 className="text-xl font-bold mb-2">InternHire</h3>
          <p className="text-sm text-gray-300">
            Kickstart your career with real startup internships and mentorship.
          </p>

          <div className="flex gap-4 mt-4">
            <Instagram className="cursor-pointer hover:text-pink-500" />
            <LinkedIn className="cursor-pointer hover:text-blue-500" />
            <Twitter className="cursor-pointer hover:text-sky-400" />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#roles" className="hover:text-white">Roles</a></li>
            <li><a href="#benefits" className="hover:text-white">Benefits</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="#apply" className="hover:text-white">Apply Now</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>

          <div className="flex items-start gap-2 text-sm text-gray-300 mb-2">
            <LocationOn fontSize="small" />
            <span>Indore, Madhya Pradesh, India</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
            <Email fontSize="small" />
            <span>internhire@gmail.com</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Phone fontSize="small" />
            <span>+91 98765 43210</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} InternHire. All rights reserved.
      </div>
    </footer>
  );
}
