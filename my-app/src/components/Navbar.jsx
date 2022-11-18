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
						to="issues"
					>
						Issues{' '}
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
						Origin{' '}
					</Link>
					<Link
						className="links"
						to="repository"
					>
						Repository{' '}
					</Link>
					<Link
						className="links"
						to="whatisgit"
					>
						What is git{' '}
					</Link>
				</div>
			</nav>
			<Outlet />
		</div>
	);
};

export default Navbar;
