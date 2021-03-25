import IPost from "../interfaces/post"

interface IProps {
  interessPosts: IPost[]
}

const InteressPostSection = ({ interessPosts }: IProps) => (
  <section className="interess-post-section">
    <div className="text-left">
      <span className="interess-post-title">ARTÍCULOS INTERESANTES</span>
      <div className="grid grid-cols-2 gap-4">
        {interessPosts?.map((post: IPost) => (
          <div className="py-12 text-center" key={post?.id}>
            <div className="py-8 px-8 max-w-sm mx-auto space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <article >
                <a href={`/posts/${post?.id}`}>
                  <img src={post?.featured_media?.medium_large} width="314" height="220" alt={post?.title}/>
                  <div className="text-left mt-2">
                    <span className="font-normal text-pink-700 text-sm">{post?.title}</span>
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-black-900 text-sm">{post?.excerpt}</span>
                  </div>
                </a>
              </article>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default InteressPostSection
