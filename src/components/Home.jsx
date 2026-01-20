import Hero from "../pages/Hero";
import Roles from "../pages/Roles";
import Benefits from "../pages/Benefits";
import Testimonials from "../pages/Testimonials";
import ApplyForm from "../pages/ApplyForm";

export default function Home() {
  return (
    <>
    <div>
      <Hero/>
      <section id="roles"><Roles/></section>
      <section id="benefits"><Benefits /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="apply"><ApplyForm /></section> 
    </div>  
    </>
  );
}
