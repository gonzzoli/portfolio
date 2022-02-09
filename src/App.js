import Nav from './Nav/Nav'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import { LanguageContextProvider } from './store/lang-context'

function App() {
  return (
    <LanguageContextProvider>
      <Nav />
      <main>
        <Home />
        <Projects />
      </main>
      <Contact />
      <Footer />
    </LanguageContextProvider>
  );
}

export default App;
