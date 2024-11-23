import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ChooseSport({ sports, selectedSport, onSelectSport, onNext }) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#1E3B8B]">Select Your Sport</h2>
        <p className="text-muted-foreground">Choose from our available sports facilities</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sports.map((sport) => (
          <Card
            key={sport.id}
            className={`cursor-pointer transition-all hover:border-[#1E3B8B] ${
              selectedSport === sport.id ? "border-[#1E3B8B] bg-[#1E3B8B]/5" : ""
            }`}
            onClick={() => onSelectSport(sport.id)}
          >
            <CardContent className="flex items-center gap-4 p-6">
              <div className="w-12 h-12 rounded-full bg-[#1E3B8B]/10 flex items-center justify-center">
                <sport.icon className="w-6 h-6 text-[#1E3B8B]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{sport.name}</h3>
                <p className="text-sm text-muted-foreground">{sport.courts.length} courts available</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-end">
        <Button
          onClick={onNext}
          disabled={!selectedSport}
          className="bg-[#1E3B8B] hover:bg-[#1E3B8B]/90"
        >
          Next <ChevronRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}
