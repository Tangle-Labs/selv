import { 
  Landing,
  IntroShowTodos,
  IntroShowMobile,
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
} from './pages'

export const routes = [ 
  { path: '/', page: Landing },
  { path: '/progress/demo/todos', page: IntroShowTodos }, 
  { path: '/progress/demo/app', page: IntroShowMobile }, 
  { path: '/progress/company/list/0', page: IncorporatedCompanies }, 
  { path: '/progress/demo/app/0', page: AppDownloadQR }, 
  { path: '/progress/company/prove/0', page: ProveIdentity }, 
  { path: '/progress/company/signin/0', page: SingInConfirmation }, 
  { path: '/progress/company/data/0', page: CompanyData }, 
  { path: '/progress/company/confirm/1', page: Confirmation }, 
  { path: '/progress/demo/success/1', page: GreatSuccess }, 
  { path: '/progress/company/details/1/:companyId', page: CompanyDetails }, 
  { path: '/progress/bank/prove/1', page: ProveIdentity }, 
  { path: '/progress/bank/data/1', page: BankData },
  { path: '/progress/bank/confirm/2', page: Confirmation }, 
  { path: '/progress/company/details/2/:companyId', page: CompanyDetails }, 
  { path: '/progress/insurance/prove/2', page: ProveIdentity }, 
  { path: '/progress/insurance/data/2', page: InsuranceData },
  { path: '/progress/insurance/confirm/3', page: Confirmation }, 
  { path: '/progress/company/details/3/:companyId', page: CompanyDetails },
  { path: '/progress/demo/success/3', page: GreatSuccess }, 
  { path: '/progress/demo/thankyou', page: ThankYou },  
]

export const mainSteps = [
  { title: 'Set up a company' },
  { title: 'Get a bank account' },
  { title: 'Liability insurance' },
  { title: 'Ready for business' },
]