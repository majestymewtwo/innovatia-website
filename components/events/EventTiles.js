"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabscus";
import "./SocialEvent.css";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const EventTiles = () => {
  return (
    <Card
      className={`md:w-2/3 m-4 bg-white/5 text-white font-sans font-semibold p-0  backdrop-blur-sm`}
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
          <div className="grid grid-cols-1 gap-3 md:gap-14 md:grid-cols-3 w-4/5 md:w-11/12">
            <div className="group border rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="w-full">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/designderbies.png"
                  alt="Design-derbies"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Design Derbies
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Frontend Development: Front-End, HTML5, CSS3, Responsive
                  Design, Mobile-First Design.
                </p>
                <a href="/events/design-derbies">
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-neutral-900">
                    Register Now!
                  </button>
                </a>
              </div>
            </div>
            <div className="group relative border rounded-lg cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="w-full">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/inkndinsight.png"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Ink And Insights
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Paper Presentation:Research, Abstract, Case Study,
                  Presentation Skills, Literature Review.
                </p>
                <a href="/events/ink-and-insight">
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-neutral-900">
                    Register Now!
                  </button>
                </a>
              </div>
            </div>
            <div className="group relative border rounded-lg cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="w-full">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="gameofthreats.png"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Game Of Threats
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Cyber Security: Cybersecurity, Threat Analysis, Network
                  Security, Data Privacy, Phishing.
                </p>
                <a href="/events/game-of-threats">
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-neutral-900">
                    Register Now!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="NonTechnical"
          className="flex md:flex-row flex-col md:m-3 md:gap-3 justify-center items-center"
        >
          <div className="grid grid-cols-1 gap-3 md:gap-14 md:grid-cols-3 w-4/5 md:w-11/12 md:-m-3 mb-2 -mt-2">
            <div className="group border rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="w-full">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/pixelperfect.png"
                  alt="Pixel-Perfect"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Pixel Perfect
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Photography : ISO, Aperture, Rule of Thirds, Framing Color,
                  Theory, Camera, DSLR, Mirrorless Cameras
                </p>
                <a href="/events/pixel-perfect">
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-neutral-900">
                    Register Now!
                  </button>
                </a>
              </div>
            </div>
            <div className="group border rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="w-full">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/superhero.png"
                  alt="Design-derbies"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Superhero Shippuden
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Anime Trivia: Anime, Manga, Otaku, Cosplay, Shōnen, Shōjo,
                  Seinen, Josei, Slice of Life
                </p>
                <a href="/events/superhero-shippuden">
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-neutral-900">
                    Register Now!
                  </button>
                </a>
              </div>
            </div>
            <div className="group border rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="w-full">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/poptopia.png"
                  alt="Design-derbies"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Pop Topia
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Musical Event: Music, Quiz, Trivia, Questionnaire,
                  Connections, Guessing
                </p>
                <a href="/events/pop-topia">
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-neutral-900">
                    Register Now!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default EventTiles;
