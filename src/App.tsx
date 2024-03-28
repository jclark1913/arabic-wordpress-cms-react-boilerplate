import NavBar from "./NavBar";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <main className="flex min-h-screen flex-col bg-sitebackground">
          <NavBar />
          <p>hi</p>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
