function showInfo(infoId) {
    // Hide all info contents
    const infoContents = document.querySelectorAll('.info-content');
    infoContents.forEach(content => {
        content.classList.add('hidden');
    });

    // Remove 'selected' class from all markers
    const markers = document.querySelectorAll('.book-marker');
    markers.forEach(marker => {
        marker.classList.remove('selected');
    });

    // Show the selected info content
    const selectedInfo = document.getElementById(infoId + '-info');
    selectedInfo.classList.remove('hidden');

    // Highlight the selected marker
    const selectedMarker = document.querySelector(`[onclick="showInfo('${infoId}')"]`);
    selectedMarker.classList.add('selected');
}
