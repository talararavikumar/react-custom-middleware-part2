import PhotoContainer from "./PhotoContainer";

const Photos = (props) => {
  return (
    <>
      {props.photos.map((photo) => (
        <div>{photo.title}</div>
      ))}
    </>
  );
};

export default Photos;
