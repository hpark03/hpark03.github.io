function toggleTheme() {
	var bod = document.body
	bod.classList.toggle('dark-mode');
}

document.getElementById('toggleButton').onclick = toggleTheme;