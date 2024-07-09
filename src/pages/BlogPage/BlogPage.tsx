import BlogPostsGallery from "components/BlogPostsGallery/BlogPostsGallery";
import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import PageTitle from "components/PageTitle/PageTitle";
import blogBg from "assets/blog.webp";

function BlogPage() {
  return (
    <>
      <PageTitle title="Blog" />
      <ImageHeader pageName={"Blog"} backgroundImage={blogBg} />
      <ImageDivider isUpwards={false} />
      <BlogPostsGallery />
    </>
  );
}

export default BlogPage;
