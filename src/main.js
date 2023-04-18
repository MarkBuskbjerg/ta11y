import Alpine from 'alpinejs';
// import persist from '@alpinejs/persist';

window.Alpine = Alpine;

// Alpine.plugin(persist);

// Start Alpine when the page is ready.
window.addEventListener('DOMContentLoaded', () => {
	console.log('Dom is loaded');
	Alpine.start();
});

window.addEventListener('alpine:init', () => {
	// Alpine.data('dropdown', dropdown)
});
