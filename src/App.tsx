import axios, { AxiosResponse } from "axios"
import React, { useEffect, useState, useRef } from "react"
import CardList from "./components/CardList"
import Header from "./components/Header"
import Menue from "./components/Menue"
import "./styles/App.css"

export interface Image {
  id: string
  url: string
  downloadURL: string
  likes: number
  user: {
    instagram: string
    profileImageURL: string
    name: string
  }
}

const App: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(false)
  const [images, setImages] = useState<Array<Image>>([])
  const listRef = useRef<HTMLDivElement>(null)

  const getRandomImages = async () => {
    setLoading(true)
    const random = Math.floor(Math.random() * 10) + 3
    try {
      const res: AxiosResponse = await axios.get(
        `https://api.unsplash.com/photos/random?count=${random}&client_id=MrsptAEkuNtiOj9sakWFD9PmsE7roU5qo4Zub6CQgSk&client_secret=F19zKmUGoRQy1QY-FfEodfvh6jKPORIaDZLM7GHL_Nw`
      )
      console.log(res.data)
      const imageArr = res.data?.map(
        (img: {
          id: string
          urls: { regular: string }
          likes: number
          links: { download: string }
          user: {
            instagram_username: string
            profile_image: { small: string }
            name: string
          }
        }) => {
          const newImage: Image = {
            id: img.id,
            url: img.urls.regular,
            likes: img.likes,
            downloadURL: img.links.download,
            user: {
              instagram: img.user.instagram_username,
              profileImageURL: img.user.profile_image.small,
              name: img.user.name,
            },
          }
          return newImage
        }
      )
      setImages(imageArr)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRandomImages()
  }, [])

  return (
    <div className="App">
      <Header getRandomImages={getRandomImages} />
      <CardList images={images} listRef={listRef} loading={loading} />
      <Menue listRef={listRef} />
    </div>
  )
}

export default App
