
import TextSphere from '../TextSphere/TextSphere';

type AboutProps = {
}
function About(props: AboutProps) {

  // useEffect(() => {
  //   const tagCloud = document.querySelector('tagcloud');
  //   console.log(tagCloud)
  //   const TagCloud = require("TagCloud");
  //   const container = ".content";
  //   TagCloud(container, texts, {
  //     // radius: Screening(),
  //     maxSpeed: "normal",

  //   });

  //   // TagCloud('.content', texts);
  // },[])


  return (
    <div className="about sliding-page">   
      <TextSphere />
      <article>
        <h2>About</h2>
        {/* sliding text animation */}
        <h3>Jordan Shryock</h3>
        <p>Blah blah blah. I'm really neat. I like being neat in neat places. Blah blah blah blah blah blah blah blah blah blah blah. I'm a neat person. I like doing neat stuff.</p>
        <br/>
        <p>My dog is very neat, he is so very neat.</p>
        <br />
        <p>WOOOOOO</p>
        < br/>  
        <p>Blah blah blah. I'm really neat. I like being neat in neat places. Blah blah blah blah blah blah blah blah blah blah blah. I'm a neat person. I like doing neat stuff.</p>
        <br />
       
      </article>
    </div>
  );
}

export default About;
