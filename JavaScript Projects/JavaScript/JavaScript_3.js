

function showAvailability(job) {
    var jobAvailability = job.getAttribute("data-job-availability");
    alert("The " + job.innerHTML + " position is " + jobAvailability);
    
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}