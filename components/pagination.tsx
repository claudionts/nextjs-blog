import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"

interface IProps {
  pages: number,
  size: string
}

const Pagination = ({ pages, size }: IProps) => {
  const router = useRouter()
  const query = router?.query
  const [pageNumbers, setPageNumbers] = useState([])

  const definePageNumbers = async (page: number) => {
    const arrNumbers = []
    if (page === pages) {
      for (let i = (pages - 4); i <= pages; i++) {
        arrNumbers.push(i)
      }
    } else {
      for (let i = page; i <= (page + 4); i++) {
        arrNumbers.push(i)
      }
    }
    await setPageNumbers(arrNumbers)
  }

  const redirectPage = (value: number) => {
    let query: string = `?page=${value}&`
    if (router?.query?.search) {
      query = `${query}search=${router?.query?.search}&`
    }
    if (router?.query?.orderby) {
      query = `${query}orderby=${router?.query?.orderby}`
    }
    router.push(query)
  }

  useEffect(() => {
    const currentPage: string | string[] = (query?.page) ? query?.page : "1";
    definePageNumbers(Number(currentPage));
  }, [query?.page, pages, size])

  return (
    <section className="grid grid-cols-1 justify-items-center">
      <div className="py-12">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap">
            {(query?.page && query?.page !== "1") && (
              <li>
                <button
                  onClick={() => redirectPage(Number(query?.page) - 1)}
                  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blue-500 bg-white text-blue-500"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </li>
            )}
            {pageNumbers.map(num => (
              <li key={num}>
                <button
                  onClick={() => redirectPage(num)}
                  className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blue-500 text-blue-500 ${(num === Number(query?.page)) ? "bg-gray-300" : "bg-white"}`}
                >
                  {num}
                </button>
              </li>
            ))}
            {(query?.page && Number(query?.page) !== pages) && (<li>
              <button
                onClick={() => redirectPage(Number(query?.page) + 1)}
                className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blue-500 bg-white text-blue-500"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </li>)}
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Pagination
