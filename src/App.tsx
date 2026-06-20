import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function App() {
  return (
    <ThemeProvider>
      {/* reducedMotion="user" makes all Framer Motion components honor the
          OS "reduce motion" setting (skips transform/layout animation). */}
      <MotionConfig reducedMotion="user">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </ThemeProvider>
  );
}
