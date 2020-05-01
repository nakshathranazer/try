import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Slider from "./Slider";

function DemoSlider() {

    const useStyles = makeStyles({
        root: {
          width: 200,
        },
      });


  return <Slider ui={useStyles} />;
}

export default DemoSlider;