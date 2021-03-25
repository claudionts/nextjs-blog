import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import IPost from '../../interfaces/post'
import { getPostId, getPosts, IAllPosts } from '../../lib/posts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const DynamicHeader = dynamic(() => import("../../components/header"))
const DynamicDescriptionPost = dynamic(() => import("../../components/descriptionPost"))
const DynamicInteressPostSection = dynamic(() => import("../../components/interessPostSection"))
const DynamicInteressPostSideSection = dynamic(() => import("../../components/interessPostSideSection"))
const DynamicFooter = dynamic(() => import("../../components/footer"))

interface IProps {
  post: IPost
}

const Post = ({ post }:IProps) => {
  const [showBibliography, setShowBibliography] = useState(true);
  const handlerBibliography = () => {
    setShowBibliography(!showBibliography)
  }

  return (
    <>
      <DynamicHeader
        title={post?.title}
        description={post?.headline}
        image={post?.featured_media?.thumbnail}
        metas={post?.metas}
      />
      <section className="grid grid-cols-12 gap-4 mt-2">
        <div className="py-2 text-right" />
        <div className="py-8 text-right col-start-3 col-end-10">
          <h1 className="post-title">{post?.title}</h1>
          <DynamicDescriptionPost post={post} />
          <div className="text-justify" dangerouslySetInnerHTML={{ __html: post?.content }} />
          <div className="pt-10 text-left">
            <button
              onClick={handlerBibliography}
              className="rounded-lg py-2 px-3 bg-green-500 hover:bg-green-700"
            >
              <span className="p-2">Bibliografía</span>
              { showBibliography ? <FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faMinus} />}
            </button>
            <div hidden={showBibliography} className="m-10 text-justify border border-gray-200 p-10" dangerouslySetInnerHTML={{ __html: post?.bibliography }} />
          </div>
          <div className="p-10 text-center border border-gray-200 p-10 m-10">
            <img src={post?.author?.picture} width={100} alt={post?.author?.profession}/>
            <span className="ml-10 text-1xl font-bold">{post?.author?.name}</span>
            <div className="text-justify" dangerouslySetInnerHTML={{ __html: post?.author?.description }} />
          </div>
          <DynamicInteressPostSection interessPosts={post?.previous_posts} />
        </div>
        <div className="py-2 col-start-10 col-end-12 text-right">
          <DynamicInteressPostSideSection interessPosts={post?.next_posts} />
        </div>
      </section>
      <DynamicFooter />
    </>
  )
}

export const getStaticPaths: any = async () => {
  const pathsId = []
  const allPosts: IAllPosts = await getPosts()
  for (let i = 1; i <= allPosts.pages; i++) {
    const postsForPage = await getPosts(`?page=${i}`)
    const currentPaths = postsForPage.data.map((post: IPost) => ({ params: { id: String(post.id) } }))
    pathsId.concat(...currentPaths)
  }

  return {
    paths: pathsId,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params  }) => {
  const post = await getPostId(params?.id)
  return {
    props: {
      post
    },
    revalidate: 7200,
  }
}

export default Post
