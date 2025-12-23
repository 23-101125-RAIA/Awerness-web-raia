function saveFormData(name, email, message) {
    let messages = [];
    if (localStorage.getItem("contactMessages")) {
        messages = JSON.parse(localStorage.getItem("contactMessages"));
    }
    let newMessage = {
        name: name,
        email: email,
        message: message,
        date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
    };
    messages.push(newMessage);
    localStorage.setItem("contactMessages", JSON.stringify(messages));
    getSavedData();
}

function getSavedData() {
    let tbody = document.getElementById("messages-tbody");
    if (!tbody) return;
    let messages = [];
    if (localStorage.getItem("contactMessages")) {
        messages = JSON.parse(localStorage.getItem("contactMessages"));
    }
    tbody.innerHTML = "";
    if (messages.length == 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="no-messages">No messages yet</td></tr>';
    } else {
        for (let i = 0; i < messages.length; i++) {
            let row = document.createElement("tr");
            row.innerHTML = '<td>' + messages[i].name + '</td><td>' + messages[i].email + '</td><td>' + messages[i].message + '</td><td>' + messages[i].date + '</td><td><button class="delete-button" onclick="deleteMessage(' + i + ')">Delete</button></td>';
            tbody.appendChild(row);
        }
    }
}

function deleteMessage(index) {
    let messages = JSON.parse(localStorage.getItem("contactMessages"));
    messages.splice(index, 1);
    localStorage.setItem("contactMessages", JSON.stringify(messages));
    getSavedData();
}
