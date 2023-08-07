import ManueWrapper from "./ManueWrapper";
function Manue(){
    return(
        <>
        <ManueWrapper id="manuWrapper"/>

        <div className="manue" id="manue">
        <button onClick={showManuBar}><i className="fa fa-bars"></i></button>
    </div>
  
    </>
    );
    function showManuBar(){
        document.getElementById('manuWrapper').style.display="flex";
    }
}
export default Manue;