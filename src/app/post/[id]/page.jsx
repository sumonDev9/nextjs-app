import { FaFacebook, FaTwitter, FaInstagram, FaThumbsUp, FaComment } from 'react-icons/fa';


const PostDateails = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* post dated */}
      <div className="px-6 py-4 border-b border-gray-200">
        <span className="text-base text-gray-500">Posted on {new Date().toLocaleDateString()}</span>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 p-6">{post.title}</h1>

        {/* Body */}
        <div className="p-6 space-y-4">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{post.body}</p>
        </div>
        {/* Footer (optional) */}
        <div className='flex justify-between items-center border-t border-gray-200'>

          {/* Like and Comment Section */}
          <div className="px-6 py-4 ">
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-blue-400">
                <FaThumbsUp className="mr-2" /> Like
              </button>
              <button className="flex items-center text-gray-600 hover:text-gray-800">
                <FaComment className="mr-2" /> Comment
              </button>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="flex space-x-4">
            <button className="flex items-center text-blue-500 hover:text-blue-700">
              <FaFacebook className="mr-2" />
            </button>
            <button className="flex items-center text-blue-400 hover:text-blue-600">
              <FaTwitter className="mr-2" />
            </button>
            <button className="flex items-center text-pink-500 hover:text-pink-700">
              <FaInstagram className="mr-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDateails;