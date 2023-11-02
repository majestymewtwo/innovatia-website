import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabscus";
import Link from "next/link";

const EventTiles = () => {
  const inputStyle = "bg-transparent placeholder:text-slate-300";

  const selectItemStyle =
    "focus:bg-sky-600 focus:text-white hover:cursor-pointer";

  const glassColor = "rgb(255,255,255,0.15)";

  return (
    <Card
      className={`md:w-2/3 m-4 bg-white/5 text-white font-sans font-semibold p-0 w-full backdrop-blur-sm`}
    >
      <Tabs defaultValue="Technical" className="md:h-full">
        <TabsList className="grid grid-cols-3 bg-inherit border rounded-none">
          <TabsTrigger value="Technical">Technical</TabsTrigger>
          <TabsTrigger value="NonTechnical">Non Technical</TabsTrigger>
          <TabsTrigger value="SocialEvent">Social Event</TabsTrigger>
        </TabsList>

        <TabsContent
          value="Technical"
          className="flex md:flex-row flex-col md:m-3 md:gap-3 gap-2 m-2 justify-center "
        >
          <Card className="bg-transaprent hover:bg-[url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fdesign&psig=AOvVaw3SZmnJcVN7IJReLCVekfO9&ust=1698834866311000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjL-JaLoIIDFQAAAAAdAAAAABAE')] text-white md:w-1/3">
            <Link href="/events/design-derbies">
              <CardHeader>
                <CardTitle>
                  <span className="text-sm md:text-2xl">Design thinkers</span>
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
            <Link href="/events/ink-and-insight">
              <CardHeader>
                <CardTitle>Paper Presentation</CardTitle>
                <CardDescription>
                  Make changes to your Technical here. Click save when you're
                  done.Make changes to your Technical here. Click save when
                  you're done.Make changes to your Technical here. Click save
                  when you're done.
                </CardDescription>
              </CardHeader>
              {/* <CardContent className="space-y-2">
              Ok sodiubv fsj skj woivs fk kdnm isodv ak oejb adj apjn
            </CardContent> */}
            </Link>
          </Card>

          <Card className="bg-transaprent text-white md:w-1/3">
            <Link href="/events/game-of-threats">
              <CardHeader>
                <CardTitle>Cyber Security</CardTitle>
                <CardDescription>
                  Make changes to your Technical here. Click save when you're
                  done.Make changes to your Technical here. Click save when
                  you're done.Make changes to your Technical here. Click save
                  when you're done.
                </CardDescription>
              </CardHeader>
              {/* <CardContent className="space-y-2">
              {" "}
              dsf sdn okn n lk nl kn oinjl n jk nl k ,n lmkmn iubjon{" "}
            </CardContent> */}
            </Link>
          </Card>
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
              {/* <CardContent className="space-y-2">
              Ok sodiubv fsj skj woivs fk kdnm isodv ak oejb adj apjn
            </CardContent> */}
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
              {/* <CardContent className="space-y-2">
              {" "}
              dsf sdn okn n lk nl kn oinjl n jk nl k ,n lmkmn iubjon{" "}
            </CardContent> */}
            </Link>
          </Card>
        </TabsContent>

        <TabsContent
          value="SocialEvent"
          className="flex md:flex-row flex-col md:m-3 md:-mt-3 md:gap-3 gap-2 m-2 justify-center "
        >
          <Card className="bg-transaprent text-white">
            <Link href="/events/game-of-threats">
              <CardHeader>
                <CardTitle>Socailizeee</CardTitle>
                <CardDescription>
                  Make changes to your Technical here. Click save when you're
                  done.Make changes to your Technical here. Click save when
                  you're done.Make changes to your Technical here. Click save
                  when you're done.
                </CardDescription>
              </CardHeader>
              {/* <CardContent className="space-y-2">
              {" "}
              dsf sdn okn n lk nl kn oinjl n jk nl k ,n lmkmn iubjon{" "}
            </CardContent> */}
            </Link>
          </Card>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default EventTiles;
