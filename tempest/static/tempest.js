function sendMessage() {
    const question = document.getElementById('chatInput').value;

    // CSRF-Token aus verstecktem Input holen
    const csrfToken = document.querySelector('#csrf-form input[name="csrfmiddlewaretoken"]').value;

    const formData = new FormData();
    formData.append('question', question);
    formData.append('csrfmiddlewaretoken', csrfToken);

    fetch('/tempest/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('chatOutput').value = data;
        console.log(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
