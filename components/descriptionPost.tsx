import locale from 'date-fns/locale/es';
import dateFnsFormat from 'date-fns/format';
import IPost from '../interfaces/post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  post: IPost
}

const DescriptionPost = ({ post }: IProps) => (
  <>
    <div className="pb-3 text-left" >
      {post?.categories?.map((categorie) => (
      <button key={categorie?.id} className="ring-4 ring-green-500 bg-green-500 hover:bg-green-700  rounded-full text-xs text-white font-bold">
        {categorie?.name}
      </button>
    ))}
    </div>
    {post?.published && (
      <div className="text-left text-sm pb-4">
        <FontAwesomeIcon icon={faClock} />
        <span className="m-4 text-black">{dateFnsFormat(new Date(post?.published), "dd MMM, yyyy", { locale })}</span>
      </div>
    )}
  </>
)

export default DescriptionPost
