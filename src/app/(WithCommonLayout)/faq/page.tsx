import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { faqCategories } from "@/lib/tutors";
import { Search } from "lucide-react";

const FaqPage = () => {
  return (
    <div>
      <div className="flex flex-col">
        <section className="w-full py-12 md:py-16 bg-gradient-to-l from-primary/40 to-secondary/50 backdrop-blur">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about TutorLink
                </p>
              </div>
              <div className="w-full max-w-sm mx-auto">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search for answers..."
                    className="pl-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 md:grid-cols-6">
                  {faqCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {faqCategories.map((category) => (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  className="space-y-4"
                >
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FaqPage;
