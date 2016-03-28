//http://unutulmazfilmler.co/player/video/aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2hfdFc0aXNzU2d4LUcyZUZwMTN4Z3U4OGRWUjNGLVhoSjRXSzNfbnJnVnQ5UHAza015VTY0QnlnOVNYdURoeE9OOW5USnc9bTIy.mp4
document.getElementById("download").onclick = function(e, data) {
	getFile(e, data);	
}

document.getElementById("tr").onclick = function(e, data) {
	setCookie('lang', 'tr', 10);
	setLanguage('tr');	
}

document.getElementById("eng").onclick = function(e, data) {
	setCookie('lang', 'eng', 10);
	setLanguage('eng');	
}

function getFile(e, data) {
	var element = e.target;
	var link = $('#downloadLink').val();
    var d = new Date().toISOString().slice(0, 19).replace(/-/g, "");
    $(element).attr("href", link)
    .attr("download", "dist/file-" + d + ".mp4");
    $('#downloadLink').val('');
    return true;
}

function setLanguage(val) {
	val = val === '' ? getCookie() : val;

	switch(val) {
		case 'eng':
		$('#id-tr').removeClass('active');
		$('#id-eng').addClass('active');
		$('#notification').text('Please add to download link');
		$('#download').text('Download');
		break;

		case 'tr':
		$('#id-eng').removeClass('active');
		$('#id-tr').addClass('active');
		$('#notification').text('Indirmek istediginiz linki giriniz.');
		$('#download').text('Indir');
		break;
	}
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

setLanguage('');