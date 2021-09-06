import styled from "styled-components";
import Title from "../../Components/Title";
import blogs from "../../data/blogData";
import { InnerLayout, MainLayout } from "../../styles/Layout";


const Blog = () => {
  return (

        <MainLayout>
            <BlogStyled>
                <Title title={'BlogPosts'} span={'BlogPosts'}/>
                <InnerLayout className={"blog"}>
                {blogs.map((blog) => {
                    return (
                        <div key={blog.id} className={"blog"}>
                            <div className="image">
                                 <img src={blog.image} alt="blogpost" />
                                 <h4>{blog.title}</h4>
                            </div>
                            
                           
                        </div>
        );

      })}
       </InnerLayout>
            </BlogStyled>
        </MainLayout>
  );
};

const BlogStyled = styled.div`
    .blog {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
     grid-gap: 6rem;
    }
    .image {
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

export default Blog;