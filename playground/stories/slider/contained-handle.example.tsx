import * as React from "react";
import { Slider, SLIDER_HANDLE_ALIGN_CONTAIN } from "@reach-fork/slider";
import "@reach-fork/slider/styles.css";

let name = "Contained Handle";

function Example() {
	return <Slider handleAlignment={SLIDER_HANDLE_ALIGN_CONTAIN}></Slider>;
}

Example.storyName = name;
export { Example };
