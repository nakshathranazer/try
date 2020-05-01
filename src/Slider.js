import React from "react";

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


 function ContinuousSlider() {

  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
function Slider(props) {
 
        return (
            <div >
              <Typography id="continuous-slider" gutterBottom>
                Volume
              </Typography>
             
                  <VolumeDown />
               
                  <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                
                  <VolumeUp />
               
              <Typography id="disabled-slider" gutterBottom>
                Disabled slider
              </Typography>
              <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" />
            </div>
          );
        }
    }   
export default Slider;

