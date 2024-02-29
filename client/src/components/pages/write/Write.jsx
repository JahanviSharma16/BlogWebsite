import "./write.css"

export default function Write() {
  return (
    <div className="write">
    <img className="writeImg" src="https://english.columbian.gwu.edu/sites/g/files/zaxdzs4551/files/2022-03/read-our-blog.jpg" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
        <label htmlFor="fileInput">
        <i className="writeIcon fa-solid fa-plus"></i>
        </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
