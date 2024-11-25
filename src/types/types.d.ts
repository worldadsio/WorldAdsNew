interface ChildrenProps {
  children: React.ReactNode;
}

interface NavProps {
  index(index: any): void;
  name: string;
  link: string;
  index?: number; 
}

export interface TCtaSection {
  id: number;
  title: string;
  description: string;
  ctaImage: string;
  imagePosition: "left" | "right";
}

export { ChildrenProps, NavProps, TCtaSection };
