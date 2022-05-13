import React from "react"
import { Image } from "../App"
import Card from "./Card"

interface Props {
  images: Array<Image>
  listRef: React.RefObject<HTMLDivElement>
  loading: Boolean
}

const CardList: React.FC<Props> = ({ images, listRef, loading }) => {
  return (
    <div
      className="card-list"
      ref={listRef}
      style={{ display: loading && "none" }}
    >
      {images.map((img: Image) => (
        <Card image={img} key={img.id} />
      ))}
    </div>
  )
}

export default CardList
