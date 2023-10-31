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
      <Tabs defaultValue="Technical">
        <TabsList className="grid w-full grid-cols-3 bg-inherit">
          <TabsTrigger value="Technical">Technical</TabsTrigger>
          <TabsTrigger value="NonTechnical">Non Technical</TabsTrigger>
          <TabsTrigger value="SocialEvent">Social Event</TabsTrigger>
        </TabsList>
        <TabsContent value="Technical">
          <Card className="bg-transaprent border-none text-white">
            <CardHeader>
              <CardTitle>Technical</CardTitle>
              <CardDescription>
                Make changes to your Technical here. Click save when you're
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">Ok</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="NonTechnical">
          <Card className="bg-transaprent border-none text-white">
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
