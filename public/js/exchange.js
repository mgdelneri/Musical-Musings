const exchangeFormHandler = async function(event) {
    event.preventDefault();

    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="exchange-body"]').value;

    if (body) {
        await fetch('/api/exchange', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        document.location.reload();
    }
};

document
    .querySelector('#new-exchange-form')
    .addEventListener('submit', exchangeFormHandler);