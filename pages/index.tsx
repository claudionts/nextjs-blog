import dynamic from 'next/dynamic'
import { getPosts } from "../lib/posts"
import { GetServerSideProps } from 'next'

const DynamicPostSection = dynamic(
  () => import("../components/postCard"),
  { loading: () => <span>Loading...</span> }
)

const DynamicPagination = dynamic(() => import("../components/pagination"))
const DynamicHeader = dynamic(() => import("../components/header"))
const DynamicFooter = dynamic(() => import("../components/footer"))

export default function Home({ posts }) {
  return (
    <>
      <DynamicHeader
        title="Translation, Inc"
        description="Sitio de noticias saludables"
        image={`https://og-image.vercel.app/${encodeURI("Translation, Inc")}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      {posts?.data?.length > 0 ? (
        <DynamicPostSection posts={posts} />
      ) : (
        <div className="grid grid-cols-1 text-center md:divide-y-8">
          <span className="text-2xl font-bold py-48">¡No hay artículos relacionados con el término de búsqueda!</span>
        </div>
      )}
      <DynamicPagination pages={posts?.pages} size={posts?.size} />
      <DynamicFooter />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ resolvedUrl }) => {
  const posts = await getPosts(resolvedUrl)
  return {
    props: {
      posts
    }
  }
}
