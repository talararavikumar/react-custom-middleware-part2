import PhotoContainer from "./PhotoContainer";

const Photos = (props) => {
  return (
    <>
      {props.photos.map((photo) => (
        <div key={photo.title}>{photo.title}</div>
      ))}
    </>
  );
};

export default Photos;
