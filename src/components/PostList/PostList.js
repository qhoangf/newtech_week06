import './PostList.css'
function PostList({ posts, onDelete }) {
  return (
    <div>
      <h2>Danh Sách Bài Viết</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>Tiêu đề: {post.title}</h3>
            <p>{post.content}</p>
            <button >
              <a href={`/edit/${post.id}`}>Chỉnh sửa</a>
            </button>
            <button >
              <a href={`/comment/${post.id}`}>Comment</a>
            </button>
            <button onClick={() => onDelete(post.id)}>Xóa</button>
            
          </li>
        ))} 
      </ul>
    </div>
  );
}

export default PostList;
