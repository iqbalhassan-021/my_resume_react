import hands from '../assets/postImage.jpg';
function HeroContainer(){
    return(
        <div className="heroContainer" id="heroContainer">
        <div className="imageHolder">
            <img src={hands} alt="" />
        </div>
        <div className="aboutHolder" data-aos="fade-up"   data-aos-delay="100">
            <strong><h1>SOFTWARE ENGINEER</h1></strong>
            <p>E N T E R T A I N E R</p>
            <p>Hey there i am a software engineer fresher with a strong foundation 
                in  programming  and  problem-solving.  Passionate  about  creating 
                efficient and scalable software solutions. Eager to contribute my skills 
                and adapt to new technologies in a collaborative team environment.</p>
                <a href="#Qualification"><button>See more</button></a>
        </div>
      
    </div>
    );
}
export default HeroContainer;