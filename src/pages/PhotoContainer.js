import WithLoading from "./PhotosWrapper";
import photos from "./photos";
import { connect } from "react-redux";
import { getPhotos } from "../store/actions";

const PhotoWrapper = WithLoading(photos);

function PhotoContainer(props) {
  const { isLoading, photos } = props;

  return <PhotoWrapper photos={photos} isLoading={isLoading} />;
}

// const mapStatetoProps = (state) => {
//   isLoading: state.isLoading;
//   photos: state.photos;
// };

// const mapDispatchToProps = (dispatch) => {
//   loadPhotos: dispatch(getPhotos());
// };

// export default connect(mapStatetoProps, mapDispatchToProps)(PhotoContainer);
