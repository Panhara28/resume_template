const { HomeBanner } = require("./components/HomeBanner");
const { Navbar } = require("./components/Navbar");

function App() {
  return (
    <div>
      <Navbar />
      <HomeBanner />
    </div>
  );
}

export default App;
