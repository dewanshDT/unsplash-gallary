import React from "react"

interface Props {
  listRef: React.RefObject<HTMLDivElement>
}

const Menue: React.FC<Props> = ({ listRef }) => {
  const scrollLeft = (): void => {
    listRef.current?.scroll({
      left: listRef.current.scrollLeft - 500,
      behavior: "smooth",
    })
  }

  const scrollRight = (): void => {
    listRef.current?.scroll({
      left: listRef.current.scrollLeft + 500,
      behavior: "smooth",
    })
  }

  return (
    <div className="btn-menue">
      <div className="left" onClick={scrollLeft}>
        <svg width="25px" height="25px" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" fill="white" fill-opacity="0.01" />
          <path
            d="M31 36L19 24L31 12"
            stroke="black"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="right" onClick={scrollRight}>
        <svg width="25px" height="25px" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" fill="white" fill-opacity="0.01" />
          <path
            d="M31 36L19 24L31 12"
            stroke="black"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

export default Menue
