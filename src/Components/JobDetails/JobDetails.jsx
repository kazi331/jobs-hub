import React, { useEffect, useState } from 'react';
import './JobDetails.css'
import { FaUpRightFromSquare } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useUserContext } from '../../UserContext/UserContext';

const JobDetails = () => {
    const { id } = useParams();
    const jobs = useLoaderData();
    const [showJobDetails, setShowJobDetails] = useState({});
    const { userData } = useUserContext();
    const loginNavigate = useNavigate();
    useEffect(() => {
        if (jobs.length > 0) {
            const job = jobs.find(job => job.id == id);
            setShowJobDetails(job)
        }
    }, [id, jobs])


    const handleApplyJob = () => {
        if (userData) {
            // Use window.open() to open the URL in a new tab
            window.open(`/applyjob/${showJobDetails.id}`, '_blank');


        } else {
            Swal.fire({
                title: 'User must login before applying!',
                text: "Do you want to login?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    loginNavigate('/signin')
                }
            })
        }

    }

    return (
        <div className='job-details'>
            <div className="job-details-content">
                <div className="job-details-header">
                    <div className="job-details-header-company">
                        <img src={showJobDetails.image} alt="" />
                        <Link>{showJobDetails.company_name}</Link>
                    </div>
                    <div className="job-details-header-job">
                        <div>
                            <h2>{showJobDetails.job_title}</h2>
                            <p>{showJobDetails.address}</p>
                        </div>
                        <button onClick={handleApplyJob}>Apply Now <FaUpRightFromSquare></FaUpRightFromSquare></button>
                    </div>
                </div>
                <div className="job-details-main">
                    <p><span>Job Description: </span>{showJobDetails.job_description}</p>
                    <p><span>Job Responsibilities: </span>{showJobDetails.job_resposibilities}</p>
                    <p><span>Job Type: </span>{showJobDetails.availability}</p>
                    <p><span>Salary: </span>{showJobDetails.salary}</p>
                    <p><span>Educational Requirements: </span>{showJobDetails.educational_requirements}</p>
                    <p><span>Required Expereinces: </span>{showJobDetails.experience}</p>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;