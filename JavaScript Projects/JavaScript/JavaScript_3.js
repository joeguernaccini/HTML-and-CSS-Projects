

function showAvailability(job) {
    var jobAvailability = job.getAttribute("data-job-availability");
    alert("The " + job.innerHTML + " position is " + jobAvailability);
    
}

