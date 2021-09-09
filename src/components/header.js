import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const titleStyles = {
  color: "white",
  WebkitTextFillColor: "white",
  WebkitTextStrokeWidth: "0.5px",
  WebkitTextStrokeColor: "#0C4A6E",
  textShadow: "1px 1px 0px #D9E2EB",
}

const Header = () => {
  return (
    <div className="p-10">
      <div style={titleStyles} className="text-center text-3xl md:text-5xl font-bold text-white">Kathryn's Portfolio</div>
      <div className="flex flex-row justify-center py-2">
        <div className="w-6 h-6 md:w-8 md:h-8 mx-2 transform hover:scale-150">
          <a href="https://www.linkedin.com/in/kathrynleee/" rel="noreferrer" target="_blank">
            <StaticImage src="../images/icons/linkedin.png" width={50} height={50} />
          </a>
        </div>
        <div className="w-6 h-6 md:w-8 md:h-8 mx-2 transform hover:scale-150">
          <a href="https://github.com/kathrynleee" rel="noreferrer" target="_blank">
            <StaticImage src="../images/icons/github.png" width={50} height={50} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header