import Header from "./componets/Header";
import SalesCard from "./componets/SalesCard";


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="Sales">
          <div className="dsmeta-container" >
              <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
