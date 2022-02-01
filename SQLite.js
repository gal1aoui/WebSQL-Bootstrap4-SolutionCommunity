// on va creér une base donné
var db = window.openDatabase('BDD', '1.0', 'Testt', 2* 1024 * 1024);
 db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Users (EMAIL TEXT unique, NAME TEXT, PRENAME TEXT, PASSWORD TEXT)');
    });
    // Cette fonctionnalité consiste à inclure le nouvel utilisateur dans la base de données et à identifier chaque utilisateur par e-mail unique 
    function ins(){    
        email = document.getElementById("em").value;
        nom = document.getElementById("nm").value;
        prenom = document.getElementById("pn").value;
        mot = document.getElementById("pass").value;
        db.transaction(function (tx) { 
        tx.executeSql('INSERT INTO Users(EMAIL, NAME, PRENAME, PASSWORD) VALUES (?,?,?,?)',[email,nom,prenom,mot]);
        });
        //verification de compte
        db.transaction(function (tx){ 
            tx.executeSql(
                'SELECT * FROM Users WHERE EMAIL=? ',[email], 
                function (tx, result) { 
                    //si l'email exist 
                    if(result.rows.length){
                    document.getElementById("msg").innerHTML ="<div id='msg' class='alert alert-warning alert-dismissible fade show' role='alert'><strong id='msgarea'>E-mail already used</strong><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div> ";
                        //message
                }
                    //sinon  on var insérer l'utilisateur avec un message
                    else {
                        document.getElementById("msg").innerHTML ="<div id='msg' class='alert alert-warning alert-dismissible fade show' role='alert'><strong id='msgarea'>Account created succesfully</strong><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div> ";
                    }
                },
                null
            ); 
        });
    }
    // ca pour le login
    function verif(){
        emlogin = document.getElementById("emlog").value;
        passlogin = document.getElementById("pass1").value;
        msg = document.getElementById("msg");
        db.transaction(function (tx) { 
            tx.executeSql(
                'SELECT * FROM Users WHERE EMAIL=? AND PASSWORD=?',[emlogin,passlogin], 
                function (tx, result) { 
                    //parcourir la base
                    if(result.rows.length){
                        // si l'utilisateur existe on va afficher un message avec un lien pour la page suivant Welcome.html
                        document.getElementById("msg").innerHTML ="<div id='msg' class='alert alert-warning alert-dismissible fade show' role='alert'><strong id='msgarea'>Your account are logged !<a href='welcome-3.html'> Take Your adress</a></strong><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div> ";
                    }
                    else {
                        //sinon on va afficher un message que l'utilisateur n'existe pas dans la base
                        document.getElementById("msg").innerHTML ="<div id='msg' class='alert alert-warning alert-dismissible fade show' role='alert'><strong id='msgarea'>No account with this address</strong><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div> ";
                    }
                },
                null
            ); 
        });
    }