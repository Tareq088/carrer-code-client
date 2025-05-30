import React, { Suspense, use } from 'react';
import useAuth from '../../Hooks/useAuth';
import { span } from 'motion/react-client';
import jobList from './JobList';
import { jobsCreatedByPromise } from '../../api/jobsApi';
import JobList from './JobList';

const MyPostedJobs = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2>My Posted Jobs:</h2>
            <Suspense fallback={<span>Loading....................</span>}>
                <JobList 
                    jobsCreatedByPromise = {jobsCreatedByPromise(user.email)}                
                >
                </JobList>

            </Suspense>
        </div>
    );
};

export default MyPostedJobs;