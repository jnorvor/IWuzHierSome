//Ajax Request
function sendRequest(u) {
    alert("ajax");
    // Send request to server
    //u a url as a string
    //async is type of request
    var obj = $.ajax({
        url: u,
        async: false,
        type: 'GET',
        cache: false
    });
    //Convert the JSON string to object
    alert("result");
    var result = $.parseJSON(obj.responseText);
    alert("after result");
    return result; //return object
}
//var myurl = "http://cs.ashesi.edu.gh/~csashesi/class2016/jude-norvor/MobileWeb/finalProject/control.php?";
var myurl = "php/control.php?";

var numTag; //variable to store number of tags

//function test() {
//    alert("hello");
//    var correct = document.getElementsByClassName('test');
//    var yes = document.getElementById("test");
//    var wrong = document.getElementsByClassName('ui negative message');
//    wrong.style.display = 'none';
//    yes.style.display = 'block';
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

//Verify user credentials and if user has filled in fields
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

//Create new user and take information
function signup() {
    /*Persons First Name*/
    var first_n = $("#ename").val();
    /*Persons Last Name*/
    var last_n = $("#lname").val();
    /*Password*/
    var password = $("#pass").val();
    /*Verify if password is the same*/
    var verify = $("#vpass").val();
    /*Phone Number*/
    var phone = $("#phone").val();
    /*Email address*/
    var email = $("#eaddress").val();
    /*Person Address*/
    var address = $("#address").val();
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

//DatePicker
$(function () {
    //    $("#datepicker").datepicker();
    $("#start").datepicker({
        dateFormat: "dd/mm/yy"
    });

    $("#end").datepicker({
        dateFormat: "dd/mm/yy"
    });

    $('#gmt').timepicker();
    $('#gmt').timepicker('option', {
        useSelect: true
    });

    $('#egmt').timepicker();
    $('#egmt').timepicker('option', {
        useSelect: true
    });
});


var form = document.getElementById('formname');

var proimage = document.getElementById('hi');

form.onsubmit = function (event) {
        alert("form");
        event.preventDefault();
        var events = $("#events").val();
        alert(events);
        /*Host Name*/
        var host = $("#host").val();
        alert(host);
        /*Start Date*/
        var start = $("#start").val();
        alert(start);
        /*End Date*/
        var end = $("#end").val();
        alert(end);
        /*Start Time*/
        var gmt = $("#gmt").val();
        alert(gmt);
        /*End Time*/
        var egmt = $("#egmt").val();
        alert(egmt);
        /*Location*/
        var location = $("#location").val();
        alert(location);
        /*Description*/
        var description = $("#description").val();
        alert(description);
        var i = 1;
        var a = 1;
        var all = new Array();
        for (i = 0; i < numTag; i++) {
            all[i] = $("#" + a).val();
            a++;
        }
        var formData = new FormData();
        alert("daat");
        formData.append("cmd", 3);
        formData.append("events", events);
        formData.append("host", host);
        formData.append("start", start);
        formData.append("end", end);
        formData.append("gmt", gmt);
        formData.append("egmt", egmt);
        formData.append("location", location);
        formData.append("description", description);
        formData.append("tag", all);
        formData.append("thepic", proimage.files[0]);
        alert("daat2");
        $.ajax({
            url: "php/control.php",
            async: false,
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            dataType: 'text',
            success: function (res) {
                //                alert(res);
            }
        });
        alert("daat3");
        //}



    }
    //Create new user
    //function eCreate() {
    //    alert("create");
    //    //    var proimage = $("#hi").val();
    //    var proimage = document.getElementById("hi");
    //
    //    var pic = proimage.value.replace("C:\\fakepath\\", "");
    //    var p = proimage.files[0];
    //    alert(pic);
    //    /*Event Name*/
    //    var events = $("#events").val();
    //    alert(events);
    //    //    /*Host Name*/
    //    var host = $("#host").val();
    //    alert(host);
    //    //    /*Start Date*/
    //    var start = $("#start").val();
    //    alert(start);
    //    //    /*End Date*/
    //    var end = $("#end").val();
    //    alert(end);
    //    //    /*Time*/
    //    var gmt = $("#gmt").val();
    //    alert(gmt);
    //
    //    var egmt = $("#egmt").val();
    //    alert(egmt);
    //    //    Time
    //    var location = $("#location").val();
    //    alert(location);
    //    /*description*/
    //    var description = $("#description").val();
    //    alert(description);
    //    var i = 1;
    //    alert(i);
    //    if (events == "" || host == "" || start == "" || end == "" || gmt == "" || egmt == "" || location == "" || description == "") {
    ////        $('.ui.form')
    ////            .form({
    ////                fields: {
    ////                    email: {
    ////                        rules: [
    ////                            {
    ////                                type: 'empty',
    ////                                prompt: '{name} slot is empty'
    ////
    ////                }
    ////              ]
    ////                    },
    ////                    password: {
    ////                        rules: [
    ////                            {
    ////                                type: 'empty',
    ////                                prompt: '{name} slot is empty'
    ////                }
    ////              ]
    ////                    }
    ////                }
    ////            });
    //    } else {
    //        var a = 1;
    //        var all = new Array();
    //        for (i = 0; i < numTag; i++) {
    //            all[i] = $("#" + a).val();
    //            a++;
    //        }
    //
    //
    //        var strUrl = myurl + "cmd=3&pic=" + p + "&event=" + events + "&host=" + host + "&start=" + start + "&end=" + end + "&gmt=" + gmt + "&location=" + location + "&description=" + description + "&tag=" + all;
    //        prompt("here:", strUrl);
    //        var objResult = sendRequest(strUrl);
    //        alert(strUrl);
    //        alert(objResult.result);
    //        //        if (objResult.result == 1) {
    //        //            //      document.getElementById("error_areap").innerHTML =objResult.message;
    //        // return;
    //        //            alert("Failed");
    //        //        }
    //        //        if (objResult.result == 1) {
    //        //            alert("it worked!");
    //        //            show('Page4');
    //        //        }
    //    }
    //
    //}
    // when the select is changed...
    //$('#set').on('change', function () {
    //    alert("im called");
    // get the option that was selected
    //    selectedOption = $("#set option:selected").value();
    // put the option in the place you want it
    //    $('#outcome span').html(selectedOption);
    //});

// Remove tags 
function remove() {
    for (var i = 1; i <= numTag; i++) {
        var div = document.getElementById("tags");
        div.parentNode.removeChild(div);
    }
}

//Create slot for user to enter tag
function trst() {
    if (numTag > 0) {
        remove();
    }
    alert("im called");
    var element = document.getElementById("set");
    var op = element.options[element.selectedIndex].value;
    alert(op);
    numTag = op;
    alert(numTag);

    for (var i = 1; i <= op; i++) {
        $('#concat').append('<div id="tags" class="two wide column">' + '<input type="text" id="' + i +
            '" class="t" name="daterange" placeholder="Tag" />' + '</div>');
    }
}

//Display Cards and populate from database
function display() {
    alert("im called");
    var obj;
    var url = myurl + "cmd=5";
    prompt("url", url);
    obj = sendRequest(url);
    alert(obj.length);
    alert(obj[0].owner);
    for (var i = 0; i < obj.length; i++) {
        $('#crd').append('<div id="gr" class="eight wide column">' + '<div id="cb" class="ui card" onclick="show("Page6");">' + '<div class="content">' + '<center>' + obj[i].id + '</<center>' + '</div>' + '<div class = "content">' + '<center>' + obj[i].owner + '</center>' + '</div>' + '<div class= "image">' + '<center>' + '<img src = "pics/no-preview.jpg">' + '</center>' + '</div>' + '<div class = "content">' + '<span class = "right floated">' + '<i class = "fa fa-heart" > </i>' + obj[i].des + 'likes </span>' + '<i class = "fa fa-user" > </i>' + obj[i].contact + 'people' + '</div>' + '<div class = "extra content">' + '<a class = "ui label">' + obj[i].id + '<i class = "delete icon" > </i> </a>' + '</div>' + '<div class = "extra content">' + '<button class = "ui circular facebook icon button" >' + '<i class = "facebook icon"> </i> </button>' + '<button class = "ui circular twitter icon button">' + '<i class = "twitter icon"> </i> </button>' + '<button class = "ui circular linkedin icon button">' + '<i class = "linkedin icon" > </i> </button>' + '<button class = "ui circular google plus icon button">' + '<i class = "google plus icon"> </i> </button>');
    }
}