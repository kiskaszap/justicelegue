import { React, useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import './Repository.css';





const Repository = () => {
	

	const [open, setOpen ] = useState(false);
	const [index, setIndex] = useState(-1);
	// https://codesandbox.io/s/yet-another-react-lightbox-examples-9qvmif?file=/src/examples/PhotoGallery.js&initialpath=/plugins/captions
	return (
		<>
		<Lightbox 
			open={open}
			close={() => setOpen(false)}
			slides={[
				{ src: require("../images/git1.png"),
				  title: "Github is awesomme",
				  description: "Lorem ipsum....",
				},
				{ src: require("../images/git2.png")}, 
				{ src: require("../images/git3.png")},
				{ src: require("../images/git3.png")},
				{ src: require("../images/git4.png")},
				{ src: require("../images/git5.png")},
				{ src: require("../images/git6.png")},
				{ src: require("../images/git7.png")},
				{ src: require("../images/git8.png")},
				{ src: require("../images/git9.png")},
				{ src: require("../images/git10.png")},
				{ src: require("../images/git11.png")},
			]} plugins={[Captions, Thumbnails]}>
		</Lightbox>
		<div className='whatGit'>

			<h1 className='wig-heading'>Repository</h1>
			<div className='wig-text-hloder'>
				<section className='Gallery'>
					<a><img src={require("../images/git1.png")} /></a>
				</section>
				
			</div>
		</div>
		</>
	)

}




export default Repository;
