
module.exports = {
  allImagesLoaded: function(parentNode) {
    const imgElements = parentNode.querySelectorAll('img');
    for (const img of imgElements) {
      if (!img.complete) {
        return false;
      }
    }
    return true;
  }
}
