const getBasePath = (): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
};

const basePath = getBasePath();

export const heroData = [
  {
    imgDesktop: `${basePath}/images/desktop-image-hero-1.jpg`,
    imgMobile: `${basePath}/images/mobile-image-hero-1.jpg`,
    headline: "Discover innovative ways to decorate",
    bodyCopy:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    imgDesktop: `${basePath}/images/desktop-image-hero-2.jpg`,
    imgMobile: `${basePath}/images/mobile-image-hero-2.jpg`,
    headline: "We are available all across the globe",
    bodyCopy:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    imgDesktop: `${basePath}/images/desktop-image-hero-3.jpg`,
    imgMobile: `${basePath}/images/mobile-image-hero-3.jpg`,
    headline: "Manufactured with the best materials",
    bodyCopy:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

export const about = [
  {
    headline: "About our furniture",
    bodyCopy:
      "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.",
  },
];

export const navLinks = [
  {
    page: "home",
    url: "#",
  },
  {
    page: "shop",
    url: "#",
  },
  {
    page: "about",
    url: "#",
  },
  {
    page: "contact",
    url: "#",
  },
];
