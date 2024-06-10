import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import BusinessRegistration from './components/BusinessRegistration';
import InvestorRegistration from './components/InvestorRegistration';
import Login from './components/Login';
import BusinessSell from './components/BusinessSell';
import InvestInBusiness from './components/InvestInBusiness';
import Franchise from './components/Franchise';
import Profile from './components/Profile';
import FranchiseRegister from './components/FranchiseRegister';
import AdvisorRegistration from './components/AdvisorRegistration';
import NeedHelp from './components/NeedHelp';
import BusinessPlans from './components/ServicePlans/BusinessPlans';
import Forum from './components/Forum';
import Communication from './components/Communication';
import MentorshipPrograms from './components/MentorshipPrograms';
import PaymentGateway from './components/ServicePlans/PaymentGateway';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/businessregister' element={<BusinessRegistration/>}/>
        <Route path='/investorregister' element={<InvestorRegistration/>}/>
        <Route path='/franchiseregister' element={<FranchiseRegister/>}/>
        <Route path='/advisorregister' element={<AdvisorRegistration/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

        <Route path='/sell' element={<BusinessSell/>}/>
        <Route path='/invest' element={<InvestInBusiness/>}/>
        <Route path='/franchise' element={<Franchise/>}/>

        <Route path='/profile' element={<Profile/>}/>
        <Route path='/help' element={<NeedHelp/>}/>

        <Route path='/businessplans' element={<BusinessPlans/>}/>
        <Route path='/paymentgateway' element={<PaymentGateway/>}/>
        

        <Route path='/forum' element={<Forum/>}/>
        <Route path='/communication' element={<Communication/>}/>
        <Route path='/mentor' element={<MentorshipPrograms/>}/>

        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
