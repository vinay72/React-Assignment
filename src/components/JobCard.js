import React from 'react';
import { Card, Typography, Chip } from '@material-ui/core';
import './JobCard.css';

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="job-card">
      <div className="card-content">
        <Typography className="job-title" variant="h5">
          {job.jobTitle}
        </Typography>
        <Typography className="company-name" variant="subtitle1">
          {job.companyName}
        </Typography>
        <Typography className="location" variant="body2">
          {job.location}
        </Typography>
        <Typography className="type-category" variant="body2">
          {job.type} ({job.category})
        </Typography>
        <Typography className="experience" variant="body2">
          Experience: {job.experienceRequired} years
        </Typography>
        <Typography className="salary" variant="body2">
          Salary: {job.salaryRange}
        </Typography>
        <Typography className={`job-description ${expanded ? 'expanded' : ''}`} variant="body2">
          { job.jobDescription }
        </Typography>
        <div className="view-more" onClick={handleExpand}>
          {expanded ? 'Show less' : 'Show more'}
        </div>
        <div className="tags">
          <Chip className="tag" label={job.industry} variant="outlined" color="primary" />
          <Chip className="tag" label={job.role} variant="outlined" color="primary" />
        </div>
        <button className="apply-button">Apply</button>
      </div>
    </Card>
  );
};

export default JobCard;