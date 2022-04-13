import "./Header.css";
export default function Jpeg(props) {
  return (
    <div className="jpeg">
      <img width={"30px"} src={props.image}></img>
    </div>
  );
}
