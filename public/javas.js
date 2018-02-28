   function toggleSignIn() {
                var email = document.getElementById('auth_login').value;
                var password = document.getElementById('auth_password').value;
                if (email.length < 4) {
                    alert('Пожалуйста введите email.');
                    return;
                }
                if (password.length < 4) {
                    alert('Пожалуйста введите пароль.');
                    return;
                }
                // Логинимся через email
                firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert('Направильный пароль.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
              document.getElementById('auth_login').value = "";
              document.getElementById('auth_password').value = "";
        }

    function handleSignUp() {
            var email = document.getElementById('auth_login').value;
            var password = document.getElementById('auth_password').value;
            if (email.length < 4) {
                alert('Пожалуйста введите email');
                return;
            }
            if (password.length < 4) {
                alert('Пожалуйста введите пароль');
                return;
            }
            // Регистрируемся через email
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
        }

    function signOut() {
  if (firebase.auth().currentUser) {
                firebase.auth().signOut();
                document.getElementById('auth_login').value = "";
                document.getElementById('auth_password').value = "";
            }
        }

    function initApp() {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    var displayName = user.displayName;
                    var email = user.email;
                    var emailVerified = user.emailVerified;
                    var photoURL = user.photoURL;
                    var isAnonymous = user.isAnonymous;
                    var uid = user.uid;
                    var providerData = user.providerData;
                   document.getElementById('quickstart-account-details').textContent = JSON.stringify(email, null, '  ');
                   document.getElementById('side_barr').style.display = "block";
                   document.getElementById('entrance').style.display = "block";
                   document.getElementById('form').style.display = "none";
                } else {
                    document.getElementById('quickstart-account-details').textContent = 'Человек';
                    document.getElementById('side_barr').style.display = "none";
                    document.getElementById('entrance').style.display = "none";   
                    document.getElementById('sidebar').style.display = "none";
                    document.getElementById('form').style.display = "block";
                }
            });
            document.getElementById('sing-in').addEventListener('click', toggleSignIn, false);
            document.getElementById('exit').addEventListener('click', signOut, false);
            document.getElementById('sing-up').addEventListener('click', handleSignUp, false);
        }

    window.onload = function() {
            initApp();
        };