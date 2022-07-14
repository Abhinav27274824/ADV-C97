function option1(){
    label_response = "You are correct! Click the Next button to continue!"
    document.getElementById("answer").innerHTML = label_response;
}

function option2(){
    label_response2 = "You are wrong! Reload the page to retry the question!"
    document.getElementById("answer").innerHTML = label_response2;
}

function nextPage(){
    window.location = "page3.html"
}

