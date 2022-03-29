import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
        <div className="yaro"><h2>404</h2>
        <h3>Page not found</h3>
        <p>The page you are looking for doesn't exist </p>
        <Link to="/">Go back to Homepage</Link>
        </div>
        <img src="./images/scared.jpg" alt=""/>
    </div>
  )
}

export default NotFound