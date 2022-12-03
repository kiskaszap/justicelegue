import * as React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import PhotoAlbum from 'react-photo-album';
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import './Repository.css';


function Repository() {
	const [open, setOpen] = React.useState(false);
	const [index, setIndex] = React.useState(-1);

	const images = [
		{ id: 1, src: require("../images/git1.png"), alt: "", caption: "github is awesome" },
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


	// https://codesandbox.io/s/yet-another-react-lightbox-examples-9qvmif?file=/src/examples/PhotoGallery.js&initialpath=/plugins/captions

	
	return (
		<>
		<div className='whatGit'>

			<h1 className='wig-heading'>Repository</h1>
			<div className='wig-text-holder'>
				<section className='Gallery'>
					<figure>
						<img src={require("../images/git1.png")} />
						<a onClick={() => setIndex(1)}><figcaption>Github is awesome!</figcaption></a>
					</figure>
				</section>
			</div>

			<Lightbox
				open={open}
				close={() => setOpen(false)}
				index={index}
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
				]}
				plugins={[Captions]}>
			</Lightbox>
		</div>
		</>
	)
}


export default Repository;
