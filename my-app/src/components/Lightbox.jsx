import { React, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";

function LightboxTest(props) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(-1);

    <Lightbox
        open={index => 0}
        index={index}
        close={() => setOpen(false)}
        slides={[
            {
                src: require("../images/git1.png"),
                title: "Github is awesomme",
                description: "Lorem ipsum....",
            },
            { src: require("../images/git2.png") },
            { src: require("../images/git3.png") },
            { src: require("../images/git3.png") },
            { src: require("../images/git4.png") },
            { src: require("../images/git5.png") },
            { src: require("../images/git6.png") },
            { src: require("../images/git7.png") },
            { src: require("../images/git8.png") },
            { src: require("../images/git9.png") },
            { src: require("../images/git10.png") },
            { src: require("../images/git11.png") },
        ]} plugins={[Captions, Thumbnails]}>
    </Lightbox>
}

export default LightboxTest;