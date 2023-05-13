import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Developer from './components/Developer';
import Courses from './components/Courses';
import Library from './components/Library';
import Sources from './components/Sources';
import SignUpSection from './components/SignUpSection';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import TopButton from './components/TopButton';

function App() {
    useEffect(() => {
        AOS.init();
    }, [])

   setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.classList.remove("overflow_hidden");
  }, 3000);
  return (
    <div   className='overflowXhidden bg-black'>
      <Preloader/>
      <Navbar />
      <Developer />
      <Courses />
      <Library />
      <Sources />
      <SignUpSection />
      <Footer />
      <TopButton />
      
    </div>
  );
}

export default App;
