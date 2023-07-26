import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

const useWaveformLoader = (audioSrc) => {
  const waveformRef = useRef(null);

  useEffect(() => {
    const waveform = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#5588AA",
      progressColor: "#99AABB",
      cursorColor: "#fff",
    });

    waveform.load(audioSrc);

    return () => {
      waveform.destroy();
    };
  }, [audioSrc]);

  return waveformRef;
};

export default useWaveformLoader;
