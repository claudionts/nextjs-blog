import IPost from "../interfaces/post"

interface IProps {
  interessPosts: IPost[]
}

const InteressPostSideSection = ({ interessPosts }: IProps) => (
  <section className="interess-post-side-section">
    <div className="text-left">
      <span className="interess-post-side-title">ARTÍCULOS INTERESANTES</span>
      <div className="grid">
        {interessPosts?.map((post: IPost) => (
          <div className="text-justify" key={post?.id}>
            <div className="pl-2 max-w-sm mx-auto space-y-2 sm:py-4 sm:flex sm:items-justify">
              <article >
                <a href={`/posts/${post?.id}`}>
                  <img src={post?.featured_media?.medium_large} width="314" height="220" alt={post?.title} />
                  <div className="text-left mt-2">
                    <span className="font-normal text-sm font-black">{post?.title}</span>
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

export default InteressPostSideSection
