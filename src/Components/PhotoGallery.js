import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
  <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" alt="Book 1" />
  <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" alt="Book 2" />
  <img src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d" alt="Book 3" />
  <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765" alt="Book 4" />
  <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="Book 5" />
  <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da" alt="Book 6" />
  <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac" alt="Book 7" />
  <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d" alt="Book 8" />
  <img src="https://images.unsplash.com/photo-1496104679561-38b7a4dcfb0f" alt="Book 9" />
  <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df" alt="Book 10" />
</div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery