
export default function Post({post}) {
    return (
        <div className="card">
      <h2> {post.title}  </h2>
        <p>  {post.body} </p>
        <p>  {post.id} </p>
        <p>  {post.userId} </p>
        </div>
    )
}