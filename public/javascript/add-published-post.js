async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="publish-title"]').value;
    const publish_url = document.querySelector('input[name="publish-url"]').value;
  
    const response = await fetch(`/api/publish`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        publish_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  