document.addEventListener('DOMContentLoaded', function() {
    const selectedJob = JSON.parse(localStorage.getItem('selectedJob'));

    if (selectedJob) {
        document.getElementById('selectedJobTitle').textContent = selectedJob.title;
        document.getElementById('selectedJobPoints').textContent = selectedJob.details;
        document.getElementById('selectedJobPositions').textContent = `${selectedJob.positions} Available Positions`;
    } 
});

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const jobApplicant = document.getElementById('Name').value;
    const applicantEmail = document.getElementById('email').value;

    let applicantInfo = JSON.parse(localStorage.getItem('applicantInfo')) || [];

    applicantInfo.push({
        Name: jobApplicant,
        Email: applicantEmail

    });

    localStorage.setItem('applicantInfo', JSON.stringify(applicantInfo));

    alert('Thank you for your interest in the job! An email will be sent to you whenever we get back.');
    document.getElementById('form').reset();

    window.location.href = HomeURL;

});



   