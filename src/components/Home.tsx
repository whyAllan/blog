import  getHomeStrings from "../strings/pages/home"
import { useState } from "react";
import type { Home } from "../utils/interfaces";
import NotFound from "./NotFound";



export default function Home({ language }: { language: string }) {

  const [homeStrings, setHomeStrings] = useState<Home>()

  if(!homeStrings) setHomeStrings(getHomeStrings(language))
   

  return (
    <>
      
      {homeStrings ? <div>{homeStrings.intro}</div> : NotFound}

    </>
  );
}
