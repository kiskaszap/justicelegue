import React from 'react';

const Branches = () => {
	return (
		<div className='whatGit'>
		<h1 className='wig-heading'>GIT BRANCHES EXPLAINED</h1>
		<div className='wig-text-holder point'> 
			<p>
			· Git branches allow for the partitioning of development areas into independent sections. You can then make changes to a specific section of the project without editing the other or main section.
			</p>
			<center>
			<p>
			-
			</p>
			</center>
			<p>
			· For example you want to implement a new feature but are unsure if it will work in practice or not… without branches you would have to directly edit the main branch which could be the version that is automatically built and published live to the world… using a branch for the creation of this new feature allows you to version control the development of this new feature with all the benefits of version control without affecting the rest of the project.
			</p>
			<p>
			· You can then “merge” the branch into the main branch to be deployed.
			</p>
			<center>
			<p>
			-
			</p>
			</center>
			<p>· One benefit of using branches is that you avoid screwing up your deployment by pushing buggy code to the main branch which is then auto deployed live causing users to encounter errors. By using a development branch and and main branch as standard practice this is avoided</p>
			<p>· Another benefit of using branches is the avoidance of large merge conflicts</p>
			
	</div>
	</div>
	)
};

export default Branches;
