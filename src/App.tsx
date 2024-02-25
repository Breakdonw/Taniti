import { useState } from "react";
import { TypewriterEffectSmooth } from "./components/ui/typewritter-effect";
import { ImagesSlider } from "./components/ui/ImagesSlider";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import { Spotlight } from "./components/ui/spotlight";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import "./App.css";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./components/ui/text-reveal-card";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";

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
      <ImagesSlider className="h-[100rem]" images={images}>
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
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-700 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500" />
              Explore
            </button>
          </div>
        </motion.div>
      </ImagesSlider>
      <section className="bg-neutral-800">
        <br />
        <BentoGrid className=" mx-3   md:auto-rows-[30rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className + "backdrop-blur-sm bg-slate-50/70 text-4xl"}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </section>
      <section className="bg-neutral-900">
        <br />
        <h1 className=" text-3xl text-neutral-50">
          <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
              <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Frequently Asked Questions <br />
              </h1>
              <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                These are the most common questions we get from our curious
                visotors.
              </p>
            </div>
          </div>
        </h1>
        <div className=" h-[40rem] text-center flex gap-3 flex-row justify-center justify  items-center mx-10 ">
          <div className=" flex-col">
            <TextRevealCard
              text="Need a quick charge? ⚡"
              revealText="We have 120v U.S. Plugs "
            >
              <TextRevealCardTitle>
                What kind of power outlets does the island have?
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                Tanita uses the US Standard plugs @ 120v
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>
          <div className=" flex-col ">
            <TextRevealCard
              text="Feeling Thirsty? 🍹"
              revealText="Drinks are served between 9 and midnight"
            >
              <TextRevealCardTitle>When are drinks served?</TextRevealCardTitle>
              <TextRevealCardDescription>
                Drinks are allowed to be served between 9am and midnight. You
                must be <b>18 years</b> or older to drink leagally.
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>
          <div className="col">
            <TextRevealCard
              text="What's the lingo like?"
              revealText="Many Younger Tanitians can speak english. "
            >
              <TextRevealCardTitle>
                What's the primary langue in Tanita?
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                Many younger Tanitians speak fluent English. Very little English
                is spoken in rural areas, especially by the older residents.
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>
        </div>
        <div className="pb-7 text-center flex gap-3 flex-row justify-center justify  items-center mx-10 ">
          <div className=" flex-col">
            <TextRevealCard
              text="Need some Help?"
              revealText="Taniti has One hospital and several Clinics. The Crime Rate is very low"
            >
              <TextRevealCardTitle>
                What is the medical/emergency service coverage?
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                There is one hospital and several clinics. The hospital has many
                multilingual employees. Violent crime is very rare on Taniti,
                but as tourism increases, there are more reports of
                pickpocketing and other petty crimes.
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>
          <div className=" flex-col ">
            <TextRevealCard
              text="Holidays breaks"
              revealText="Taniti enjoys national holidays, buisnesses will be closed, so plan accordingly."
            >
              <TextRevealCardTitle>
                Is there anything to know about national Holidays?
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                Taniti enjoys a large number of national holidays, and many
                tourist attractions and restaurants will be closed on holidays,
                so visitors should plan accordingly.{" "}
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>
          <div className="col">
            <TextRevealCard
              text="Wanna go shopping?"
              revealText="Tanita uses the us dollar but accepts euros and yen. "
            >
              <TextRevealCardTitle>
                What's the primary langue in Tanita?
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                Taniti uses the U.S. dollar as its currency, but many businesses
                will also accept euros and yen. Several banks facilitate
                currency exchange, and many businesses accept major credit
                cards.
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>
        </div>
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
    description:
      "Embark on a culinary journey on the Island of Tanita, where flavors from the local seas and international kitchens converge to tantalize your taste buds. With a choice of ten exquisite restaurants, each offering its unique ambiance and culinary delights, Tanita promises an unforgettable dining experience for every palate\nFor those eager to dive into the heart of Tanita's culinary tradition, five local restaurants stand ready to serve you the freshest catch from our azure waters. Imagine sitting by the ocean, a gentle breeze playing with your hair, as you savor succulent fish perfectly paired with aromatic rice, seasoned with local herbs and spices that whisper tales of Tanita's rich cultural heritage.",
    header: (
      <ImagesSlider
        className=""
        images={[
          "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaCUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
          "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1596069080606-b9cdbd242ff1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]}
      >
        {" "}
      </ImagesSlider>
    ),
    className: "md:col-span-3 h-auto  text-neutral-50 ",
  },
  {
    title: "Grocery Stores",
    description:
      "On the Island of Tanita, the convenience and charm of shopping for essentials merge seamlessly with the island's laid-back lifestyle. Whether you're staying for a weekend or planning a longer retreat, you'll find everything you need within easy reach, thanks to our selection of grocery shopping options designed to cater to both locals and visitors alike. ",
    header: (
      <ImagesSlider
        className=""
        images={[
          "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1545186182-9faaf78480b8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]}
      >
        {" "}
      </ImagesSlider>
    ),
    className: "md:col-span-2 ",
  },
  {
    title: "Lodging",
    description:
      "The Island of Tanita offers a tapestry of lodging options designed to suit every traveler's taste and budget, ensuring your stay is not just comfortable, but truly memorable. From the economical charm of our hostels to the luxurious embrace of our four-star resort, Tanita prides itself on providing accommodations that are as diverse as the island's natural beauty, all while maintaining the highest standards of quality and cleanliness as mandated by strict governmental regulations..",
    header: (
      <ImagesSlider
        images={[
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]}
      ></ImagesSlider>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Entertainment",
    description:
      "The Island of Tanita is a paradise for those seeking both tranquility and adventure, offering a diverse array of entertainment options that go far beyond its pristine beaches, lush rainforests, and majestic volcano. While these natural wonders are a must-see, Tanita's vibrant culture and recreational activities ensure that every moment of your stay is filled with excitement and discovery.",
    header: (
      <ImagesSlider
        images={[
          "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1482685945432-29a7abf2f466?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]}
      ></ImagesSlider>
    ),
    className: "md:col-span-2",
  },
  {
    title: "Sightseeing",
    description:
      "Tanita City, the pulsating heart of the Island of Tanita, offers an enchanting blend of cultural heritage and natural beauty, making it a must-visit destination for any traveler. As you wander through the city, you're enveloped in an atmosphere that is both vibrant and tranquil, a testament to the island's unique charm. The city is renowned for its native architecture, a visual storybook of Tanita's history and traditions, where every building, street, and square tells a tale of the island's rich cultural tapestry.",
    header: (
      <ImagesSlider
        images={[
          "https://images.unsplash.com/photo-1511909938134-66234e1aa5c9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]}
      ></ImagesSlider>
    ),
    className: "md:col-span-2 ",
  },
  {
    title: "Transportation",
    description:
      "Arriving on the enchanting Island of Tanita presents a seamless blend of convenience and charm, making the journey as enjoyable as the stay itself. Visitors typically find their way to Tanita through the skies, landing at the island's welcoming small airport, which accommodates an array of small jets and propeller planes. This quaint gateway to Tanita's wonders is on the brink of an exciting transformation, with plans underway to expand its capacity. Soon, larger jets will grace the runway, making the island even more accessible to travelers from around the globe." +
      "For those seeking a more scenic route, a small cruise ship offers a unique voyage, docking in the serene Yellow Leaf Bay once a week. This alternative provides guests with a taste of maritime luxury and a stunning introduction to Tanita's picturesque landscapes, even before they step ashore. " +
      "Once on the island, navigating through Tanita City and its surroundings is both easy and enjoyable. The city boasts a reliable public bus service operating from the early hours of 5 a.m. until 11 p.m. daily, ensuring that visitors can explore the city's charms and attractions with ease. For adventures beyond the city limits, private buses offer convenient access to the island's many treasures, from secluded beaches to lush rainforests and the captivating volcano.",
    header: (
      <ImagesSlider
        images={[
          "https://images.unsplash.com/photo-1580541631950-7282082b53ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]}
      ></ImagesSlider>
    ),
    className: "md:col-span-3  ",
  },
];

export default App;
