import {React, useState, render} from 'react';
import './Repository.css';


const Repository = () => {
	
	const images = [ 
		{id: 1, path: require("../images/git1.png"), alt: "", caption: "Lorem ipsum"}
	];

	const [lightboxDisplay, setLightBoxDisplay] = useState(false);
	const [imageToShow, setImageToShow] = useState('');


	function Gallery() { 
		{images.map((item, i) => {
			<img src={item.path} alt={item.alt} caption={item.caption} />
			
		})};
	}
	
		return(
			<div className="whatGit">
				<h1 className="wig-heading">Repository</h1>
				{lightboxDisplay ?
					<Gallery></Gallery>
				: '' }
			</div>
		)
	
	
}

export default Repository;
