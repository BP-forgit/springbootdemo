
const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
const jobDivs = document.querySelectorAll('.customJob');

for (let i = 0; i < jobs.length && i < jobDivs.length; i++) {
    const jobDiv = jobDivs[i];
    const job = jobs[i];

    jobDiv.style.display = 'flex';
    jobDiv.querySelector('.title-of-job').textContent = job.title;
    jobDiv.querySelector('.job-details').textContent = job.details;
    jobDiv.querySelector('.available-positions').textContent = `${job.positions} positions open`;
    
}

const jobButtons = document.querySelectorAll('.details-button');

jobButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        const title = this.closest('.customJob').querySelector('.title-of-job').textContent;
        const details = this.closest('.customJob').querySelector('.job-details').textContent;
        const positions = this.closest('.customJob').querySelector('.available-positions').textContent.split(' ')[0];

        const moreinfoData = {
            title: title,
            details: details,
            positions: positions
        };

        localStorage.setItem('selectedJob', JSON.stringify(moreinfoData));
    });
});

const jobsData = [ //array
    {
        title: "Sales Support" ,
        image: "Image1.jpg",
        details: "Sales Support works to help with the management and distribution of our sales",
        openPositions: "2",
        link: "#",

    },
    {
        title: "Tecnical Support" ,
        image: "Image1.jpg",
        details: "Technical support manages tech desk calls, repairs electronics and manages device inventory",
        openPositions: "2",
        link: "#",

    },
    {
        title: "Divisions Manager" ,
        image: "Image1.jpg",
        details: "As a division manager you will take leadership in all 4 divisions of the company, lead others below you and take on high end assignments",
        openPositions: "2",
        link: "#",

    },
    {
        title: "Visual Design Specialist" ,
        image: "Image1.jpg",
        details: "Visual design specialists design any visuals and digital designs needed",
        openPositions: "2",
        link: "#",

    },
    {
        title: "Coding Director" ,
        image: "Image1.jpg",
        details: "As a coding director you will guide and train others who want to take on a coding postion",
        openPositions: "2",
        link: "#",

    },
    {
        title: title,
        image: "Image1.png",
        details: description,
        openPositions: positions,
        link: "#",

    },
]