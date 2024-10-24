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
      title: "CEO and Cofounder",
      company: "Supabase",
      quote: "They trust us to get things done, giving us space to lead while keeping it honest and straightforward.",
      url: "https://www.supabase.com",
      tags: ["technology", "innovation"],
    },
    {
      name: "Dan Farrelly",
      title: "CTO and Cofounder",
      company: "Inngest",
      quote: "The PWV team just understands developer tools and the entire space. They're technical and strategic. They're ready to jump in to support, but also give us space to cook.",
      url: "https://www.inngest.com",
      tags: ["technology", "innovation"],
    },
    {
      name: "Steve Krouse",
      title: "CEO and Cofounder",
      company: "Val.town",
      quote: "I didn’t believe you guys would be 10% this helpful when you invested. I mostly took the investment because I’m a fan of TPW, but you guys have gone way beyond that!",
      url: "https://www.val.town",
      tags: ["technology", "innovation"],
    },
    {
      name: "Gorkem Yurtseven",
      title: "Cofounder",
      company: "fal",
      quote: "These guys are my favorites.",
      url: "https://www.fal.ai",
      tags: ["ai", "generative ai"],
    },
    {
      name: "Ahmad Awais",
      title: "CEO and Founder",
      company: "Langbase",
      quote: "Tom, DT, and DP are all super helpful. Tom helped us navigate messaging, and DT jumped knee-deep in code and became a customer and friend I could depend on. In my book, that's extremely rare. That's why I recommend them.",
      url: "https://langbase.com/",
      tags: ["ai", "generative ai"],
    },    
    {
      name: "J.J.",
      title: "CTO and Cofounder",
      company: "Anonymous",
      quote: "You’re the best VC I know! Your expertise from the trenches and your empathy for the hacker sets you apart from 99% of the shitbirds we talk to. Always great connecting!",
      url: "#",
      tags: ["ai", "generative ai"],
    },    
  ],
};
