import Head from "next/head"

export interface ISeoProps {
  title: string;
  description: string;
  image: string;
  metas?: any;
}

const Seo = ({ title, description, image, metas }:ISeoProps) => {
  if (metas && metas?.schema) {
    delete metas?.schema
  }
  
  return(
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="image" content={image} />
      { metas && Object.keys(metas)?.map((tag: string) => {
        if (tag !== "article:tag") {
          return (<meta property={tag} key={tag} content={metas[tag]} />)
        }
        else {
          return metas[tag]?.map((_, index) => {
            return (<meta property={tag} key={tag} content={metas[tag][index]?.content} />)
          })
        }
      })}
    </Head>
  )
}

export default Seo
