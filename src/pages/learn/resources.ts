const cssResources: {
  id: string;
  title: string;
  link: string;
  description: string;
  tags: string[];
}[] = [
  {
    id: "1",
    title: "CSS Tricks",
    link: "https://css-tricks.com/",
    description:
      "A website full of articles and tutorials covering a wide range of CSS topics.",
    tags: ["CSS", "Tutorials", "Blog"],
  },
  {
    id: "2",
    title: "MDN Web Docs: CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    description:
      "Comprehensive documentation on CSS from Mozilla, ideal for all levels of developers.",
    tags: ["CSS", "Documentation"],
  },
  {
    id: "3",
    title: "W3Schools CSS Tutorial",
    link: "https://www.w3schools.com/css/",
    description:
      "An easy-to-understand tutorial site with examples and interactive lessons on CSS.",
    tags: ["CSS", "Tutorials"],
  },
  {
    id: "4",
    title: "CSS Grid Layout",
    link: "https://css-tricks.com/snippets/css/complete-guide-grid/",
    description:
      "A complete guide to CSS Grid layout, including examples and explanations.",
    tags: ["CSS", "Grid", "Layout"],
  },
  {
    id: "5",
    title: "Flexbox Froggy",
    link: "https://flexboxfroggy.com/",
    description:
      "A fun game to learn CSS Flexbox by guiding a frog to its lily pad.",
    tags: ["CSS", "Flexbox", "Games"],
  },
  {
    id: "6",
    title: "CSS Flexbox Guide",
    link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    description:
      "A detailed guide to CSS Flexbox, explaining how to use it effectively.",
    tags: ["CSS", "Flexbox", "Guide"],
  },
  {
    id: "7",
    title: "Learn CSS Layout",
    link: "https://learncssgrid.com/",
    description:
      "Interactive lessons for mastering CSS Grid layout techniques.",
    tags: ["CSS", "Grid", "Layout"],
  },
  {
    id: "8",
    title: "CSS Zen Garden",
    link: "http://www.csszengarden.com/",
    description:
      "A showcase of beautiful CSS designs, illustrating the power of CSS in web design.",
    tags: ["CSS", "Inspiration"],
  },
  {
    id: "9",
    title: "CSS Reference",
    link: "https://cssreference.io/",
    description:
      "A visual guide to CSS properties and how they work, with live examples.",
    tags: ["CSS", "Reference"],
  },
  {
    id: "10",
    title: "A Complete Guide to CSS Variables",
    link: "https://css-tricks.com/a-complete-guide-to-css-variables/",
    description:
      "An in-depth guide to understanding and using CSS custom properties (variables).",
    tags: ["CSS", "Variables", "Guide"],
  },
  {
    id: "11",
    title: "CSS Secrets",
    link: "https://www.smashingmagazine.com/2015/05/css-secrets/",
    description:
      "A collection of little-known tips and tricks for writing better CSS.",
    tags: ["CSS", "Tips", "Secrets"],
  },
  {
    id: "12",
    title: "CSS Animations",
    link: "https://css-tricks.com/snippets/css/css-animation/",
    description:
      "A resource for understanding and implementing CSS animations effectively.",
    tags: ["CSS", "Animations"],
  },
  {
    id: "13",
    title: "CSS Layout Techniques",
    link: "https://www.smashingmagazine.com/2016/11/css-layout-techniques/",
    description:
      "A comprehensive overview of various CSS layout techniques and best practices.",
    tags: ["CSS", "Layouts"],
  },
  {
    id: "14",
    title: "CSS3 Animation",
    link: "https://css3animations.com/",
    description:
      "A site dedicated to CSS3 animations, providing examples and tutorials.",
    tags: ["CSS", "Animations", "CSS3"],
  },
  {
    id: "15",
    title: "CSS Grid Garden",
    link: "https://cssgridgarden.com/",
    description:
      "A game that teaches you CSS Grid by growing a garden with grid-based layout.",
    tags: ["CSS", "Grid", "Games"],
  },
  {
    id: "16",
    title: "Codecademy: Learn CSS",
    link: "https://www.codecademy.com/learn/learn-css",
    description:
      "An interactive course for learning CSS from the basics to advanced concepts.",
    tags: ["CSS", "Courses"],
  },
  {
    id: "17",
    title: "Coursera: CSS for Beginners",
    link: "https://www.coursera.org/learn/css",
    description: "A beginner-friendly course on CSS available on Coursera.",
    tags: ["CSS", "Courses"],
  },
  {
    id: "18",
    title: "CSS Tricks: Animations",
    link: "https://css-tricks.com/animation/",
    description:
      "A resource for learning about CSS animations with practical examples.",
    tags: ["CSS", "Animations", "Tutorials"],
  },
  {
    id: "19",
    title: "CSS Box Model",
    link: "https://www.smashingmagazine.com/2018/05/css-box-model/",
    description:
      "A detailed explanation of the CSS box model and its implications for layout.",
    tags: ["CSS", "Box Model"],
  },
  {
    id: "20",
    title: "CSS Layouts: The Ultimate Guide",
    link: "https://www.digitalocean.com/community/tutorials/css-layouts-the-ultimate-guide",
    description:
      "An ultimate guide to CSS layouts, exploring various techniques and methodologies.",
    tags: ["CSS", "Layouts"],
  },
  {
    id: "21",
    title: "Frontend Mentor",
    link: "https://www.frontendmentor.io/",
    description:
      "A platform with real-world frontend challenges to improve your CSS skills.",
    tags: ["CSS", "Challenges"],
  },
  {
    id: "22",
    title: "Learn CSS with MDN",
    link: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
    description:
      "Learn CSS with comprehensive tutorials and documentation from MDN.",
    tags: ["CSS", "Documentation", "Tutorials"],
  },
  {
    id: "23",
    title: "CSS Tricks: Pseudo-Elements",
    link: "https://css-tricks.com/pseudo-elements/",
    description:
      "An overview of pseudo-elements in CSS and how to use them effectively.",
    tags: ["CSS", "Pseudo-Elements"],
  },
  {
    id: "24",
    title: "CSS Typography",
    link: "https://css-tricks.com/typography/",
    description:
      "A guide on using CSS to create beautiful typography for web design.",
    tags: ["CSS", "Typography"],
  },
  {
    id: "25",
    title: "Web.dev: CSS",
    link: "https://web.dev/learn/css/",
    description:
      "Google's resource for learning CSS, focusing on modern best practices.",
    tags: ["CSS", "Web Development"],
  },
  {
    id: "26",
    title: "CSS Properties Index",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference",
    description:
      "A comprehensive index of all CSS properties, with descriptions and examples.",
    tags: ["CSS", "Reference"],
  },
  {
    id: "27",
    title: "CSS Tricks: Responsive Design",
    link: "https://css-tricks.com/snippets/css/media-queries-for-standard-devices/",
    description: "A guide to media queries for responsive design in CSS.",
    tags: ["CSS", "Responsive Design"],
  },
  {
    id: "28",
    title: "Smashing Magazine: Responsive Web Design",
    link: "https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/",
    description:
      "Guidelines and best practices for implementing responsive web design.",
    tags: ["CSS", "Responsive Design"],
  },
  {
    id: "29",
    title: "CSS Filters",
    link: "https://css-tricks.com/css-filters/",
    description:
      "Learn about CSS filters and how to apply them to images and elements.",
    tags: ["CSS", "Filters"],
  },
  {
    id: "30",
    title: "CSS Layout with Grid",
    link: "https://css-tricks.com/css-grid-layout/",
    description: "An introduction to CSS Grid layout with practical examples.",
    tags: ["CSS", "Grid", "Layout"],
  },
  {
    id: "31",
    title: "CSS Color Manipulation",
    link: "https://css-tricks.com/color-manipulation-in-css/",
    description:
      "Techniques for manipulating colors in CSS to achieve different effects.",
    tags: ["CSS", "Colors"],
  },
  {
    id: "32",
    title: "CSS Variables Guide",
    link: "https://css-tricks.com/using-css-variables/",
    description:
      "A guide on using CSS custom properties (variables) in your stylesheets.",
    tags: ["CSS", "Variables"],
  },
  {
    id: "33",
    title: "A Beginner’s Guide to CSS",
    link: "https://www.sitepoint.com/beginners-guide-to-css/",
    description:
      "An introduction to CSS for beginners, covering the essentials.",
    tags: ["CSS", "Beginners"],
  },
  {
    id: "34",
    title: "CSS Tricks: Selectors",
    link: "https://css-tricks.com/css-selectors/",
    description:
      "A deep dive into CSS selectors and how to use them effectively.",
    tags: ["CSS", "Selectors"],
  },
  {
    id: "35",
    title: "CSS Guide to Transitions",
    link: "https://css-tricks.com/almanac/properties/t/transition/",
    description:
      "Understanding CSS transitions and how to apply them to elements.",
    tags: ["CSS", "Transitions"],
  },
  {
    id: "36",
    title: "Learn CSS Animations with Web Animations API",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API",
    description:
      "A guide on how to use the Web Animations API to create animations in CSS.",
    tags: ["CSS", "Animations", "Web API"],
  },
  {
    id: "37",
    title: "CSS Cheat Sheet",
    link: "https://htmlcsscolor.com/css-cheat-sheet",
    description: "A handy cheat sheet for common CSS properties and values.",
    tags: ["CSS", "Cheat Sheet"],
  },
  {
    id: "38",
    title: "CSS Tricks: Custom Properties",
    link: "https://css-tricks.com/using-css-custom-properties/",
    description:
      "Learn how to use CSS custom properties for theming and dynamic styles.",
    tags: ["CSS", "Custom Properties"],
  },
  {
    id: "39",
    title: "CSS Optimization Techniques",
    link: "https://www.smashingmagazine.com/2019/07/css-optimization-techniques/",
    description:
      "Techniques for optimizing CSS for better performance and maintainability.",
    tags: ["CSS", "Optimization"],
  },
  {
    id: "40",
    title: "CSS Grid vs Flexbox",
    link: "https://css-tricks.com/css-grid-vs-flexbox/",
    description:
      "A comparison between CSS Grid and Flexbox, explaining their differences and use cases.",
    tags: ["CSS", "Grid", "Flexbox"],
  },
  {
    id: "41",
    title: "CSS Best Practices",
    link: "https://css-tricks.com/css-best-practices/",
    description: "Best practices for writing clean, maintainable CSS.",
    tags: ["CSS", "Best Practices"],
  },
  {
    id: "42",
    title: "CSS Tooling with PostCSS",
    link: "https://postcss.org/",
    description:
      "Learn about PostCSS and how it can improve your CSS development workflow.",
    tags: ["CSS", "Tooling"],
  },
  {
    id: "43",
    title: "CSS Frameworks: A Complete Guide",
    link: "https://www.smashingmagazine.com/2020/02/css-frameworks-complete-guide/",
    description: "An overview of popular CSS frameworks and when to use them.",
    tags: ["CSS", "Frameworks"],
  },
  {
    id: "44",
    title: "CSS Tricks: Backgrounds",
    link: "https://css-tricks.com/css-backgrounds/",
    description: "A guide on how to effectively use backgrounds in CSS.",
    tags: ["CSS", "Backgrounds"],
  },
  {
    id: "45",
    title: "Responsive Web Design Basics",
    link: "https://developers.google.com/web/fundamentals/design-and-ux/responsive",
    description: "Learn the fundamentals of responsive web design using CSS.",
    tags: ["CSS", "Responsive Design"],
  },
  {
    id: "46",
    title: "CSS for JavaScript Developers",
    link: "https://medium.com/@mahmoud_mohamed/css-for-javascript-developers-7484457c3f3c",
    description:
      "A resource tailored for JavaScript developers looking to improve their CSS skills.",
    tags: ["CSS", "JavaScript"],
  },
  {
    id: "47",
    title: "CSS Tricks: Backgrounds",
    link: "https://css-tricks.com/css-backgrounds/",
    description:
      "An extensive guide to CSS backgrounds and how to use them effectively.",
    tags: ["CSS", "Backgrounds"],
  },
  {
    id: "48",
    title: "CSS Layout Fundamentals",
    link: "https://www.sitepoint.com/css-layout-fundamentals/",
    description: "An overview of fundamental CSS layout techniques.",
    tags: ["CSS", "Layouts"],
  },
  {
    id: "49",
    title: "Mastering CSS",
    link: "https://www.udemy.com/course/mastering-css-advanced/",
    description:
      "An advanced course on CSS, covering complex topics and techniques.",
    tags: ["CSS", "Courses"],
  },
  {
    id: "50",
    title: "Web Fundamentals: CSS",
    link: "https://web.dev/css/",
    description:
      "Google's resource for learning about CSS best practices and techniques.",
    tags: ["CSS", "Web Development"],
  },
];

export default cssResources;
