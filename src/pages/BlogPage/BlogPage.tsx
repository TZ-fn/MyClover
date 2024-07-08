import BlogPostsGallery from "components/BlogPostsGallery/BlogPostsGallery";
import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import blogBg from "assets/blog.webp";

function BlogPage() {
  return (
    <>
      <ImageHeader pageName={"Blog"} backgroundImage={blogBg} />
      <ImageDivider isUpwards={false} />
      <BlogPostsGallery />
    </>
  );
}

export default BlogPage;
