import React from 'react';
import '../App.css';

const Chat: React.FC = () => {
	return (
		<div className='Chat'>
			<div className='PageTitle'>{/* <h2>Chat</h2> */}</div>
			<div className='ChatContent'>
				<div className='ChatSideBar'>
					<div className='Content'>
						{/* <div className='ChatSideBarHeader'>Header</div> */}
						<div className='ChatSideBarContent'>
							<div className='ChatList'>
								<div className='chat-summary'>
									<div className='profile-pic'>A</div>
									<div className='chat-info'>
										<p>Bongole Marvin</p>
										<p>Hello testing...</p>
									</div>
								</div>
								<div className='chat-summary'>
									<div className='profile-pic'>A</div>
									<div className='chat-info'>
										<p>Bongole Marvin</p>
										<p>Hello testing...</p>
									</div>
								</div>
								<div className='chat-summary'>
									<div className='profile-pic'>A</div>
									<div className='chat-info'>
										<p>Butto Sophie</p>
										<p>Hi testing....</p>
									</div>
								</div>
								<div className='chat-summary'>
									<div className='profile-pic'>A</div>
									<div className='chat-info'>
										<p>Miracle Timothy</p>
										<p>Test message...</p>
									</div>
								</div>
								<div className='chat-summary'>
									<div className='profile-pic'>A</div>
									<div className='chat-info'>
										<p>Miracle Timothy</p>
										<p>Hello testing...</p>
									</div>
								</div>
								<div className='chat-summary'>
									<div className='profile-pic'>A</div>
									<div className='chat-info'>
										<p>Butto Sophie</p>
										<p>Hello testing...</p>
									</div>
								</div>
								<div className='chat-summary'>
									<div className='profile-pic'>A</div>
									<div className='chat-info'>
										<p>Miracle Timothy</p>
										<p>Test message...</p>
									</div>
								</div>

								<div className='chat-summary'>
									<div className='profile-pic'>B</div>
									<div className='chat-info'>
										<p>Jane Smith</p>
										<p>Last message...</p>
									</div>
								</div>
								<div className='chat-summary'>
									<div className='profile-pic'>B</div>
									<div className='chat-info'>
										<p>Jane Smith</p>
										<p>Last message...</p>
									</div>
								</div>
								<div className='chat-summary'>
									<div className='profile-pic'>B</div>
									<div className='chat-info'>
										<p>Jane Smith</p>
										<p>Last message...</p>
									</div>
								</div>
								<div className='chat-summary'>
									<div className='profile-pic'>B</div>
									<div className='chat-info'>
										<p>Jane Smith</p>
										<p>Last message...</p>
									</div>
								</div>
								<div className='chat-summary'>
									<div className='profile-pic'>B</div>
									<div className='chat-info'>
										<p>Jane Smith</p>
										<p>Last message...</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className='ChatSideBarFixedBottom'>Hello</div> */}
				</div>
				<div className='ChatMessageArea'>
					<div className='Content'>
						<div className='ChatMessageArea-Messages'></div>
						<div className='ChatMessageArea-Controls'>
							<form action='#'>
								<input
									type='text'
									name='message'
									id='message'
									placeholder='Type New Message'
								/>
							</form>
							<div>
								<svg
									className='SendMessageIcon'
									xmlns='http://www.w3.org/2000/svg'
									height='24px'
									viewBox='0 -960 960 960'
									width='24px'
									fill='#e8eaed'>
									<path d='M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z' />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chat;
