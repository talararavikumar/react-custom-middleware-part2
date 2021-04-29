import WithLoading from "./PhotosWrapper";
import photos from "./photos";
import { connect, useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../store/actions";
import { useState } from "react";

const PhotoWrapper = WithLoading(photos);

function PhotoContainer(props) {
  const { isLoading, photos } = useSelector((state) => state);
  console.log(`isLoading : ${isLoading} photos: ${photos}`);
  const dispatch = useDispatch();
  function getPhotosFromDB() {
    dispatch(getPhotos());
  }
  // const [isLoading, setLoading] = useState(true);
  // const [photos, setPhotos] = useState([]);

  return (
    <>
      <PhotoWrapper photos={photos} isLoading={isLoading} />
      <button onClick={getPhotosFromDB}>dispatch action</button>
    </>
  );
}

export default PhotoContainer;

// const mapStatetoProps = (state) => ({
//   isLoading: state.isLoading,
//   photos: state.photos
// });

// const mapDispatchToProps = (dispatch) => ({
//   loadPhotos: (photos) => dispatch(getPhotos())
// });

// export default connect(mapStatetoProps, mapDispatchToProps)(PhotoContainer);
