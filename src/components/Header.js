import timeImge from "../assets/images/Time Style.svg";
import connectionImge from "../assets/images/Cellular Connection.svg";
import wifiImge from "../assets/images/Wifi.svg";
import batteryImge from "../assets/images/Battery.svg";

function Header() {
  return (
    <div className="w-full px-1 py-1 flex justify-between items-center mb-4">
      <div>
        <img src={timeImge} alt="timeImge" />
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
