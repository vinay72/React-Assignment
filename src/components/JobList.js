// src/components/JobList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobsRequest, fetchJobsSuccess, fetchJobsFailure } from '../redux/actions';
import { fetchJobs } from '../services/jobService';
import JobCard from './JobCard';
import './JobList.css';

const JobList = () => {
  const dispatch = useDispatch();
    const { jobs, loading, error } = useSelector(state => state);
    console.log('jobs', jobs);

  useEffect(() => {
    dispatch(fetchJobsRequest());
    fetchJobs(10, 0)
      .then(data => dispatch(fetchJobsSuccess(data)))
      .catch(error => dispatch(fetchJobsFailure(error)));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      {jobs?.jdList?.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
