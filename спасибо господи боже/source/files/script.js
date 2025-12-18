document.getElementById("photoInput").addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => document.getElementById("profilePhoto").src = e.target.result;
    reader.readAsDataURL(file);
});

let currentButtonId = null;

function openEditor(btnId) {
    currentButtonId = btnId;
    const btn = document.getElementById(btnId);
    document.getElementById("popupText").value = btn.textContent;

    document.getElementById("popupBG").style.display = "flex";
}

function closeEditor() {
    document.getElementById("popupBG").style.display = "none";
}

function saveText() {
    if (currentButtonId) {
        const btn = document.getElementById(currentButtonId);
        btn.textContent = document.getElementById("popupText").value;
    }
    closeEditor();
}