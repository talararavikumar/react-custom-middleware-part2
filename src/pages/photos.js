const Photos = () => {
  return (
    <>
      {this.props.photos.map((photo) => (
        <div>{photo.title}</div>
      ))}
    </>
  );
};

export default Photos;
