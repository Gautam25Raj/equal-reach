import {
  HandRaisedIcon as Like,
  ChatBubbleBottomCenterIcon as ChatAlt2Icon,
  ArrowUpTrayIcon as UploadIcon,
  ArrowsRightLeftIcon as SwitchHorizontalIcon,
} from '@heroicons/react/24/outline';

import Comment from './Comment';
import PostContent from './PostContent';

interface PostProps {
  post: Record<string, any>;
}

const Post = ({ post }: PostProps) => {
  const image = true;
  const { body, comments, createdAt, id, likes, user, userId } = post;

  return (
    <div className="flex flex-col space-x-3 border-y border-gray-200 p-5">
      <PostContent userId={userId} image={image} userData={user} body={body} />

      <div className="mt-5 flex justify-between">
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <Like className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
        </div>

        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <ChatAlt2Icon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
          <p>{comments?.length}</p>
        </div>

        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <SwitchHorizontalIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
        </div>

        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <UploadIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
        </div>
      </div>

      {comments?.length > 0 && <Comment comments={comments} />}
    </div>
  );
};
export default Post;
