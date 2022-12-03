import { React, Component, useState } from 'react';
import Lightbox from '../components/Lightbox';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import './Repository.css';


function Repository() {

	// https://codesandbox.io/s/yet-another-react-lightbox-examples-9qvmif?file=/src/examples/PhotoGallery.js&initialpath=/plugins/captions

	const images = [
		{ id: 1, src: require("../images/git1.png"), alt: "", caption: "github is awesome"},
		{ id: 2, src: require("../images/git2.png"), alt: "", caption: "" },
		{ id: 3, src: require("../images/git3.png"), alt: "", caption: "" },
		{ id: 4, src: require("../images/git4.png"), alt: "", caption: "" },
		{ id: 5, src: require("../images/git5.png"), alt: "", caption: "" },
		{ id: 6, src: require("../images/git6.png"), alt: "", caption: "" },
		{ id: 7, src: require("../images/git7.png"), alt: "", caption: "" },
		{ id: 8, src: require("../images/git8.png"), alt: "", caption: "" },
		{ id: 9, src: require("../images/git9.png"), alt: "", caption: "" },
		{ id: 10, src: require("../images/git10.png"), alt: "", caption: "" },
		{ id: 11, src: require("../images/git11.png"), alt: "", caption: "" }
	]

	function showImage(e) {
		e.preventDefault();
		<Lightbox setOpen={true} />
	}

	return (
		<>
			<div className='whatGit'>
				<h1 className='wig-heading'>Repository</h1>
				<div className='wig-text-holder'>
					<section className='Gallery'>
						{images.map((image) => // Here we map the images array above into renderable html 
							<figure>
								<a href="#" onClick={showImage}><img src={image.src} alt={image.alt} /></a>
								<figcaption>{image.caption}</figcaption>
							</figure>
						)}
					</section>
				</div>
			</div>

			
		</>
	)
}

export default Repository;
