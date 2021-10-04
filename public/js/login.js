const loginForm = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
        console.log('nope')
      }
    }
  };



const signupForm = async (event) =>{
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    

    if (username&&password){
        console.log("submit new user")
    const response = await fetch('/api/user',{ 
        method: 'POST',
        body: JSON.stringify  ({username,password}),
        headers: { 'Content-Type': 'application/json' },
    });


    if (response.ok) {
        document.location.replace('/'); 
    } else {
        alert(reponse.statusText);
        console.log('nome')
    }
}
}


document
    .querySelector('.signup-form')
    .addEventListener('submit',signupForm);

document
    .querySelector('.login-form')
    .addEventListener('submit',loginForm);
