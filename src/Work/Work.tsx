import { useEffect } from 'react';
import ChangingText from '../ChangingText/ChangingText';

type WorkProps = {
}
function About(props: WorkProps) {
  return (
    <div className="work sliding-page">
      <ChangingText />
      {/* do animation on 2 different areas */}
      {/* js */}
      <p>console.log("Hello World");</p> 
      {/* c# */}
      <p>Console.WriteLine("Hello World");</p>
      {/* java */}
      <p>System.out.print("Hello World");</p>
      {/* sql */}
      <p>PRINT 'Hello World' selected * from greetings;</p>
      {/* python */}
      <p>Logging.debug( "Hello World" )</p>
      <section style={{ width: "60%", height: "60%", background: "black" }}></section>
      {/* do old school dvd logo bouncing back and forth */}
    </div>
  );
}

export default About;
