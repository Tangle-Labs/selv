import * as React from "react";

import {
    Landing,
    IntroShowTodos,
    IntroShowMobile,
    IntroDemoSelection,
    AppDownloadQR,
    ProveIdentity,
    SingInConfirmation,
    CompanyData,
    CompanyDetails,
    Confirmation,
    BankData,
    InsuranceData,
    IncorporatedCompanies,
    GreatSuccess,
    ThankYou
} from './pages';

export const routes = [
    { path: '/:lng?', element: <Landing/> },
    { path: '/:lng?/demo/select', element: <IntroDemoSelection/> },
    { path: '/:lng?/demo/todos', element: <IntroShowTodos/> },
    { path: '/:lng?/demo/app', element: <IntroShowMobile/> },
    { path: '/:lng?/company/list/0', element: <IncorporatedCompanies/> },
    { path: '/:lng?/demo/app/0', element: <AppDownloadQR/> },
    { path: '/:lng?/company/prove/0', element: <ProveIdentity/> },
    { path: '/:lng?/company/signin/0', element: <SingInConfirmation/> },
    { path: '/:lng?/company/data/0', element: <CompanyData/> },
    { path: '/:lng?/company/confirm/1', element: <Confirmation/> },
    { path: '/:lng?/demo/success/1', element: <GreatSuccess/> },
    { path: '/:lng?/company/details/1/:companyId', element: <CompanyDetails/> },
    { path: '/:lng?/bank/prove/1', element: <ProveIdentity/> },
    { path: '/:lng?/bank/data/1', element: <BankData/> },
    { path: '/:lng?/bank/confirm/2', element: <Confirmation/> },
    { path: '/:lng?/company/details/2/:companyId', element: <CompanyDetails/> },
    { path: '/:lng?/insurance/prove/2', element: <ProveIdentity/> },
    { path: '/:lng?/insurance/data/2', element: <InsuranceData/> },
    { path: '/:lng?/insurance/confirm/3', element: <Confirmation/> },
    { path: '/:lng?/company/details/3/:companyId', element: <CompanyDetails/> },
    { path: '/:lng?/demo/thankyou', element: <ThankYou/> }
];

//These are now just the keys for the translation that get dynamically loaded
export const mainSteps = [
    { title: "actions.setUpCompany" },
    { title: "actions.getBankAccount" },
    { title: "actions.liabilityInsurance"},
    { title: "actions.readyForBusiness"},
];