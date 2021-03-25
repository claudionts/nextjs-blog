import IPost from "../interfaces/post"

interface IProps {
  data: IPost[];
  size: number;
  pages: number;
}

export const getPosts = async (resolvedUrl:string = ""): Promise<IProps> => {
  resolvedUrl.replace(/\i/gi, "")
  const res = await fetch(`${process.env.API_URL}/posts${resolvedUrl}`)
  return await res.json()
}

export const getPostId = async (postId:string|string[]): Promise<IPost[]> => {
  const res = await fetch(`${process.env.API_URL}/posts/${postId}`)
  return await res.json()
}
