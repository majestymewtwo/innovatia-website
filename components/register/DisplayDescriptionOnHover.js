import { CalendarDays, Info } from "lucide-react"
import PropTypes from "prop-types"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


function DisplayDescriptionOnHover({event}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className="m-2 ml-0 hover:no-underline self-start md:self-center">
        <Button variant="link" className="flex items-center gap-2 text-lg text-white" type="button">
          <h1 className="text-2xl md:inline-block md:p-1 md:pb-2 md:text-5xl font-bold text-transparent animate-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text ">{event.name}</h1>
          <Info className="mt-1 text-gray-300" />
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

DisplayDescriptionOnHover.propTypes = {
  event: PropTypes.object.isRequired,
}

export default DisplayDescriptionOnHover;