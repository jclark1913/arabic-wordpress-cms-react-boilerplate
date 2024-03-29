import NavBar from "./components/NavBar";
import { ThemeProvider } from "./ThemeContext";
import RoutesList from "./routes/RoutesList";

function App() {
  return (
    <>
      <ThemeProvider>
        <main className="flex min-h-screen flex-col bg-sitebackground text-primarytext">
          <NavBar />
          <div className="container mx-auto">
            <RoutesList />
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
