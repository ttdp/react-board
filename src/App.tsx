import { useMemo, useState } from "react"
import { getRandomImage } from "./utils/image"
import clsx from "clsx"

import Header from "./components/Header"

function App() {

  const randImg = useMemo(
    () => getRandomImage({ seeds: ["wallpaper", "nature", "abstract"] }),
    []
  )

  return (
    <div
      className={clsx(
        "App flex flex-col min-h-screen bg-cover bg-center",
        false && "dark"
      )}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${randImg})`,
      }}>
      <Header title="Agiee Board" />
    </div>
  )
}

export default App
