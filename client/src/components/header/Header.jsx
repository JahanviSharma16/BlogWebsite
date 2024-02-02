import "./header.css"
export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img  className="headerImg" src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-green-field-scenery-free-photo.jpg?w=600&quality=80" alt="image" />
    </div>
  )
}
