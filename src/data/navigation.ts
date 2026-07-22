export interface NavLink {
    label: string;
    href: string;
  }
  
  export interface NavAction {
    label: string;
    href: string;
    variant: "primary" | "secondary" | "outline";
    external?: boolean;
  }
  
  export const navLinks: NavLink[] = [
    {
      label: "How it Works",
      href: "/#how-it-works",
    },
    {
      label: "Why MamaSure",
      href: "/#why-mamasure",
    },
    {
      label: "Partners",
      href: "/#partners",
    },
    {
      label: "FAQs",
      href: "/#faqs",
    },
  ];
  
  export const navActions: NavAction[] = [
    {
      label: "Join Waitlist",
      href: "YOUR_GOOGLE_FORM_LINK",
      variant: "primary",
      external: true,
    },
    {
      label: "Sign Up",
      href: "/signup",
      variant: "secondary",
    },
    {
      label: "Log In",
      href: "/login",
      variant: "outline",
    },
  ];