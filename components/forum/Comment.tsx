import TimeAgo from 'react-timeago';
import Image from 'next/image';

interface CommentsProps {
  comments: Array<string>;
}

const Comment = ({ comments }: CommentsProps) => {
  return (
    <div className="my-2 mt-5 max-h-60 space-y-5 no-scrollbar no-scrollbar::-webkit-scrollbar overflow-y-scroll border-t border-gray-100 p-5">
      {comments.map((comment, i) => (
        <div key={i} className="relative flex space-x-2">
          <hr className="absolute left-5 top-9 h-8 border-x border-twitter/30" />

          <Image
            src="/favicon.ico"
            alt="Post Image"
            className="mt-1 h-7 w-7 rounded-full object-cover"
            width={28}
            height={28}
          />

          <div>
            <div className="flex items-center space-x-1">
              <p className="mr-1 font-bold">Gautam Raj</p>
              <p className="hidden text-sm text-gray-500 lg:block">
                noober_boy
              </p>

              {/* <TimeAgo className="text-sm text-gray-500" date={new Date()} /> */}
            </div>

            <p>{comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Comment;
