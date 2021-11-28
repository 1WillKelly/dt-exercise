import './App.scss';
import Header from './components/header';
import Marquee from './components/marquee';
import Filters from './components/filters';
import Results from './components/results';

function App() {
    return (
        <div className='App'>
            <Header />
            <main>
                <Marquee />
                <section className='shop-content'>
                    <Filters />
                    <Results />
                </section>
            </main>
        </div>
    );
}

export default App;
