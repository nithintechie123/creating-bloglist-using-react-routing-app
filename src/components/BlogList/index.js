import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogDetails} = props

  return (
    <ul className="blog-items-container">
      {blogDetails.map(eachBlog => (
        <BlogItem key={eachBlog.id} eachBlogDetails={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
