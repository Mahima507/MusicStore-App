import { useState } from "react";

export const Song = (props) => {
  const { fn, song } = props;
  console.log(song);
  const [playerFlag, setPlayerFlag] = useState(false);

  const showPlayer = () => {
    fn(true,song);
  };

  return (
    <div className="row">
      <div className="col-4">
        <img src={song.artworkUrl30} alt="Album Art" />
      </div>
      <div className="col-4">
        {song.artistName} {song.trackName}
      </div>
      <div className="col-4">
        <button onClick={showPlayer} className="btn btn-primary">
          Play Song
        </button>
      </div>
    </div>
  );
};