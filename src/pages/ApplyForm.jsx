import { TextField, MenuItem, InputAdornment } from "@mui/material";
import { Person, Email, Phone, WorkspacePremium } from "@mui/icons-material";
import formImg from "../assets/form.png";

export default function Apply() {
  return (
    <section
      id="apply"
      className="py-20 bg-gradient-to-t from-white to-[#8DD8F7] px-6 md:px-20 flex justify-center"
    >
      <div className=" w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
        
        <div className="hidden md:flex items-center justify-center p-6 bg-[#222F59]">
          <img
            src={formImg}
            alt="Apply Internship"
            className="w-64 object-contain"
          />
        </div>

        <div className="p-8 md:p-10 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold text-[#222F59] mb-2">
            Apply Now
          </h2>
          <p className="text-[#222F59] font-medium mb-6 text-sm">
            Kickstart your career with real startup experience.
          </p>

          <form className="grid gap-4">
            <TextField
              label="Full Name"
              size="small"
              required
              fullWidth
              variant="standard"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ color: "#222F59" }} />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              label="Email"
              type="email"
              size="small"
              variant="standard"
              required
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: "#222F59" }} />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              label="Phone"
              size="small"
              variant="standard"
              required
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone sx={{ color: "#222F59" }} />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              select
              label="Role"
              size="small"
              variant="standard"
              required
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <WorkspacePremium sx={{ color: "#222F59" }} />
                    </InputAdornment>
                  ),
                },
              }}
            >
              <MenuItem value="tech">Tech Intern</MenuItem>
              <MenuItem value="marketing">Marketing Intern</MenuItem>
              <MenuItem value="design">Design Intern</MenuItem>
            </TextField>

            <button className="bg-[#222F59] px-3 py-2 rounded text-white font-semibold mt-4">
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

