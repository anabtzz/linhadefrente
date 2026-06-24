import { motion } from "framer-motion";
import BorderGlow from "./BorderGlow";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  accentColor?: string;
}

const Timeline = ({ events, accentColor = "bg-primary" }: TimelineProps) => {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Linha do tempo em breve...</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

      <div className="space-y-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className={`relative flex items-start gap-6 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Content */}
            <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
              <BorderGlow
                borderRadius={16}
                glowColor="270 70 60"
                backgroundColor="hsl(var(--card))"
                colors={['#a855f7', '#6366f1', '#22c55e']}
                glowRadius={60}
                glowIntensity={1.5}
                edgeSensitivity={25}
              >
                <div className="p-4 sm:p-6 w-full">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-primary-foreground mb-2 ${accentColor}`}>
                    {event.date}
                  </span>
                  <h4 className="font-display font-bold text-base sm:text-lg mb-2">{event.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{event.description}</p>
                </div>
              </BorderGlow>
            </div>

            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
              <div className={`w-4 h-4 rounded-full ${accentColor} ring-4 ring-background`} />
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
