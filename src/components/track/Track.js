// Here we use the redistorization, placing data in double brackets
const Track = ({ name, genre, img }) => {
  return (
    <div className="Track">
      <div className="Play">
        <div className="Name">{name}</div>
        <div className="Genre">{genre}</div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Track;
