import { useRef, useState } from "react";
import { tracks } from "../data/tracks";

// import components
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  const audioRef = useRef();
  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack currentTrack={currentTrack}
          audioRef={audioRef} />
        <Controls />
        <ProgressBar />
      </div>
    </div>
  );
};
export default AudioPlayer;
