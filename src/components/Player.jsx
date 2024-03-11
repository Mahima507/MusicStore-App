import React from "react";

export const Player = ({ fn, song }) => {
  console.log("song object recieved", song);
  return (
    <div className="card player-card">
      <div className="text-center">
        <img src={song?.artworkUrl30} className="card-img-top" alt="Album Art" style={{ width: "100px" }} />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{song?.trackName}</h5>
        <p className="card-text">{song?.artistName}</p>
        <button
          onClick={() => {
            fn(false, null);
          }}
          className="btn btn-primary"
        >
          Back to Songs
        </button>
      </div>
      <div className="card-footer text-muted audio-footer text-center">
        <audio controls>
          <source src={song?.previewUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};