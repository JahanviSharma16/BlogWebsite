import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum, dolor sit 
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quisquam mollitia at suscipit reprehenderit officiis corrupti sit magni ipsam modi culpa itaque tempore repellendus, nesciunt neque in voluptatum a obcaecati.</p>

    </div>

  )
}
