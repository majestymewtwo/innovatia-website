import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabscus";
import Link from "next/link";

const EventTiles = () => {
  return (
    <Card
      className={`md:w-2/3 m-4 bg-white/5 text-white font-sans font-semibold p-0 w-full backdrop-blur-sm`}
    >
      <Tabs defaultValue="Technical" className="md:h-full">
        <TabsList className="grid grid-cols-2 bg-inherit border rounded-b-none">
          <TabsTrigger value="Technical">Technical</TabsTrigger>
          <TabsTrigger value="NonTechnical">Non Technical</TabsTrigger>
        </TabsList>
        <TabsContent
          value="Technical"
          className="flex md:flex-row flex-col md:m-3 md:gap-3 justify-center items-center"
        >
          <div class="grid grid-cols-1 gap-3 md:gap-14 md:grid-cols-3 w-4/5 md:w-11/12">
            <div class="group border rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="w-full">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/designderbies.png"
                  alt="Design-derbies"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Design Derbies
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Frontend Development: Front-End, HTML5, CSS3, Responsive
                  Design, Mobile-First Design.
                </p>
                <Link href="/events/design-derbies">
                  <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-neutral-900">
                    See More
                  </button>
                </Link>
              </div>
            </div>
            <div class="group relative border rounded-lg cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="w-full">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/inkndinsight.png"
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Ink And Insights
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Paper Presentation:Research, Abstract, Case Study,
                  Presentation Skills, Literature Review.
                </p>
                <Link href="/events/ink-and-insight">
                  <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-neutral-900">
                    See More
                  </button>
                </Link>
              </div>
            </div>
            <div class="group relative border rounded-lg cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="w-full">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="gameofthreats.png"
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Game Of Threats
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Cyber Security: Cybersecurity, Threat Analysis, Network
                  Security, Data Privacy, Phishing.
                </p>
                <Link href="/events/game-of-threats">
                  <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-neutral-900">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="NonTechnical"
          className="flex md:flex-row flex-col md:m-3 md:-mt-3 md:gap-3 gap-2 m-2 justify-center "
        >
          <Card className="bg-transaprent hover:bg-[url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fdesign&psig=AOvVaw3SZmnJcVN7IJReLCVekfO9&ust=1698834866311000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjL-JaLoIIDFQAAAAAdAAAAABAE')] text-white md:w-1/3">
            <Link href="/events/pixel-perfect">
              <CardHeader>
                <CardTitle>
                  <span className="text-sm md:text-2xl">Pixel Perfect</span>
                </CardTitle>
                <CardDescription>
                  Make changes to your Technical here. Click save when you're
                  done.Make changes to your Technical here. Click save when
                  you're done.Make changes to your Technical here. Click save
                  when you're done.
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>
          <Card className="bg-transaprent text-white md:w-1/3">
            <Link href="/events/superhero-shippuden">
              <CardHeader>
                <CardTitle>Superhero Shippuden</CardTitle>
                <CardDescription>
                  Make changes to your Technical here. Click save when you're
                  done.Make changes to your Technical here. Click save when
                  you're done.Make changes to your Technical here. Click save
                  when you're done.
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="bg-transaprent text-white md:w-1/3">
            <Link href="/events/pop-topia">
              <CardHeader>
                <CardTitle>Pop topia</CardTitle>
                <CardDescription>
                  Make changes to your Technical here. Click save when you're
                  done.Make changes to your Technical here. Click save when
                  you're done.Make changes to your Technical here. Click save
                  when you're done.
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default EventTiles;
