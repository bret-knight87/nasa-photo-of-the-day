import React, { useState, useEffect } from 'react';
import axios from "axios";

import NasaPhotoMaker from './NasaPhotoMaker';



export default function NasaPhoto () {
    const [nasaPic, setNasaPic] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=FmPFT7yMYPwDvcpbq2xQXPhj0MLlq8Cq2cbfKTDK')
      .then(data => {
        console.log(data);
        setNasaPic(data.data);

      });
  }, []);

  return (
    <div>
        <NasaPhotoMaker title={nasaPic.title} imgUrl={nasaPic.hdurl} />
    </div>
  )

};

