$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCcZNZA6komljOeKWWqzuZKGQbNvDq5fM0",
    authDomain: "eigenads.firebaseapp.com",
    databaseURL: "https://eigenads.firebaseio.com",
    storageBucket: "eigenads.appspot.com",
    messagingSenderId: "240681125155"
  };
  firebase.initializeApp(config);
  
  const txtFirstName = document.getElementById('txtFirstName');
  const txtLastName = document.getElementById('txtLastName');
  const txtEmailAdress = document.getElementById('txtEmailAdress');
  const txtPassword = document.getElementById('txtPassword');
    const btnSubmit = document.getElementById('btnSubmit');
  const txtEmailAdresslogin = document.getElementById('txtEmailAdresslogin');
  const txtPasswordlogin = document.getElementById('txtPasswordlogin');
  const btnlogin = document.getElementById('btnlogin');

  // Add Log In Event
  btnlogin.addEventListener('click' , e => {
    
    const email = txtEmailAdresslogin.value;
    const pass = txtPasswordlogin.value;
    const auth = firebase.auth();
    
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
});

  btnSubmit.addEventListener('click', e =>  {
    const firstName = txtFirstName.value;
    const lastName = txtLastName.value;
    const email = txtEmailAdress.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});

var database = firebase.database("https://eigenads.firebaseio.com/");

function writeUserData(txtFirstName, txtLastName, txtEmailAdress, txtPassword) {
  firebase.database().ref('users/' + userId).set({
    userId_firstname: txtFirstName.value,
    userId_lastname:txtLastName.value,
    userId_email: txtEmailAdress.value,
    userId_password : txtPassword.value
  });
}

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
        console.log(firebaseUser);
        }
        else {
        console.log('Hello you are not logged in ');
        }
    });
}());

