import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Slideshow from "../components/slideshow"
import Modal from "@material-ui/core/Modal"

export default (props) => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <div className="flex flex-row md:flex-col">
        <div onClick={handleOpen} className="w-8 h-8 mr-2 md:w-10 md:h-10 md:mr-0 md:mb-px cursor-pointer transform hover:scale-150">
          <StaticImage src="../images/icons/photo-library.png" width={50} height={50} />
        </div>
        {
          props.code &&
          <div className="w-9 h-9 mr-2 md:w-11 md:h-11 md:mr-0 md:mb-px cursor-pointer transform hover:scale-150">
            <a href={props.code} rel="noreferrer" target="_blank">
              <StaticImage src="../images/icons/code.png" width={60} height={60} />
            </a>
          </div>
        }
        {
          props.link &&
          <div className="w-8 h-8 mr-2 md:w-10 md:h-10 md:mr-0 md:mb-px cursor-pointer transform hover:scale-150">
            <a href={props.link} rel="noreferrer" target="_blank">
              <StaticImage src="../images/icons/link.png" width={50} height={50} />
            </a>
          </div>
        }
      </div>
      <Modal open={open} onClose={handleClose} aria-labelledby="title" aria-describedby="description">
        <Slideshow images={props.images}/>
      </Modal>
    </div>
  )
}