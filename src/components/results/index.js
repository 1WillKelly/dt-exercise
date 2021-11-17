import Styles from './index.module.scss';
import ResultsGrid from './results-grid';
import ResultsHeader from './results-header';

const Results = () => {

    return (
        <section className={Styles['results-main']}>
            <ResultsHeader />
            <ResultsGrid />
        </section>
    );
};

export default Results;
