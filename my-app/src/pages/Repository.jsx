import * as React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import PhotoAlbum from 'react-photo-album';
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import './Repository.css';




const Repository = (props) => {
	const [open, setOpen] = React.useState(false);
	const [index, setIndex] = React.useState(-1);


	/*
		Documentation I followed for this page:
		https://codesandbox.io/s/yet-another-react-lightbox-examples-9qvmif?file=/src/examples/PhotoGallery.js&initialpath=/examples/gallery

		To use the page, you must run "npm install yet-another-react-lightbox".
	*/

	return (
		
		<>
			<div className='whatGit'>
				<h1 className='wig-heading'>Repository</h1>
				<div className='wig-text-holder'>
					<section className='Gallery'>
						<figure>
							<a onClick={() => setIndex(0)}><img src={require('../images/git1.png')} /></a>
							<figcaption>1.  Sign in to Github.</figcaption>
						</figure>
						<figure>
							<a onClick={() => setIndex(1)}><img src={require('../images/git2.png')} /></a>
							<figcaption>2.  Create Repository</figcaption>
						</figure>
						<figure>
							<a onClick={() => setIndex(2)}><img src={require('../images/git3.png')} /></a>
							<figcaption>3.  Name Repository</figcaption>
						</figure>
						<figure>
							<a onClick={() => setIndex(3)}><img src={require('../images/git4.png')} /></a>
							<figcaption>4.  Publish Repository</figcaption>
						</figure>
						<figure>
							<a onClick={() => setIndex(4)}><img src={require('../images/git5.png')} /></a>
							<figcaption>5.  Repository Created</figcaption>
						</figure>
						<figure>
							<a onClick={() => setIndex(5)}><img src={require('../images/git6.png')} /></a>
							<figcaption>Settings</figcaption>
						</figure>
						<figure>
							<a onClick={() => setIndex(6)}><img src={require('../images/git7.png')} /></a>
							<figcaption>Github is awesome!</figcaption>
						</figure>
						<figure>
							<a onClick={() => setIndex(7)}><img src={require('../images/git8.png')} /></a>
							<figcaption>Collaborators Menu</figcaption>
						</figure>
						<figure>
							<a onClick={() => setIndex(8)}><img src={require('../images/git9.png')} /></a>
							<figcaption>Manage Access</figcaption>
						</figure>
						<figure>
							<a onClick={() => setIndex(9)}><img src={require('../images/git10.png')} /></a>
							<figcaption>Visual Studio Code</figcaption>
						</figure>
						<figure>
							<a onClick={() => setIndex(10)}><img src={require('../images/git11.png')} /></a>
							<figcaption>Clone Project</figcaption>
						</figure>
					</section>
				</div>
			</div>
			<Lightbox
        open={index >= 0}
		index={index}
        close={() => setIndex(-1)}
        slides={[
            {
                src: require("../images/git1.png"),
                title: "Sign in to GitHub",
                description: "Sign in to your GitHub account.",
            },
            { 
				src: require("../images/git2.png"),
				title: "Create new repository",
				description: "Set up a new GitHub repo and access this repo with VSCode.  On the upper right hand corner click the plus sign and then new repository."
			},
            { 
				src: require("../images/git3.png"), 
				title: "Name repository",
				description: "Give the repository a name and keep it short."
			},
            { 
				src: require("../images/git4.png"),
				title: "Create New Repository",
				description: "Screenshot of create new repository button"
			},
            { 
				src: require("../images/git5.png"), 
				title: "Create New Repository",
				description: "After entering the desired specs click create repository at the bottom of the page."
			},
            { 
				src: require("../images/git6.png"),
				title:"Open new repository",
				description: "Screenshot of settings option"
			},
            { 
				src: require("../images/git7.png"), 
				title: "Add Collaborators",
				description: "On the left hand of the screen select collaborators"
			},
            { 
				src: require("../images/git8.png"),
				title: "Add Collaborators",
				description: "Screenshot of manage collaborators page" 
			},
            { 
				src: require("../images/git9.png"),
				title: "Clone Project",
				description: "To access the project on vs code, select code the from the drop down box copy the url" 
			},
            { 
				src: require("../images/git10.png"),
				title: "Visual Studio Code",
				description: "After opening VSCode select clone Git repository."
			},
            { 
				src: require("../images/git11.png"),
				title: "Clone from Git", 
				description: "Screenshot showing how to paste the repository address in VSCode."
			}
        ]} plugins={[Captions, Thumbnails]}>
    </Lightbox>
		</>
	)
}




export default Repository;
