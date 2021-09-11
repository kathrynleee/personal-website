import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css"
import CircularProgress from "@material-ui/core/CircularProgress"

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
      onMove={(prev, next) => {
        if(next === 0) {
          document.querySelector(".splide__arrow--prev").style.display = "none"
        } else if(next === props.images.length - 1) {
          document.querySelector(".splide__arrow--next").style.display = "none"
        } else {
          document.querySelector(".splide__arrow--prev").style.display = "block"
          document.querySelector(".splide__arrow--next").style.display = "block"
        }
      }}
    >
      {props.images.map(image => (
        <SplideSlide>
          <div className="flex justify-center h-full max-h-full">
            <div className="h-full max-h-full">
              <div className="center absolute">
                <CircularProgress />
              </div>
              <GatsbyImage imgStyle={{ objectFit: "contain" }} alt={image.node.name} image={getImage(image.node.childImageSharp)} width={image.node.childImageSharp.gatsbyImageData.width} height={image.node.childImageSharp.gatsbyImageData.height} /> 
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  )
}

export default Slideshow