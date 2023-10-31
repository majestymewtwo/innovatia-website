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

const EventTiles = () => {
  const inputStyle = "bg-transparent placeholder:text-slate-300";

  const selectItemStyle =
    "focus:bg-sky-600 focus:text-white hover:cursor-pointer";

  const glassColor = "rgb(255,255,255,0.15)";

  return (
    <Card
      className={`md:w-2/3 m-4 bg-white/5 text-white font-sans font-semibold p-0 w-full`}
    >
      <Tabs defaultValue="Technical" className="md:h-full">
        <TabsList className="grid grid-cols-3 bg-inherit">
          <TabsTrigger value="Technical">Technical</TabsTrigger>
          <TabsTrigger value="NonTechnical">Non Technical</TabsTrigger>
          <TabsTrigger value="SocialEvent">Social Event</TabsTrigger>
        </TabsList>

        <TabsContent
          value="Technical"
          className="flex md:flex-row flex-col md:m-3 md:gap-3 gap-2 m-2 justify-center "
        >
          <Card className="bg-transaprent hover:bg-[url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fdesign&psig=AOvVaw3SZmnJcVN7IJReLCVekfO9&ust=1698834866311000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjL-JaLoIIDFQAAAAAdAAAAABAE')] text-white md:w-1/3">
            <CardHeader>
              <CardTitle>
                <span className="text-sm md:text-2xl">Design thinkers</span>
              </CardTitle>
              <CardDescription>
                Make changes to your Technical here. Click save when you're
                done.Make changes to your Technical here. Click save when you're
                done.Make changes to your Technical here. Click save when you're
                done.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-transaprent text-white md:w-1/3">
            <CardHeader>
              <CardTitle>Paper Presentation</CardTitle>
              <CardDescription>
                Make changes to your Technical here. Click save when you're
                done.Make changes to your Technical here. Click save when you're
                done.Make changes to your Technical here. Click save when you're
                done.
              </CardDescription>
            </CardHeader>
            {/* <CardContent className="space-y-2">
              Ok sodiubv fsj skj woivs fk kdnm isodv ak oejb adj apjn
            </CardContent> */}
          </Card>

          <Card className="bg-transaprent text-white md:w-1/3">
            <CardHeader>
              <CardTitle>Cyber Security</CardTitle>
              <CardDescription>
                Make changes to your Technical here. Click save when you're
                done.Make changes to your Technical here. Click save when you're
                done.Make changes to your Technical here. Click save when you're
                done.
              </CardDescription>
            </CardHeader>
            {/* <CardContent className="space-y-2">
              {" "}
              dsf sdn okn n lk nl kn oinjl n jk nl k ,n lmkmn iubjon{" "}
            </CardContent> */}
          </Card>
        </TabsContent>

        <TabsContent value="NonTechnical">
          <Card className="bg-transaprent text-white">
            <CardHeader>
              <CardTitle>Non Technical</CardTitle>
              <CardDescription>
                Change your NonTechnical here. After saving, you'll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current NonTechnical</Label>
                <Input id="current" type="NonTechnical" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New NonTechnical</Label>
                <Input id="new" type="NonTechnical" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="SocialEvent">
          <Card className="bg-transaprent border-none text-white">
            <CardHeader>
              <CardTitle>Social Event</CardTitle>
              <CardDescription>
                Change your SocialEvent here. After saving, you'll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">ok</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default EventTiles;
