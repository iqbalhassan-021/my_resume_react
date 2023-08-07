
function ManueWrapper(){
    return(
        <div class="manuWrapper" id="manuWrapper"  data-aos="fade-up" >
        <a href="#" onclick={onCloseManu}>HOME</a>
        <a href="#aboutMe" onclick={onCloseManu}>ABOUT</a>
        <a href="#contact" onclick={onCloseManu}>CONTACT</a>
        <a href="#Qualification" onclick={onCloseManu}>QUALIFICATION</a>
        <a href="#skills" onclick={onCloseManu}>SKILLS</a>
        <a href="#workingExp" onclick={onCloseManu}>WORKING EXPERIENCE</a>
        <a href="#projects" onclick={onCloseManu}>PROJECTS</a>
        <a href="" onclick={onCloseManu}><i class="fa fa-close"></i> Close</a>
    </div>
    );
    function onCloseManu(){
        document.getElementById('manuWrapper').style.display="none";
    }
}
export default ManueWrapper;