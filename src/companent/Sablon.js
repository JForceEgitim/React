import "./Header.css";
export default function Sablon(props) {
  return (
    <div className="sablon">
      <img src={props.image}></img> {props.text}
    </div>
  );
}
