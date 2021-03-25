import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import Seo, { ISeoProps } from "./seo"

const Header = (props: ISeoProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchRelevance, setSearchRelevance] = useState(false)
  const router = useRouter()

  const searchArticles = () => {
    let query = `/?search=${searchTerm}&`
    if (searchRelevance) {
      query = `${query}orderby=relevance`
    }
    router.push(query)
  }

  const changeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const changeSearchRelevance = () => {
    setSearchRelevance(!searchRelevance)
  }

  return (
    <>
      <Seo {...props} />
      <header className="header">
        <div className="grid grid-cols-3">
          <div className="py-6 text-center">
            <Link href="/">
              <a className="text-3xl font-bold title-header">Translation, Inc</a>
            </Link>
          </div>
          <div className="py-6 text-center" />
          <div className="py-6 grid-rows-2 text-center">
            <div>
              <input type="text" onChange={changeSearchTerm} placeholder=" Buscar" className="mt-2" />
              <FontAwesomeIcon className="ml-4" onClick={searchArticles} icon={faSearch} />
            </div>
            <div className="m-2">
              <input type="checkbox" id="relevance" name="relevance" onChange={changeSearchRelevance} checked={searchRelevance} className="mr-2" />
              <label>Filtrar por relevancia</label>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
