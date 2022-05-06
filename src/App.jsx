// IMPORT useState
import {useState} from "react";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from "./imageData";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer"
const App = () => {
  // USE useState TO CREATE  [bigImage, setBigImage] 
const [bigImage, setBigImage] = useState(imagesArr[0].img);
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  const handleClick = (imageUrl) => {
     // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
      setBigImage(imageUrl)
  }
  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT - map returns a modified array
  const images = imagesArr.map((ele, index) => (
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
    <img
    className="thumb"
    id="fade_out"
    key={index}
    src={ele.img}
    alt={ele.city}
    onClick={() => handleClick(ele.img)}
    />
  ))
  return (
    <div className="App">
      <Header />
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {images}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        <img src={bigImage} id="bigimage" alt='bigImage'/>
      </div>
      <Footer />
    </div>
  );
}

export default App;

