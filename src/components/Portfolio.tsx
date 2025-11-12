import Showcase from "../utilis/Showcase";
import Image1 from "../assets/image1.webp";
import Image2 from "../assets/image2.webp";
import Image3 from "../assets/image3.webp";
function Portfolio() {
  return (
    <div className="space-y-20">
      <Showcase
        image={Image1}
        title="Loftloom"
        tags="UI Design, UX, Wireframe"
      />
      <Showcase
        image={Image2}
        title="Imusic"
        tags="Research, UX, UI Design"
        reverse={true}
      />
      <Showcase
        image={Image3}
        title="Technis"
        tags="UX,UI Design, Development"
      />
      <div className="flex justify-center items-center mt-10 mb-10">
        <button className="md:flex sm:flex flex lg:hidden">
          View all work
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
