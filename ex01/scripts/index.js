
function openModal(fileName) {
    var modal = document.getElementById('myModal');
    var iframe = document.getElementById('modalContent');
    iframe.src = fileName;
    modal.style.display = 'block';
}
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}





