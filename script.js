function show_hide(item){
    var element = document.getElementById(item);
    // let opacity = 0;
    // let fadeIn = setInterval(() => {
    // element.style.opacity = opacity;
    // opacity += 0.01;
    // }, 10);
    if (element.style.display == "block"){
        element.style.display = "none";
    }else{
        element.style.display = "block";
        // if (opacity >= 1) {
        //     clearInterval(fadeIn);
        //  }
    }
}

function send_fourm(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var discord = document.getElementById('discord').value;
    var osWindows = document.getElementById('windows').checked;
    var osLinux = document.getElementById('Linux').checked;
    var osMacOS = document.getElementById('MacOS').checked;
    var distro = document.getElementById('distro').value;
    var pythonYes = document.getElementById('pycheckyes').checked;
    var pythonNo = document.getElementById('pychechno').checked;
    var qtYes = document.getElementById('qtcheckyes').checked;
    var qtNo = document.getElementById('qtcheckno').checked;
    var webDev = document.getElementById('webdev').value;
    var arts = document.getElementById('arts').value;
    var dev = document.getElementById('dev').checked;
    var test = document.getElementById('test').checked;
    var des = document.getElementById('des').checked;
    var mar = document.getElementById('mar').checked;
    var soc = document.getElementById('soc').checked;
    var mon = document.getElementById('mon').checked;
    var notes = document.getElementById('notes').value;
    
    // Constructing the message
    var message = "%0D%0AName:" + name.replace(/\s/g, "%20");
    message += "%0D%0AEmail:" + email.replace(/\s/g, "%20");
    message += "%0D%0ADiscord:" + discord.replace(/\s/g, "%20");
    message += "%0D%0AOperating%20Systems:" + (osWindows ? "Windows" : "") + (osLinux ? "-Linux" : "") + (osMacOS ? "-MacOS" : "");
    message += "%0D%0ALinux%20Distro:" + distro.replace(/\s/g, "%20");
    message += "%0D%0APython%20Programmer:" + (pythonYes ? "Yes" : "No");
    message += "%0D%0APython%20Programmer%20-%20Familiar%20with%20Qt:" + (qtYes ? "Yes" : "No");
    message += "%0D%0AWeb%20Development%20Skills:" + webDev.replace(/\s/g, "%20");
    message += "%0D%0ADigital%20Art%20Skills:" + arts.replace(/\s/g, "%20");
    message += "%0D%0ARoles:" + (dev ? "Developer" : "") + (test ? "-Tester" : "") + (des ? "-Designer" : "") + (mar ? "-Marketing" : "") + (soc ? "-Social%20Media" : "") + (mon ? "-Motion%20Graphics%20and%20Video%20Editing" : "");
    message += "%0D%0Anotes:" + notes.replace(/\s/g, "%20");

    // prepare message
    var token = "6050797759:AAGmDdI-lhakNQ1eTPj8BIpbIUVO8GJnke4";
    var chat_id = 1866453320;
    var url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chat_id + '&text=' + message + '&parse_mode=html';

    // send message 
    try{
        var oReq = new XMLHttpRequest();
        oReq.open("GET", url, true);
        oReq.send();;
        document.getElementById("submit").style.display = "none"
        alert("Sent sucessfully!\nwait for respond in your email")
    }catch{
        alert("there is an error happend!\ntell us on discord.")
    }

    }