import * as React from "react"
import Dialog from "../components/modal"

const dateStyles = {
  color: "white",
  WebkitTextFillColor: "white",
  WebkitTextStrokeWidth: "0.5px",
  WebkitTextStrokeColor: "#0C4A6E",
  writingMode: "vertical-rl",
  textOrientation: "mixed",
}

const blockStyles = {
  clipPath: "polygon(18% 3%, 76% 0, 100% 17%, 99% 87%, 72% 98%, 9% 100%, 2% 79%, 0 12%)",
}

const positionList = [
  "justify-start",
  "justify-center",
  "justify-end"
]

const list = [
  {
    name: "Rologram",
    type: "Thesis Project",
    date: "2021.06",
    tag: ["ThesisProject", "Rologram"],
    description: "Master's thesis on software visualisation. Titled 'Exploring Software Evolution with Class Role Stereotype Visualisation'.", 
    tech: ["JavaScript", "Node.js", "Express.js", "Heroku", "Neo4j", "Lodash", "Pug", "SCSS", "Cytoscape.js", "Chartist", "CodeMirror", "Swiper"],
    link: "http://rologram.herokuapp.com",
    code: "https://github.com/kathrynleee/Rologram",
  },
  {
    name: "JabRef",
    type: "Coursework",
    date: "2020.12",
    tag: ["Coursework", "JabRef", "SoftwareEvolution"],
    description: "Enhancements to JabRef, the open source reference management software. Stored the pairs of entries marked as non duplicates in metadata or database. Added filtering options to search results. Modified to allow import of more entries at once.",
    tech: ["Java", "JavaFX"],
  },
  {
    name: "Operator",
    type: "Coursework",
    date: "2020.06",
    tag: ["Coursework", "OperatorApp"],
    description: "Web app designed for operators in amusement park setting. Group project in course Agile Development Processes. Created the initial UI design with InVision. Worked on backend and most of frontend parts.",
    tech: ["Vue.js", "Node.js", "Express.js", "Webpack", "SCSS", "Bootstrap", "MongoDB", "Axios"],
  },
  {
    name: "AmbientAssistedLiving",
    type: "Coursework",
    date: "2020.02",
    tag: ["Coursework", "AmbientAssistedLiving", "MQTT"],
    description: "Web app with MQTT simulating ambient assisted living.",
    tech: ["Eclipse Mosquitto", "JavaScript", "CSS"],
    code: "https://github.com/kathrynleee/aal",
  },
  {
    name: "Dictionary",
    type: "Personal Project",
    date: "2019.03",
    tag: ["PersonalProject", "Ordbok", "SelfDefinedDictionary"],
    description: "Self defined dictionary for learning new language.",
    tech: ["Java", "Spring", "MySQL", "MyBatis", "JSP", "jQuery", "Bootstrap", "Tomcat"],
    code: "https://github.com/kathrynleee/ordbok",
  },
  {
    name: "AlgebraMaze",
    type: "Coursework",
    date: "2018.04",
    tag: ["Coursework", "AlgebraMaze", "AndroidGame"],
    description: "Enhancements to an existing mathematics learning mobile game on Android platform.",
    tech: ["C#", "Unity"],
  },
]

const getColour = (type) => {
  switch(type) {
    case "Thesis Project":
      return {
        background: "bg-gray-400",
        title: "text-yellow-200",
        text: "text-yellow-100",
        tech: "bg-gray-600",
      }
    case "Personal Project":
      return {
        background: "bg-yellow-200",
        title: "text-gray-600",
        text: "text-gray-500",
        tech: "bg-yellow-50",
      }
    case "Coursework":
    default:
      return {
        background: "bg-green-700",
        title: "text-pink-200",
        text: "text-pink-100",
        tech: "bg-green-900",
      }
  }
}

const Blocks = (props) => {
  return (
    <div>
      {
        list.map(item => (
          <section className={"outer py-8 flex flex-row " + positionList[Math.floor(Math.random() * positionList.length)]} data-sal="slide-up" data-sal-delay="100" data-sal-easing="easeOutCubic">
            <div style={blockStyles} className={"relative z-0 py-8 px-5 sm:px-10 " + getColour(item.type).background}>
              <div className="max-w-3xl max-h-xl md:grid md:grid-cols-4 md:grid-rows-3 p-6">
                <div className={"tags font-bold text-base md:text-3xl md:col-span-4 " + getColour(item.type).title}>
                  {item.tag.map(tag => (
                    <div>#{tag}</div>
                  ))}
                </div>
                <div className="icons pt-4 pb-10 md:py-0 md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-2 md:pt-8">
                  <Dialog images={props.images.allFile.edges.filter(node => node.node.relativeDirectory === "projects/" + item.name )} code={item.code} link={item.link} />
                </div>
                <div className={"description text-xs md:text-base font-medium md:col-span-2 md:row-span-2 md:pt-8 " + getColour(item.type).text}>
                  <div className="md:pb-8">{item.description}</div>
                  <div className="tech text-xs md:text-sm font-medium">
                    <div className="flex flex-wrap pt-6">
                      {item.tech.map(tech => (
                        <div className={"rounded py-1 px-2 m-0.5 " + getColour(item.type).tech}>{tech}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={dateStyles} className="-ml-4 md:-ml-5 relative z-10 text-2xl md:text-4xl font-bold text-center opacity-50">{item.date}</div>
          </section>
        ))
      }
    </div>
  )
}

export default Blocks