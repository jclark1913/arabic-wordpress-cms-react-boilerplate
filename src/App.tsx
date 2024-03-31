import NavBar from "./components/NavBar";
import { ThemeProvider } from "./ThemeContext";
import RoutesList from "./routes/RoutesList";
import Footer from "./Footer";

function App() {
  return (
    <>
      <ThemeProvider>
        <main className="flex min-h-screen flex-col bg-sitebackground text-primarytext">
          <NavBar />
          <div className="container mx-auto px-12 p-4 flex flex-col flex-grow">
            <RoutesList />
          </div>
        <Footer />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
