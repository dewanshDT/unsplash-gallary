import React from "react"
import { Image } from "../App"
import Card from "./Card"

interface Props {
  images: Array<Image>
}

const CardList: React.FC<Props> = ({ images }) => {
  return (
    <div className="card-list">
      {images.map((img: Image) => (
        <Card image={img} />
      ))}
    </div>
  )
}

export default CardList
