import { style } from "@vanilla-extract/css";

const documentBannerContainer = style({
  position: "relative",
  overflow: "hidden",

  display: "grid",
  gridTemplateRows: "1fr ifr",
  gridGap: 8,

  padding: 8,
  borderRadius: 8,
  boxShadow: `0 0 ${8} 0 rgba(0, 0, 0, 0.2)`,

  backgroundColor: "red",
});

const documentBannerHeadingParagraph = style({
  fontWeight: 5,
});

const documentBannerTextContainer = style({
  display: "grid",
  gridGap: 5,
  gridTemplateRows: "repeat(max-content))",

  marginBlock: "auto",
  zIndex: 1,
});

const documentBannerImageContainer = style({
  zIndex: 1,
  margin: "auto",
});

const documentImageBorder = style({
  boxShadow: `0 0 ${5} 0 rgba(0, 0, 0, 0.2)`,
  margin: "auto",
});

const documentBannerButtonContainer = style({
  fontWeight: 5,
});

export const documentBanner = {
  container: documentBannerContainer,
  headingParagraph: documentBannerHeadingParagraph,
  textContainer: documentBannerTextContainer,
  imageContainer: documentBannerImageContainer,
  buttonContainer: documentBannerButtonContainer,
  imageBorder: documentImageBorder,
};
