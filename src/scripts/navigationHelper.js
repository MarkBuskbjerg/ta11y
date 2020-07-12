var navTrigger = document.getElementById('navTrigger');
var primaryNav = document.getElementById('primaryNav');
var ctaBlock = document.getElementById('ctaBlock');

function navHandler() {
	if (!navTrigger.classList.contains('open')) {
		navTrigger.classList.add('open');
		primaryNav.classList.remove('hidden');
		ctaBlock.classList.remove('hidden');
	} else {
		navTrigger.classList.remove('open');
		ctaBlock.classList.add('hidden');
		primaryNav.classList.add('hidden');
	}
}

document.addEventListener('click', function (element) {
	if (element.target.closest('#navTrigger')) {
		navHandler();
	}
});
