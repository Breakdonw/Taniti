import { useState } from "react";
import { TypewriterEffectSmooth } from "./components/ui/typewritter-effect";
import { ImagesSlider } from "./components/ui/imageslider-effect";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482685945432-29a7abf2f466?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]);
  const [heroWords, setheroWords] = useState([
    {
      text: "Start",
      className: "text-neutral-50",
    },
    {
      text: "A",
      className: "text-neutral-50",
    },
    {
      text: "new",
      className: "text-neutral-50",
    },
    {
      text: "adventure",
      className: "text-neutral-50",
    },
    {
      text: "in",
      className: "text-neutral-50",
    },
    {
      text: "Tanita!",
      className: "text-lime-400",
    },
  ]);
  return (
    <>
      <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <TypewriterEffectSmooth
            words={heroWords}
            cursorClassName="bg-white"
          />
          <p className="text-neutral-200 dark:text-neutral-200 text-xs sm:text-base  ">
            The road to freedom starts from here
          </p>

          <div className="row space-x-5  ">
            <button className="px-4  py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
              Book a Trip
            </button>
            <button  className="px-4 py-2 backdrop-blur-sm border bg-emerald-700 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500" />
              Explore
            </button>
          </div>
        </motion.div>
      </ImagesSlider>
      <section className="bg-neutral-700">
        <br />
      <BentoGrid className="max-w-8x1 mx-auto   md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className + "backdrop-blur-sm bg-slate-50/70"}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
      </section>
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Restaurants",
    description: 'Embark on a culinary journey on the Island of Tanita, where flavors from the local seas and international kitchens converge to tantalize your taste buds. With a choice of ten exquisite restaurants, each offering its unique ambiance and culinary delights, Tanita promises an unforgettable dining experience for every palate\nFor those eager to dive into the heart of Tanita\'s culinary tradition, five local restaurants stand ready to serve you the freshest catch from our azure waters. Imagine sitting by the ocean, a gentle breeze playing with your hair, as you savor succulent fish perfectly paired with aromatic rice, seasoned with local herbs and spices that whisper tales of Tanita\'s rich cultural heritage.',
    header: <ImagesSlider className="" images={['https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaCUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1596069080606-b9cdbd242ff1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]} > </ImagesSlider>,
    className: "md:col-span-3 h-auto  text-neutral-50 ",
  },
  {
    title: "Grocery Stores",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-2 ",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Lodging",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Entertainment",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sightseeing",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2 ",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Transportation",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-3  ",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
export default App;
