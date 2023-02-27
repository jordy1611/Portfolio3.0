import React from 'react';

type IChangingTextProps = {
  strings: string[];
}
// { strings } : IChangingTextProps
function ChangingText() {
  // also do a loading animation when logging in

  // {/* js */ }
  // <p>console.log("Hello World");</p>
  // {/* c# */ }
  // <p>Console.WriteLine("Hello World");</p>
  // {/* java */ }
  // <p>System.out.print("Hello World");</p>
  // {/* sql */ }
  // <p>PRINT 'Hello World' selected * from greetings;</p>
  // {/* python */ }
  // <p>Logging.debug( "Hello World" )</p>
  const whatevs = () => {
    console.log("Hello World");
  }
  return (
    <div className="changing-text">
      <div className="string start-string">
        <p className="text"><span className="blue">console</span>.<span className="yellow">log</span><span className="br-orange">(</span><span className="orange">"</span></p>
        <p className="text"><span className="blue">Console</span>.<span className="yellow">WriteLine</span><span className="br-orange">(</span><span className="orange">"</span></p>
        <p className="text"><span className="blue">System</span>.<span className="yellow">out</span>.<span>print</span><span className="br-orange">(</span><span className="orange">"</span></p>
        <p className="text"><span>PRINT </span><span>'</span></p>
        <p className="text"><span className="blue">Logging</span>.<span>debug</span><span className="br-orange">( </span><span className="orange">"</span></p>
      </div>
      <p className="hello-world orange">Hello World</p>
      <div className="string end-string">
        <p className="text"><span className="orange">"</span><span className="br-orange">)</span>;</p>
        <p className="text"><span className="orange">"</span><span className="br-orange">)</span>;</p>
        <p className="text"><span className="orange">"</span><span className="br-orange">)</span>;</p>
        <p className="text"><span>'</span> selected * from greetings;</p>
        <p className="text"><span className="orange">"</span> <span className="br-orange">)</span><span className="red">;</span></p>
      </div>
    </div>

    // loading screen is animated console.log or whatever maybe constantly changing based on different langauges?
    /// says hello world in different programming languages
  );
}

export default ChangingText;
