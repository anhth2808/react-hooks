import React, { useState } from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver"

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-187.jpg" secondaryImg="/static/speakers/Speaker-187.jpg" />
      <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-1124.jpg" secondaryImg="/static/speakers/Speaker-1124.jpg" />
    </div>
  )
}


export default ImageChangeOnMouseOver;