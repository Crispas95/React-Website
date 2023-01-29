import "./HeroStyles.css"

const Hero = ( {cName,heroImg,title,text,url,btnClass,urlText} ) => {


    return ( <>

     <div className={cName}>
        <img alt="HerpImg" src={heroImg}/>

        <div className="hero-text">
            <h1>{title}</h1>
            <p>{text}</p>
            <a href={url} className={btnClass}>{urlText}</a>
        </div>
    </div>
    </>
     );
}
 
export default Hero;