import React from 'react';

const Origin = () => {
	return <div className='whatGit'>

<h1 className='wig-heading'>ORIGIN / MASTER</h1>
<div className='wig-text-holder'>
			<p>ORIGIN: The default name given to the remote repository, from where the local repository is cloned. In other words, origin is a remote location. 
</p><p>
MASTER: The default name that GIT gives to the main branch when the local repository is initialized. This branch has the finalized/up-to-date code. All other branches are based from this branch. </p>

<p>Origin and Master should not be confused with the origin/master branch!!' 

‘Origin/master’ is a remote-tracking branch present in a local repository that tracks changes made to the master branch in the remote repository. It is cached copy of what was last pulled from the origin. </p>
		</div>


	</div>;
};


export default Origin;
