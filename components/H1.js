import { storyblokEditable } from "@storyblok/react";
 
const H1 = ({ blok }) => {
  return <h1 {...storyblokEditable(blok)}>{blok['heading_text']}</h1>;
};
 
export default H1;