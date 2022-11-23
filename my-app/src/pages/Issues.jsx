import React from 'react';

const Issues = () => {
	return (
		<div className='whatGit'>
			<h1 className='wig-heading'>COMMON ISSUES WHEN WORKING WITH GIT</h1>
			<div className='wig-text-holder point'> 
				<p>
				· Merge Conflicts – avoid these by committing all changes. 
				</p>
				<p>
				· Create gitignore file to override local files (example, ASP.NET Core lock files in Windows). 
				</p>
				<p>
				· Undo git changes before pulling new changes (easy in Visual Studio Code). 
				</p>
				<p>
				· We can restore lost work using Git history – easy in Visual Studio Code using Timeline. 
				</p>
				<p>
				· Typos can be made in commit messages – to undo, type “git commit –amend -m “New Message””. 
				</p>
				<p>
				· If we create a new file, it will have to be added to the existing commit before pushing. 
				</p>
				<p>
				· To remove a file you don’t want from the repository, use command “git reset “path/file name”. 
				</p>
				<p>
				· “git reset” command can be used to go back to a previous commit if issues arise. 
				</p>
				<p>
				· We can also recover local changes with the command “git reset –hard” if any work is lost. 
				</p>
				<p>
				· If you receive the “need merge” error, use the command “git pull origin branch to fix.
				</p>	
		</div>
		</div>
		
	);
};

export default Issues;
// add, commit, push, open pull request
