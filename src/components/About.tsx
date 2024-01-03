import Header from "./Header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function About(): React.JSX.Element {
  return (
    <div className="text-gray-300">
      <Header section="About" tagline="Dan yang lainnya" />

      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>2024 mw ngpin bang</AccordionTrigger>
            <AccordionContent>tido pun sodap ni</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
