const NavBar = () => {
	return (
		<nav>
			<a href='index.html'>TS AMAXOZONA</a>

			<div className='navbar'>
				<ul className='nav-links'>
					<li>
						<a href='/cart'>Cart</a>
					</li>
					<li>
						<a href='/sign-in'>Sign in</a>
					</li>
				</ul>
				{/* <div className="search-box">
                <img src="images/search.png" alt="search"/>
                <input type="text" placeholder="Search"/>
                
            </div>*/}
				<div className='nav-user-icon online'>
					<img src='./images/member-9.png' alt='profile' id='dropdown-btn' />
				</div>
			</div>

			<div className='settings-menu'>
				<div id='dark-btn'>
					<span></span>
				</div>
				<div className='settings-menu-inner'>
					<div className='user-profile'>
						<img src='images/profile-pic.png' alt='profile' />
						<div>
							<p>John Nicholson</p>
							<a href='profile.html'>See your profile</a>
						</div>
					</div>
					<hr />
					<div className='user-profile'>
						<img src='images/feedback.png' alt='profile' />
						<div>
							<p>Give Feeback</p>
							<a href='#'>Help us to improve the new design</a>
						</div>
					</div>
					<hr />

					<div className='settings-links'>
						<img
							src='images/setting.png'
							alt='setting'
							className='settings-icon'
						/>
						<a href='#'>
							Settings & Privacy{' '}
							<img src='images/arrow.png' width='10px' alt='arrow' />
						</a>
					</div>
					<div className='settings-links'>
						<img
							src='images/help.png'
							alt='setting'
							className='settings-icon'
						/>
						<a href='#'>
							Help & Support
							<img src='images/arrow.png' width='10px' alt='arrow' />
						</a>
					</div>
					<div className='settings-links'>
						<img
							src='images/display.png'
							alt='setting'
							className='settings-icon'
						/>
						<a href='#'>
							Display & Accessibility{' '}
							<img src='images/arrow.png' width='10px' alt='arrow' />
						</a>
					</div>
					<div className='settings-links'>
						<img
							src='images/logout.png'
							alt='setting'
							className='settings-icon'
						/>
						<a href='#'>
							Logout <img src='images/arrow.png' width='10px' alt='arrow' />
						</a>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
