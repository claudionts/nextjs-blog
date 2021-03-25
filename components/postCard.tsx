import IPost from "../interfaces/post"
import Link from 'next/link'

interface IProps {
  posts: {
    data: IPost[]
  }
}

const PostCard = ({ posts: { data } }: IProps) => {
  return (
    <div className="grid grid-cols-3">
      {
        data?.map((post: IPost) => (
          <div className="py-12 text-center" key={post.id}>
            <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={post?.featured_media?.thumbnail} alt={post?.title} />
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                  <p className="text-lg text-black font-semibold">
                    {post?.title}
                  </p>
                  <p className="text-gray-500 font-medium">
                    {post?.headline}
                  </p>
                </div>
                <Link href={`/posts/${post?.id}`}>
                  <button className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                    Leer más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default PostCard
