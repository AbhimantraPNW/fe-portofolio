import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from "react-icons/ri";

//components
import Devimg from "./Devimg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section
      className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat
    bg-bottom bg-cover dark:bg-none"
    >
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div
            className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0
          text-center xl:text-left"
          >
            <div className="text-sm uppercase font-semibold mb-4 xl:text-[20px] text-primary tracking-[10px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Abhimantra PNW</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0 xl:text-[20px]">
              Brief description with insights into myself, my vocational
              journey, and what i engage in profesionally
            </p>
            {/* button */}
            <div
              className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0
            mb-12"
            >
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={20} />
                </Button>
              </Link>
              <Link href='/about/CV.pdf'> 
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={20} />
                </Button>
              </Link>
            </div>
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[10rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Month Of Experience"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[82%] -left-[8rem]"
              icon={<RiTodoFill />}
              endCountNum={2}
              badgeText="Finished Project"
            />
            <div
              className="bg-hero_shape_dark dark:bg-hero_shape_dark w-[500px] 
              h-[500px] bg-no-repeat absolute -top-1 -right-2"
            ></div>
            <Devimg
              containerStyles="bg-hero_shape_light w-[250px] h-[350px] bg-no-repeat
              relative bg-bottom"
              imgSrc="/hero/bim.png"
            />
          </div>
        </div>
        {/* icon */}
      </div>
    </section>
  );
};

export default Hero;
