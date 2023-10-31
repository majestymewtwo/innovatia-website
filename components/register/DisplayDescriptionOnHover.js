import { CalendarDays, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


export function DisplayDescriptionOnHover({event}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className="m-2 hover:no-underline">
        <Button variant="link" className="flex items-center gap-2 text-lg text-white">
          <h1 className="inline-block p-1 text-4xl font-bold text-transparent animate-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text">{event.name}</h1>
          <Info className="mt-2 text-gray-300" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="mb-2 text-sm font-semibold ">{event.name}</h4>
            <p className="text-sm">
              {event.description}
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="w-4 h-4 mr-2 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                {event.date} at {event.time}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
