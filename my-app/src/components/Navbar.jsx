import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav>
				<div className="linkContainer">
					<Link
						className="links"
						to="/"
					>
						Home{' '}
					</Link>
					<Link
						className="links"
						to="whatisgit"
					>
						What is Git?{' '}
					</Link>
					<Link
						className="links"
						to="repository"
					>
						Repositories{' '}
					</Link>

					<Link
						className="links"
						to="branches"
					>
						Branches{' '}
					</Link>
					<Link
						className="links"
						to="origin"
					>
						Origin/ Master{' '}
					</Link>
	
					<Link
						className="links"
						to="issues"
					>
						Issues{' '}
					</Link>
		
				</div>
			</nav>
			<Outlet />
		</div>
	);
};

export default Navbar;
