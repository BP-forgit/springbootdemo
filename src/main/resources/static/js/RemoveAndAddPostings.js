document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const jobTitle = document.getElementById('job-title').value;
    const jobDetails = document.getElementById('job-det').value;
    const availablePositions = document.getElementById('available-pos').value;

    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    jobs.push({
        title: jobTitle,
        details: jobDetails,
        positions: availablePositions
    });

    localStorage.setItem('jobs', JSON.stringify(jobs));
    document.getElementById('form').reset();

    alert('Job added successfully!');
    window.location.href = ApprovedPostingsURL;

});



   