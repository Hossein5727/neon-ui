import timeImge from "../assets/images/Time Style.svg";
import connectionImge from "../assets/images/Cellular Connection.svg";
import wifiImge from "../assets/images/Wifi.svg";
import batteryImge from "../assets/images/Battery.svg";
import { useEffect, useState } from "react";

function Header() {
  const [clock, setClock] = useState(new Date());
  const [intervall, setIntervall] = useState();

  useEffect(() => {
    setIntervall(
      setInterval(() => {
        setClock(new Date());
      }, 1000)
    );

    return () => {
      clearInterval(intervall);
    };
  }, []);

  return (
    <div className="w-full px-1 py-1 flex justify-between items-center mb-4 bg-transparent">
      <div className="flex items-center text-white">
        <p>{clock.getHours()}:</p>
        <p>{clock.getMinutes()}</p>
      </div>

      <div className="flex justify-center items-center gap-2">
        <img src={connectionImge} alt="connectionImge" />
        <img src={wifiImge} alt="wifiImge" />
        <img src={batteryImge} alt="batteryImge" />
      </div>
    </div>
  );
}

export default Header;
