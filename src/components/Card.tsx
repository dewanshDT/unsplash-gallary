import React from "react"
import { Image } from "../App"

interface Props {
  image: Image
}

const Card: React.FC<Props> = ({ image }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={image.url} />
        <div className="placeholder"></div>
      </div>
      <div className="info">
        <a
          href={`https://www.instagram.com/${image.user.instagram}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="profile-image">
            <img src={image.user.profileImageURL} />
          </div>
        </a>
        <div className="profile">
          <div className="name">{image.user.name}</div>
          <div className="likes">{image.likes} likes</div>
        </div>
        <a href={image.url} download className="btn-circle">
          <svg x="0px" y="0px" viewBox="0 0 485 485">
            <g>
              <g>
                <path d="M426.5,458h-368C51,458,45,464,45,471.5S51,485,58.5,485h368c7.5,0,13.5-6,13.5-13.5S434,458,426.5,458z" />
                <path
                  d="M233,378.7c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l107.5-107.5c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0L256,336.5v-323
			C256,6,250,0,242.5,0S229,6,229,13.5v323l-84.4-84.4c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1L233,378.7z"
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Card
