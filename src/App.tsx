import axios, { AxiosResponse } from "axios"
import React, { useEffect, useState } from "react"
import CardList from "./components/CardList"
import Header from "./components/Header"
import "./styles/App.css"

export interface Image {
  id: string
  url: string
  downloadURL: string
  likes: number
  user: {
    url: string
    profileImageURL: string
    name: string
  }
}

const App: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(false)
  const [images, setImages] = useState<Array<Image>>([])

  const getRandomImages = async () => {
    setLoading(true)
    const random = Math.floor(Math.random() * 20 + 4)
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
            links: { self: string }
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
              url: img.user.links.self,
              profileImageURL: img.user.profile_image.small,
              name: img.user.name,
            },
          }
          return newImage
        }
      )
      setImages(imageArr)
      setLoading(false)
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
      <CardList images={images} />
    </div>
  )
}

export default App
