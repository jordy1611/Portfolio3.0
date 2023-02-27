import { useEffect, useRef, useState } from 'react';
import '../SASS/_Styles.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Work from '../Work/Work';
import Connect from '../Connect/Connect';
// import TextSphere from '../Elements/TextSphere/TextSphere';

function App() {

  const [scrollAtTop, setScrollAtTop] = useState(false)
  const homeRef = useRef<HTMLInputElement>(null);
  const aboutRef = useRef<HTMLInputElement>(null)
  const workRef = useRef<HTMLInputElement>(null);
  const connectRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const topRect = aboutRef?.current?.getBoundingClientRect();
      setScrollAtTop(!!topRect && topRect.top <= 56);
    })
  }, [])

  const scrollToSection= (section: string) => {
    switch (section) {
      case 'Home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break
      case 'About':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Work':
        workRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Connect':
        connectRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default: 
        console.error(`Section ${section} does not exist`)
    }
  }

  return (
    <main className="App">
      <Header scrollAtTop={scrollAtTop} scrollToSection={scrollToSection} />
      <Home />
      <div ref={aboutRef}><About /></div>
      <div ref={workRef}><Work /></div>
      <div ref={connectRef}><Connect /></div>
    </main>
  );
}

export default App;
