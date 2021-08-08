import Countdown from 'react-countdown'

const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const CountDownTime = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
        <>
        <h3 className="font-Quicksand text-center font-semibold text-lg text-gold">Menuju Akad nikah</h3>
        <div className="w-full flex mt-3 justify-center items-center">
            <span className="inline-block font-Playball bg-kuning-muda text-white rounded-lg p-1.5">{days} Hari</span>
            <span className="inline-block mx-1 font-Quicksand text-xl text-white">:</span> 
            <span className="inline-block font-Playball bg-kuning-muda text-white rounded-lg p-1.5 ">{hours} Jam</span>
            <span className="inline-block mx-1 font-Quicksand text-xl text-white">:</span>
            <span className="inline-block font-Playball bg-kuning-muda text-white rounded-lg p-1.5 ">{minutes} Menit</span>
            <span className="inline-block mx-1 font-Quicksand text-xl text-white">:</span>
            <span className="inline-block font-Playball bg-kuning-muda text-white rounded-lg p-1.5">{seconds} Detik</span>
        </div>
        </>
    );
  }
}

export default CountDownTime