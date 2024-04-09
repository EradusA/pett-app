import PageLayout from '../Components/PageLayout/PageLayout';
import AdaptiveFilter from '../Components/AdaptiveFilter/AdaptiveFilter';
import Categories from '../Components/Categories/Categories';

const HomePage = () => {
  return (
    <PageLayout>
      <AdaptiveFilter />
      <Categories />
    </PageLayout>
  );
};

export default HomePage;