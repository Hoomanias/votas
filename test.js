let lays_votes = 0;
let ruffles_votes = 0;
let pringles_votes = 0;




function vote() {
    var type = document.getElementsByName("chips_brands")
    if (type[0].checked)
    {
        lays_votes +=1;
        document.getElementById("lays_v").innerHTML = lays_votes;
        let total_votes = lays_votes + ruffles_votes + pringles_votes;
        document.getElementById("lays_p").innerHTML = ((lays_votes/total_votes)*100).toFixed(0);
        document.getElementById("pringles_p").innerHTML = ((pringles_votes/total_votes)*100).toFixed(0);
        document.getElementById("ruffles_p").innerHTML = ((ruffles_votes/total_votes)*100).toFixed(0);
    }


    if (type[1].checked)
    {
        ruffles_votes +=1;
        document.getElementById("ruffles_v").innerHTML = ruffles_votes;
        let total_votes = lays_votes + ruffles_votes + pringles_votes;
        document.getElementById("lays_p").innerHTML = ((lays_votes/total_votes)*100).toFixed(0);
        document.getElementById("pringles_p").innerHTML = ((pringles_votes/total_votes)*100).toFixed(0);
        document.getElementById("ruffles_p").innerHTML = ((ruffles_votes/total_votes)*100).toFixed(0);
    }

    if (type[2].checked)
    {
        pringles_votes +=1;
        document.getElementById("pringles_v").innerHTML = pringles_votes;
        let total_votes = lays_votes + ruffles_votes + pringles_votes;
        document.getElementById("lays_p").innerHTML = ((lays_votes/total_votes)*100).toFixed(0);
        document.getElementById("pringles_p").innerHTML = ((pringles_votes/total_votes)*100).toFixed(0);
        document.getElementById("ruffles_p").innerHTML = ((ruffles_votes/total_votes)*100).toFixed(0);
    }

}


let nums = 0;
function add_nums() {
    nums +=1;
    document.getElementById("add_nums").innerHTML = nums;
}


//https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server
// cd C:\Users\hooma\Desktop\Votas
// python -m http.server
//https://developers.google.com/identity/sign-in/web/sign-in
function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }