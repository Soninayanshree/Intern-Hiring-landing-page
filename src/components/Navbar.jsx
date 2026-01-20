import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Internship"
            className="h-20 object-contain"
          />
          <span className="text-3xl font-bold text-[#8DD8F7] hidden sm:block">
            InternHire
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="block text-[#222F59] hover:text-[#8DD8F7]"
          >
            Home
          </a>
          <a href="#roles" className="block text-[#222F59] hover:text-[#8DD8F7] transition">
            Roles
          </a>
          <a href="#benefits" className="block text-[#222F59] hover:text-[#8DD8F7] transition">
            Benefits
          </a>
          <a
            href="#testimonials"
            onClick={() => setOpen(false)}
            className="block text-[#222F59] hover:text-[#8DD8F7]"
          >
            Testimonials
          </a>
          <a href="#apply">
            <button className="bg-[#222F59] px-3 py-2 rounded text-white font-semibold">
              Apply Now
            </button>
          </a>
        </div>

        <button
          className="md:hidden "
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="block text-[#222F59] font-semibold hover:text-[#8DD8F7]"
          >
            Home
          </a>
          <a
            href="#roles"
            onClick={() => setOpen(false)}
            className="block text-[#222F59] font-semibold hover:text-[#8DD8F7]"
          >
            Roles
          </a>
          <a
            href="#benefits"
            onClick={() => setOpen(false)}
            className="block text-[#222F59] font-semibold hover:text-[#8DD8F7]"
          >
            Benefits
          </a>
          <a
            href="#testimonials"
            onClick={() => setOpen(false)}
            className="block text-[#222F59] font-semibold hover:text-[#8DD8F7]"
          >
            Testimonials
          </a>
          <a href="#apply" onClick={() => setOpen(false)}>
            <button className="block bg-[#222F59] px-3 py-2 rounded text-white font-semibold mt-5">
              Apply Now
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}
