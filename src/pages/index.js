import * as React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Blocks from "../components/blocks"

const IndexPage = ({data}) => {
  return (
    <main className="h-full px-3 pb-10 font-mono bg-blue-900 select-none cursor-default xl:px-20 2xl:px-60">
      <title>Kathryn's Portfolio</title>
      <Header />
      <Blocks images={data}/>
    </main>
  )
}

export default IndexPage

export const query = graphql`
  query Screenshots {
    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
      edges {
        node {
          name
          relativePath
          relativeDirectory
          childImageSharp {
            gatsbyImageData(
              quality: 90
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`