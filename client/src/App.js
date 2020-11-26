import DashboardContainer from './Pages/DashboardPage/DashboardContainer';
import LandingPageContainer from './Pages/LandingPage/LandingPageContainer'
import Aux from './hoc/Auxiliary'

function App() {
  return (
    <Aux>
      <LandingPageContainer />
      <DashboardContainer />
    </Aux>
  )
}

export default App;
