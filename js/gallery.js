function previewImage(image) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    modalImage.src = image.src;
    modal.style.display = 'flex';
}

function closePreview() {
    document.getElementById('imageModal').style.display = 'none';
}
