function sendMessage() {
    const question = document.getElementById('chatInput').value;

    // CSRF-Token aus verstecktem Input holen
    const csrfToken = document.querySelector('#csrf-form input[name="csrfmiddlewaretoken"]').value;

    const formData = new FormData();
    formData.append('question', question);
    formData.append('csrfmiddlewaretoken', csrfToken);
    createQuestionHTML(question);
    document.getElementById('chatInput').value = "";
    fetch('/tempest/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        createResponseHTML(data);
        console.log(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function createQuestionHTML(questionText) {
    // Container für alle Chat-Fragen (z.B. <div id="chatHistory"></div>)
    const chatHistory = document.getElementById("chatHistory");
    if (!chatHistory) {
        console.error("Container mit ID 'chatHistory' nicht gefunden!");
        return;
    }

    // Erstelle einen neuen Div-Container für die Frage
    const newDiv = document.createElement("div");
    newDiv.className = "mb-3 col-md";

    // Erstelle ein neues Textarea-Element für die Frage
    const textarea = document.createElement("textarea");
    textarea.className = "form-control";
    textarea.rows = 2;
    textarea.readOnly = true;
    textarea.value = questionText;

    // Füge das Textarea dem neuen Div hinzu
    newDiv.appendChild(textarea);

    // Füge den neuen Div am Ende des Chatverlaufs hinzu
    chatHistory.appendChild(newDiv);
}

function createResponseHTML(responseText) {
    // Container für alle Chat-Antworten (z.B. <div id="chatHistory"></div>)
    const chatHistory = document.getElementById("chatHistory");
    if (!chatHistory) {
        console.error("Container mit ID 'chatHistory' nicht gefunden!");
        return;
    }

    // Erstelle einen neuen Div-Container für die Antwort
    const newDiv = document.createElement("div");
    newDiv.className = "mb-3 col-md";

    // Erstelle ein neues Textarea-Element für die Antwort
    const textarea = document.createElement("textarea");
    textarea.className = "form-control";
    textarea.rows = 20;
    textarea.readOnly = true;
    textarea.value = responseText;

    // Füge das Textarea dem neuen Div hinzu
    newDiv.appendChild(textarea);

    // Füge den neuen Div am Ende des Chatverlaufs hinzu
    chatHistory.appendChild(newDiv);
}
