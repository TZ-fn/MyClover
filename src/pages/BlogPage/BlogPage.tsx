import BlogPostsGallery from "components/BlogPostsGallery/BlogPostsGallery";
import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";

function BlogPage() {
  return (
    <>
      <ImageHeader pageName={"Blog"} backgroundImage="src/assets/blog.webp" />
      <ImageDivider isUpwards={false} />
      <BlogPostsGallery />
    </>
  );
}

export default BlogPage;
