type TBlog = {
  id: number;
  title: string;
  date: string; // or use Date type if you want to work with Date objects
  image: string;
  description: string;
};

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="group rounded overflow-hidden shadow-lg bg-white">
      {/* Blog Image */}
      <div className="overflow-hidden h-48">
        <img
          className="w-full group-hover:scale-110 transition-all duration-200 h-48 object-cover"
          src={blog.image}
          alt={blog.title}
        />
      </div>

      {/* Blog Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
        <p className="text-gray-700 text-base mb-4">
          {blog.description.length > 100
            ? `${blog.description.substring(0, 100)}...`
            : blog.description}
        </p>

        {/* Read More Button */}
        <button className="hover:text-primary transition-all duration-200 rounded ">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
