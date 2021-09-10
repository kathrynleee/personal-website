import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css"

const Slideshow = (props) => {
  if (typeof window === "undefined") {
    return <p>Server Render</p>
  }
  return(
    <Splide
      options={{
        autoplay: true,
        interval: "3000",
        width: "90%",
        height: "80%",
        gap: "1rem",
      }}
      hasSliderWrapper
    >
      {props.images.map(image => (
        <SplideSlide>
          <div className="flex justify-center h-full max-h-full">
            <div className="h-full max-h-full">
              <GatsbyImage imgStyle={{ objectFit: "contain" }} alt={image.node.name} image={getImage(image.node.childImageSharp)} width={image.node.childImageSharp.gatsbyImageData.width} height={image.node.childImageSharp.gatsbyImageData.height} /> 
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  )
}

export default Slideshow