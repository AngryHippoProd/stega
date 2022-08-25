import React, { useState, useCallback } from 'react';
// import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';
import {encode} from './encode';

export const ImageViewing = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    'http://placeimg.com/1200/800/nature',
    'http://placeimg.com/800/1200/nature',
    'http://placeimg.com/1920/1080/nature',
    'http://placeimg.com/1500/500/nature',
  ];


  const openImageViewer = useCallback((index) => {
    let imageURL = images[index];
    setCurrentImage(index);
    setIsViewerOpen(true);
    encode(imageURL);
  }, []);

  const onStego = async () => {
    encode(uri, embText => {

    })
  }

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index)}
          width="300"
          key={ index }
          style={{ margin: '2px' }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    </div>
  );
}
// render(<ImageViewing />, document.getElementById('app'))
