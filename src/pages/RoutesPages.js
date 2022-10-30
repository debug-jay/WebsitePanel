import {BrowserRouter, Routes, Route} from 'react-router-dom';
// Imports Of Other Content
import { MainLayoutComponent } from '../components/MainLayoutComponent';
import { DashboardPage } from './DashboardPage';
import { ManagementPage } from './ManagementPage';
import { InboxPage } from './InboxPage';
import { UsersPage } from './UsersPage';
import { ProductPage } from './ProductsPage'; 
import { SignInPage } from './SignInPage';
import { TeamPage } from './TeamPage';
import { DocumentationPage } from './DocumentationPage';
import { ComponentsPage } from './ComponentsPage';
import { HelpPage } from './HelpPage';
import { NoPage } from './NoPage';

// Dashboard Page Components
import { ProfitComponent } from "../components/DashboardPage/ProfitComponent";
import { AnalyticsComponent } from '../components/DashboardPage/AnalyticsComponent';
import { ReProfitComponent } from '../components/DashboardPage/ReProfitComponent';
import { ReUserGainComponent } from '../components/DashboardPage/ReUserGainComponent';
import { ReUserLostComponent } from '../components/DashboardPage/ReUserLostComponent';
// Management Page Components
import { PartneredCompanyComponent } from '../components/ManagementPage/PartnerCompanyComponent';
// Inbox Page Components

// Users Page Components

// Products Page Components

// Sign In Page Components

// Team Page Components

// Documentation Page Components

// Components Page Components

// Help Page Components

export const RoutesPages = () => {


    return(
        <>
        
        <BrowserRouter>
        <MainLayoutComponent>
            <Routes>
                {/* <Route path="/" exact element={<DashboardPage profitComp={ProfitComponent} analyticsComp={AnalyticsComponent}/>}/> * MainLandingPage (That Everyone is Initially Directed To) */}
                <Route path="/" exact element={<DashboardPage profitComp={ProfitComponent} analyticsComp={AnalyticsComponent} reProfitComp={ReProfitComponent} reUserGain={ReUserGainComponent} reUserLost={ReUserLostComponent}/>}/>
                {/** Other Routes Go Below */}
                <Route path="/dashboard" element={<DashboardPage profitComp={ProfitComponent} analyticsComp={AnalyticsComponent} reProfitComp={ReProfitComponent} reUserGain={ReUserGainComponent} reUserLost={ReUserLostComponent}/>}/>
                <Route path="/management" element={<ManagementPage partnerCompanyComp={PartneredCompanyComponent}/>}/>
                <Route path="/inbox" element={<InboxPage/>}/>
                <Route path="/users" element={<UsersPage/>}/>
                <Route path="/products" element={<ProductPage/>}/>
                <Route path="/signin" element={<SignInPage/>}/>
                <Route path="/team" element={<TeamPage/>}/>
                <Route path="/documentation" element={<DocumentationPage/>}/>
                <Route path="/components" element={<ComponentsPage/>}/>
                <Route path="/help" element={<HelpPage/>}/>
                <Route path="*" element={<NoPage/>}>
                </Route>
            </Routes>
        </MainLayoutComponent>
        </BrowserRouter>
        </>
    );
}