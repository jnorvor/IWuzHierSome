//Ajax Request
function sendRequest(u) {
    alert("ajax");
    // Send request to server
    //u a url as a string
    //async is type of request
    var obj = $.ajax({
        url: u,
        async: false
    });
    //Convert the JSON string to object
    alert("result");
    var result = $.parseJSON(obj.responseText);
    alert("after result");
    return result; //return object
}
//var myurl = "http://cs.ashesi.edu.gh/~csashesi/class2016/jude-norvor/MobileWeb/finalProject/control.php?";
var myurl = "php/control.php?";

function check() {

}

//function test() {
//    var correct = document.getElementsByClassName('test');
//    //    var yes = document.getElementById("test");
//    //    var wrong = document.getElementsByClassName('ui negative message');
//    //    wrong.style.display = 'none';
//    //    yes.style.display = 'block';
//    correct.style.display = 'block';
//}
// show the given page, hide the rest
function show(elementID) {
    // try to find the requested page and alert if it's not found
    var element = document.getElementById(elementID);
    if (!element) {
        alert("no such element");
        return;
    }
    // get all pages, loop through them and hide them
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    // then show the requested page
    element.style.display = 'block';
}

function login() {
    alert("login");
    /*username*/
    var user_name = $("#em").val();
    alert(user_name);
    /*password*/
    var pass_word = $("#credentials").val();
    alert(pass_word);
    if (user_name == "" || pass_word == "") {
        $('.ui.form')
            .form({
                fields: {
                    email: {
                        rules: [
                            {
                                type: 'empty',
                                prompt: '{name} slot is empty'

          }
        ]
                    },
                    password: {
                        rules: [
                            {
                                type: 'empty',
                                prompt: '{name} slot is empty'
          }
        ]
                    }
                }
            });
    } else {

        var strUrl = myurl + "cmd=1&username=" + user_name + "&password=" + pass_word;
        prompt("url", strUrl);
        var objResult = sendRequest(strUrl);
        if (objResult.result == 0) {
            var wrong = document.getElementById('fail');
            // then show the requested page
            wrong.style.display = 'block';
        } else {
            // get all pages, loop through them and hide them
            var correct = document.getElementById('success');
            // then show the requested page
            correct.style.display = 'block';
            show("Page2");
        }
    }
}

//Create new user
function signup() {
    alert("signup time");
    /*Product id*/
    var first_n = $("#ename").val();
    alert(first_n);
    /*Product Name*/
    var last_n = $("#lname").val();
    alert(last_n);
    /*Quantity*/
    var password = $("#pass").val();
    alert(password);
    /*Quantity*/
    var verify = $("#vpass").val();
    alert(verify);
    /*Price*/
    var phone = $("#phone").val();
    alert(phone);
    /*Manufacturer*/
    var email = $("#eaddress").val();
    alert(email);
    /*Manufacturer*/
    var address = $("#address").val();
    alert(address);
    var phone = $("#phone").val();
    alert(phone);
    /*Manufacturer*/
    var cnumb = $("#cnumber").val();
    alert(cnumb);
    var scode = $("#scode").val();
    alert(scode);
    /*Manufacturer*/
    var month = $("#month option:selected").text();
    alert(month);
    var yr = $("#yr").val();
    alert(yr);
    if (password == verify) {
        var strUrl = myurl + "cmd=2&fname=" + first_n + "&lname=" + last_n + "&pass=" + password + "&email=" + email + "&address=" + address + "&card=" + cnumb + "&code=" + scode + "&month=" + month + "&year=" + yr;
        prompt("here:", strUrl);
        var objResult = sendRequest(strUrl);
        alert(strUrl);
        if (objResult.result == 0) {
            //      document.getElementById("error_areap").innerHTML =objResult.message;
            // return;
            alert("Failed");
        }
        if (objResult.result == 1) {
            alert("it worked!");
            show('Page4');
        }
    } else {
        var er = document.getElementById("err");
        er.innerText = "passwords dont match";
    }
}

//Create new user
function createEvent() {
    /*Product id*/
    var event = $("#event").val();
    alert(event);
    /*Product Name*/
    var host = $("#host").val();
    alert(host);
    /*Quantity*/
    var start = $("#start").val();
    alert(start);
    /*Price*/
    var end = $("#end").val();
    alert(end);
    /*Manufacturer*/
    var gmt = $("#gmt").val();
    alert(address);
    var location = $("#location").val();
    alert(phone);
    /*Manufacturer*/
    var description = $("#description").val();
    alert(cnumb);
}

