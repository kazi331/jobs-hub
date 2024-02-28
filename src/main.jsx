import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AllJobs from './Components/AllJobs/AllJobs.jsx';
import ApplyJob from './Components/ApplyJob/ApplyJob.jsx';
import Companies from './Components/Companies/Companies.jsx';
import JobCategory from './Components/JobCategory/JobCategory.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';
import JobDetailsResponsive from './Components/JobDetailsResponsive/JobDetailsResponsive.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import MyJobsApplied from './Components/UserMyJobs/MyJobsApplied.jsx';
import MyJobsArchived from './Components/UserMyJobs/MyJobsArchived.jsx';
import MyJobsDashboard from './Components/UserMyJobs/MyJobsDashboard.jsx';
import MyJobsInterviews from './Components/UserMyJobs/MyJobsInterviews.jsx';
import MyJobsSaved from './Components/UserMyJobs/MyJobsSaved.jsx';
import UserMyJobs from './Components/UserMyJobs/UserMyJobs.jsx';
import AboutMe from './Components/UserProfile/AboutMe.jsx';
import AccountSetting from './Components/UserProfile/AccountSetting.jsx';
import JobPreferences from './Components/UserProfile/JobPreferences.jsx';
import Qualifications from './Components/UserProfile/Qualifications.jsx';
import UserProfile from './Components/UserProfile/UserProfile.jsx';
import EmployerProfile from './EmployersComponents/EmployerProfile/EmployerProfile.jsx';
import ForEmployersHome from './EmployersComponents/ForEmployersHome/ForEmployersHome.jsx';
import ForEmployersLogin from './EmployersComponents/ForEmployersLogin/ForEmployersLogin.jsx';
import ForEmployersMain from './EmployersComponents/ForEmployersMain/ForEmployersMain.jsx';
import ForEmployersPostJob from './EmployersComponents/ForEmployersPostJob/ForEmployersPostJob.jsx';
import ForEmployersRegister from './EmployersComponents/ForEmployersRegister/ForEmployersRegister.jsx';
import ManageJobs from './EmployersComponents/ManageJobs/ManageJobs.jsx';
import ManageJobsActiveJobs from './EmployersComponents/ManageJobs/ManageJobsActiveJobs.jsx';
import ManageJobsDashboard from './EmployersComponents/ManageJobs/ManageJobsDashboard.jsx';
import ManageJobsHistory from './EmployersComponents/ManageJobs/ManageJobsHistory.jsx';
import ManageJobsInterview from './EmployersComponents/ManageJobs/ManageJobsInterview.jsx';
import ManageJobsShortlisted from './EmployersComponents/ManageJobs/ManageJobsShortlisted.jsx';
import Home from './Home/Home/Home.jsx';
import './index.css';
import Main from './Main/Main.jsx';
import './responsive.css';
import ResumeMain from './ResumeBuilder/ResumeMain/ResumeMain.jsx';
import { UserProvider } from './UserContext/UserContext.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'findjobs',
        element: <AllJobs></AllJobs>,
        children: [
          {
            path: 'jobdetails/:id',
            element: <JobDetails></JobDetails>,
            loader: () => fetch('https://api.jumpintojob.com/api/v1/circular')
          }
        ]
      },
      {
        path: 'jobdetailsres/:id',
        element: <JobDetailsResponsive></JobDetailsResponsive>,
        loader: () => fetch('/alljobs.json')
      },
      {
        path: 'jobcategory',
        element: <JobCategory></JobCategory>
      },
      {
        path: 'companies',
        element: <Companies></Companies>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'signin',
        element: <Login></Login>
      },
      {
        path: 'userprofile',
        element: <UserProfile></UserProfile>,
        children: [
          {
            path: 'aboutme',
            element: <AboutMe></AboutMe>
          },
          {
            path: 'qualifications',
            element: <Qualifications></Qualifications>
          },
          {
            path: 'jobpreferences',
            element: <JobPreferences></JobPreferences>
          },
          {
            path: 'accountsetting',
            element: <AccountSetting></AccountSetting>
          }
        ]
      },
      {
        path: 'myjobs',
        element: <UserMyJobs></UserMyJobs>,
        children: [
          {
            path: 'dashboard',
            element: <MyJobsDashboard></MyJobsDashboard>
          },
          {
            path: 'savedjobs',
            element: <MyJobsSaved></MyJobsSaved>
          },
          {
            path: 'appliedjobs',
            element: <MyJobsApplied></MyJobsApplied>
          },
          {
            path: 'interviews',
            element: <MyJobsInterviews></MyJobsInterviews>
          },
          {
            path: 'archivedjobs',
            element: <MyJobsArchived></MyJobsArchived>
          }
        ]
      }
    ]
  },

  {
    path: 'applyjob/:id',
    element: <ApplyJob></ApplyJob>,
    loader: () => fetch('https://api.jumpintojob.com/api/v1/circular')
  },
  {
    path: 'resumebuilder',
    element: <ResumeMain />
  },
  {
    path: 'foremployers',
    element: <ForEmployersMain></ForEmployersMain>,
    children: [
      {
        path: '/foremployers',
        element: <ForEmployersHome></ForEmployersHome>
      },
      {
        path: 'postjobs',
        element: <ForEmployersPostJob></ForEmployersPostJob>
      },
      {
        path: 'register',
        element: <ForEmployersRegister></ForEmployersRegister>
      },
      {
        path: 'signin',
        element: <ForEmployersLogin></ForEmployersLogin>
      },
      {
        path: 'employerprofile',
        element: <EmployerProfile />
      },
      {
        path: 'managejobs',
        element: <ManageJobs />,
        children: [
          {
            path: 'dashboard',
            element: <ManageJobsDashboard />
          },
          {
            path: 'activejobs',
            element: <ManageJobsActiveJobs />
          },
          {
            path: 'jobshistory',
            element: <ManageJobsHistory />
          },
          {
            path: 'shortlisted',
            element: <ManageJobsShortlisted />
          },
          {
            path: 'interview',
            element: <ManageJobsInterview />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
      textAlign: 'center',

    }}>
      <h1 style={{
        fontSize: '10rem',
      }}>404</h1>
      <p> The page you are looking for is missing! </p>
    </div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider><RouterProvider router={router}></RouterProvider></UserProvider>
  </React.StrictMode>,
)
