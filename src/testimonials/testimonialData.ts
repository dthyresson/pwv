export interface TestimonialItem {
  name: string;
  title: string;
  company: string;
  url: string;
  quote: string;
  tags: string[];
}

export interface Testimonials {
  testimonials: TestimonialItem[];
}

export const testimonials: Testimonials = {
  testimonials: [
    {
      name: "Paul Copplestone",
      title: "CEO &amp; Cofounder",
      company: "Supabase",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "https://www.supabase.com",
      tags: ["technology", "innovation"],
    },
    {
      name: "Dan Farrely",
      title: "CTO &amp; Founder",
      company: "Inngest",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "https://www.inngest.com",
      tags: ["technology", "innovation"],
    },
    {
      name: "Steve Krouse",
      title: "CEO",
      company: "Val.town",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "https://www.val.town",
      tags: ["technology", "innovation"],
    },
  ],
};