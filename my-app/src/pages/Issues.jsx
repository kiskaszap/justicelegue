import React from 'react';

const Issues = () => {
	return (
		<div>
			<h1 className='issues-heading'>some common issues when working with Git</h1>
			<div className='issues-text-holder'>
			<p>Git Common Issues 

· Merge Conflicts – avoid these by committing all changes. 

· Create gitignore file to override local files (example, ASP.NET Core lock files in Windows). 

· Undo git changes before pulling new changes (easy in Visual Studio Code). 

· We can restore lost work using Git history – easy in Visual Studio Code using Timeline. 

· Typos can be made in commit messages – to undo, type “git commit –amend -m “New Message””. 

· If we create a new file, it will have to be added to the existing commit before pushing. 

· To remove a file you don’t want from the repository, use command “git reset “path/file name”. 

· “git reset” command can be used to go back to a previous commit if issues arise. 

· We can also recover local changes with the command “git reset –hard” if any work is lost. 

· If you receive the “need merge” error, use the command “git pull origin branch to fix </p>
		</div>
		</div>
	);
};

export default Issues;
// add, commit, push, open pull request
