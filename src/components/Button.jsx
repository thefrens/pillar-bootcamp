
import hotels_btn_logo from '../image/hotels_btn_logo.png';

function Button({
    color
}) {
  return (
    <div style={{ background: color }} className="hotels_btn">
        <img src={hotels_btn_logo} alt="" />
        <p>$4000</p>
    </div>
  );
}

export default Button;
