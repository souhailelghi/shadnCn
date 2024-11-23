import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SelectCourt({ selectedSport, courts, selectedCourt, onSelectCourt, onNext, onBack }) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#1E3B8B]">Select Your Court</h2>
        <p className="text-muted-foreground">Choose your preferred playing area</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courts.map((court) => (
          <Card
            key={court}
            className={`cursor-pointer transition-all hover:border-[#1E3B8B] ${
              selectedCourt === court ? "border-[#1E3B8B] ring-2 ring-[#1E3B8B]/20" : ""
            }`}
            onClick={() => onSelectCourt(court)}
          >
            <CardContent className="p-0">
                      <div className="aspect-video relative">
                        <img 
                          src="/placeholder.svg?height=400&width=600" 
                          alt={court}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-semibold text-lg">{court}</h3>
                          <p className="text-sm text-white/80">Available Now</p>
                        </div>
                      </div>
                    </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          <ChevronLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!selectedCourt}
          className="bg-[#1E3B8B] hover:bg-[#1E3B8B]/90"
        >
          Next <ChevronRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}
