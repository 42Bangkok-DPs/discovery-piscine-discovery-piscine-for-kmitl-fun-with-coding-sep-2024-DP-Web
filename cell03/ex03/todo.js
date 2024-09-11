function New_note() {
    console.log("PROCESS START by get click");
    const enter_note = prompt("Enter your new note : ");
    console.log("enter note success : " + enter_note);

    // check null
    if (enter_note != null && enter_note.trim() !== "") {
        Add_note(enter_note);
        save_cookie();
    }
}

function Add_note(enter_note) {
    // access to list
    const ft_List = document.querySelector(".ft_list");
    console.log("Add_note(enter_note) -----------");
    console.log(ft_List);

    // new div
    const create_div = document.createElement("div");
    console.log(create_div);

    // add element to create_div
    create_div.className = "todo";
    create_div.innerText = enter_note;

    console.log("className = " + create_div.className);
    console.log("innerText = " + create_div.innerText);

    // insert new at begin of list
    ft_List.insertBefore(create_div, ft_List.firstChild);
    console.log(ft_List.insertBefore(create_div, ft_List.firstChild));

    // remove
    create_div.addEventListener("click", function () {
        const confirm_delete = confirm(
            "yes or no you want to remove that TO DO?"
        );
        if (confirm_delete) {
            ft_List.removeChild(create_div);
            console.log("Remove success");
            alert("Remove successful");
            // save to cookie
            save_cookie();
        }
    });
}

function save_cookie() {
    // Get all 
    const ft_List = document.querySelector(".ft_list");
    console.log("save_cookie() -----------");
    console.log(ft_List);

    // Convert to array and keep to cookie
    const map_ft = Array.from(ft_List.children).map((todo) => todo.innerText);
    console.log("map_ft : " + map_ft);

    document.cookie = "cookie_name=" + JSON.stringify(map_ft);
    console.log("document.cookie : " + (document.cookie = "cookie_name=" + JSON.stringify(map_ft)));
}

function get_cookie() {
    // Get cookie array 
    const cookieValue = document.cookie
        // splits into array
        .split("; ")
        // find the first element in the array 
        .find((row) => row.startsWith("cookie_name="));
    console.log("cookieValue : " + cookieValue);

    // Check if cookie exists
    if (cookieValue) {
        // Parse the cookie value and add each to the list
        const tasks = JSON.parse(cookieValue.split("=")[1]);
        tasks.reverse().forEach((task) => {
            Add_note(task);
        });
    }
}
// call cookie (page load)
window.addEventListener("load", get_cookie);