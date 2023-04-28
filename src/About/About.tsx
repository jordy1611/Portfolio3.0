
import TextSphere from '../TextSphere/TextSphere';

type AboutProps = {
}
function About(props: AboutProps) {

  return (
    <div className="about sliding-page">   
      <TextSphere />
      <article>
        <h3>About</h3>
        <p>My passion for engineering stems from being able to combine my creative side with analytical problem solving.</p>
        <br/>
        <p>I love jumping into new environments and taking ownership of features, from design to release.</p>
        <br />
        <p>I believe in delivering scalable and, most importantly, consistent code.</p>
        < br/>  
        <p>I'm always look opportunities to collaborate and explore new concepts!</p>
        <br />

      </article>
    </div>
  );
}

export default About;
