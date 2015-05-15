$("body").append('<audio id="notification_sound_handle" style="display: none;" src="https://raw.githubusercontent.com/Illyriad-Community/Snippets/master/sounds/bding.ogg"></audio>');
var ac_observer = new MutationObserver(function(mutations, observer) {
	document.getElementById('notification_sound_handle').play();
});
ac_observer.observe(allianceChatTab,{subtree:true,childList:true});
