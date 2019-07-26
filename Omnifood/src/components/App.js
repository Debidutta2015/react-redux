import React from 'react';
import Header from './Header';
import FeatureSection from './sections/FeatureSection';
import MealSection from './sections/MealSection';
import StepSection from './sections/StepSection';
import CitySection from './sections/CitySection';
import TestimonialSection from './sections/TestimonialSection';
import PlanSection from './sections/PlanSection';
import FormSection from './sections/FormSection';
import Footer from './Footer';
import { Route, Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <div>
      <Header />
      <FeatureSection />
      <MealSection />
      <StepSection />
      <CitySection />
      <TestimonialSection />
      <PlanSection />
      <FormSection />
      <Footer />
      <Switch>
        <Route path="#" exact component={App} />
      </Switch>
    </div>
  </Router>
);
console.log('Hi');
export default App;
