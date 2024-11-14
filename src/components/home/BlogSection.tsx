import BlogCard from '../Blog/BlogCard';
import Container from '../Container/Container';

const BlogSection = () => {
  const blogData = [
    {
      id: 1,
      title: 'The Ultimate Guide to Choosing Healthy Pet Food',
      date: '2024-10-15',
      image:
        'https://cdn.prod.website-files.com/62673ae9a0efda3906c2bae5/6323971706b9ddb5bca4d8c7_IMG_4443-241_7wcQfsh49.jpg',
      description:
        "Learn how to choose the best food for your pet's specific needs. From ingredient analysis to portion recommendations, this guide covers everything you need to know to keep your pet healthy and happy.",
    },
    {
      id: 2,
      title: 'Top 5 Training Tips for New Dog Owners',
      date: '2024-10-25',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96wk0ASaa_5G_dilWFb_qYYWs4XydCRXg3g&s',
      description:
        'Are you a new dog parent? These essential training tips will help you build a strong bond with your dog, establish good behaviors, and make the transition to pet ownership smoother and more enjoyable.',
    },
    {
      id: 3,
      title: 'How to Create a Bird-Friendly Home Environment',
      date: '2024-11-02',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1_dNfJzCZHysSVODHg1lgwHlEU3AQ66SBA&s',
      description:
        'Birds need a stimulating and safe environment to thrive. Discover tips and tricks to set up the perfect space for your feathered friends, from cage placement to enrichment activities.',
    },
    {
      id: 4,
      title: 'Caring for Senior Pets: What You Need to Know',
      date: '2024-11-08',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMlSYXZ9lGS697bNQgu4eI0jMJ5kd_YOirg&s',
      description:
        'As pets age, their needs change. This article provides insights on how to care for senior pets, covering topics like dietary adjustments, exercise routines, and regular health checks to ensure they age gracefully.',
    },
  ];

  return (
    <Container>
      <div className="mb-[100px]">
        <h3 className="text-3xl font-semibold">Latest Blog</h3>
        <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogData.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BlogSection;
