import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://t3.ftcdn.net/jpg/05/63/76/92/360_F_563769202_XvjMvyMO593Wt70Um2OQPJ5CZrTXbT4t.jpg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
        Lorem ipsum dolor
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Jahanvi </b></span>
            <span className="singlePostAuthor">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nostrum ducimus earum dolores obcaecati incidunt similique, quos aperiam repellendus voluptatibus blanditiis impedit deserunt molestiae quo praesentium aliquid perspiciatis consequatur dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quos! Sed pariatur a sapiente consequatur labore deserunt similique magni incidunt odio. Assumenda excepturi tenetur facilis? Recusandae quia eius deserunt provident!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus laudantium perspiciatis numquam esse, veniam sed. Aliquid numquam veritatis totam praesentium maxime corporis nostrum excepturi nulla, voluptate culpa, sed quae.</p>
      </div>
    </div>
  )
}
