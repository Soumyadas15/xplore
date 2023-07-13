// import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import '../styles/Featured.css';

export default function Featured({ type }) {
  return (
    <div className="featured">
      <img
        src="https://source.unsplash.com/2GHCdtW45Uw"
        alt=""
      />
      <div className="info">
        <h2 classname = 'featured-dest'>
          Featured destination
        </h2>
        <h1 className="place">
          Kolkata
        </h1>
        <span className="desc">
           Emerge yourself in the land of dense and vibrant forests. This small place in India has a lot to captivate its tourists.
        </span>
      </div>
    </div>
  );
}
