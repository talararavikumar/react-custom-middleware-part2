import WithLoading from "./PhotosWrapper";
import photos from "./photos";
import { connect } from "react-redux";
import { getPhotos } from "../store/actions";
import { useState } from "react";

const PhotoWrapper = WithLoading(photos);

function PhotoContainer(props) {
  // const { isLoading, photos } = props;
  const [isLoading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  return <PhotoWrapper photos={photos} isLoading={isLoading} />;
}

export default PhotoContainer;

// const mapStatetoProps = (state) => {
//   isLoading: state.isLoading;
//   photos: state.photos;
// };

// const mapDispatchToProps = (dispatch) => {
//   loadPhotos: dispatch(getPhotos());
// };

// export default connect(mapStatetoProps, mapDispatchToProps)(PhotoContainer);
