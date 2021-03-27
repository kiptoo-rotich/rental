function calculate() {
    let total_rooms = document.querySelector("#total_rooms").value;
    let room_value = document.querySelector("#room_value").value.slice(5);
    let monthly_expenses = document.querySelector("#expenses").value;
    let occupied_rooms = document.querySelector("#occupied_rooms").value;


    function totalAmount() {
        let totalAmount = (occupied_rooms * room_value) - monthly_expenses;
        if (monthly_expenses < 0) {
            alert("Expanses cannot be negative in value.");
        } else {
            if (monthly_expenses != 50000) {
                let explanation = prompt("Tell us why there is a deviation in monthly expenditure.");
                document.getElementById("explanation").innerHTML = "&#10004 Deviation from normal expenditure is due to " + explanation;
            }
            if (totalAmount < 0) {
                document.getElementById("expected_amount").innerHTML = "&#10071 You made a loss of Kshs. " + totalAmount * -1 + " &#128542.";
            } else {
                if (monthly_expenses < 0) {
                    alert("Expenses cannot be negative in value.")
                } else if (monthly_expenses == 0) {
                    document.getElementById("expected_amount").innerHTML = "&#10004 The expected amount of rental income is<br> Kshs. " + totalAmount + " with NO expenditure.";
                } else {
                    document.getElementById("expected_amount").innerHTML = "&#10004 The expected amount of rental income is<br> Kshs. " + totalAmount + " less Kshs. " + monthly_expenses + " expenditure.";
                }
            }
        }
    }

    if (occupied_rooms != "") {
        let vacant = (total_rooms - occupied_rooms);
        if (vacant < 0 || vacant > total_rooms) {
            document.getElementById("header").innerHTML = "Results";
            document.getElementById("Number_of_vacant_rooms").innerHTML = "&#10060 You have entered wrong number of occupied room.<br> Kindly re-check."
        } else if (vacant == 0) {
            document.getElementById("header").innerHTML = "Results";
            document.getElementById("Number_of_vacant_rooms").innerHTML = "&#10004 All rooms are occupied.";
            totalAmount();
        } else if (vacant == 1) {
            document.getElementById("header").innerHTML = "Results";
            document.getElementById("Number_of_vacant_rooms").innerHTML = "&#10004 There is " + vacant + " vacant room available.";
            totalAmount();
        } else {
            document.getElementById("header").innerHTML = "Results";
            document.getElementById("Number_of_vacant_rooms").innerHTML = "&#10004 There are " + vacant + " vacant rooms.";
            totalAmount();
        }
    } else {
        alert("Tell me the number of occupied rooms.")
    }

}

function guide() {
    document.getElementById("guide_text").innerHTML = "In order to know the expected amount of income, you'll need to enter the number of occupied rooms. Before you submit, ensure the other details are correct. If NOT, you can change the value. Changing the value of expenditure will need an explanation to be recorded. You can also change the number of rooms."
}

function refresh() {
    location.reload();
}