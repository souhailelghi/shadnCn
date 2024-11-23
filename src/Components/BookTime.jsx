import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Calendar,  ChevronRight, Clock, ClubIcon as Football, Plus, Shield, Trophy, Users, X } from 'lucide-react'
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"


export default function BookTime({ participants, onAddParticipant, onRemoveParticipant, onBack }) {
  return (
    <motion.div 
    className="space-y-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-[#1E3B8B]">Book Your Time Slot</h2>
      <p className="text-muted-foreground">Select a time and add participants</p>
    </div>

    <div className="grid gap-8 md:grid-cols-2">
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#1E3B8B]" />
            Available Time Slots
          </CardTitle>
        </CardHeader>
        <CardContent>




            {/* ---div--- RadioGroup ----------------------------------*/}
          <RadioGroup defaultValue="14:00" className="grid gap-4">
            {["14:00", "15:00", "16:00", "17:00", "18:00"].map((time) => (
              <div
                key={time}
                className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-[#1E3B8B]/5"
              >
                <RadioGroupItem value={time} id={time}  onChange={() => HandleSelectedTimeRange(time)} checked={time}  />
                <Label htmlFor={time} className="flex-1">
                  <span className="font-medium">{time} - {parseInt(time) + 1}:00</span>
                  <br />
                  <span className="text-sm text-muted-foreground">60 minutes</span>
                </Label>
                <span className="text-sm font-medium text-green-600">Available</span>
              </div>
            ))}
          </RadioGroup>
            {/* ---div--- RadioGroup ----------------------------------*/}
        </CardContent>






      </Card>

      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Users className="w-5 h-5 text-[#1E3B8B]" />
            Participants
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {participants.map((code) => (
              <div 
                key={code} 
                className="flex items-center gap-2 bg-[#1E3B8B]/10 text-[#1E3B8B] px-3 py-1.5 rounded-full"
              >
                <span className="text-sm font-medium">{code}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-5 w-5 hover:bg-[#1E3B8B]/20" 
                  onClick={() => removeParticipant(code)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input 
              placeholder="Enter student ID"
              className="border-[#1E3B8B]/20 focus-visible:ring-[#1E3B8B]"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  addParticipant(e.target.value)
                  e.target.value = ''
                }
              }}
            />
            <Button 
              variant="outline" 
              size="icon"
              className="border-[#1E3B8B]/20 text-[#1E3B8B] hover:bg-[#1E3B8B]/10 hover:text-[#1E3B8B]"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>

    <div className="flex justify-between pt-4">
      <Button variant="outline" onClick={onBack} >
        <ChevronLeft className="mr-2 w-4 h-4" /> Back
      </Button>
      <Button 
        onClick={() => alert("Booking confirmed!")}
        className="bg-[#1E3B8B] hover:bg-[#1E3B8B]/90"
      >
        Confirm Booking
      </Button>
    </div>
  </motion.div>
  );
}
