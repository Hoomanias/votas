let lays_votes = 0;
let ruffles_votes = 0;
let pringles_votes = 0;


function vote() {
    var type = document.getElementsByName("chips_brands")

    if (type[0].checked)
    {
        lays_votes +=1;
        document.getElementById("lays_v").innerHTML = lays_votes;
    }
    if (type[1].checked)
    {
        ruffles_votes +=1;
        document.getElementById("ruffles_v").innerHTML = ruffles_votes;
    }
    if (type[2].checked)
    {
        pringles_votes +=1;
        document.getElementById("pringles_v").innerHTML = pringles_votes;
    }

}

let nums = 0;
function add_nums() {
    nums +=1;
    document.getElementById("add_nums").innerHTML = nums;
}