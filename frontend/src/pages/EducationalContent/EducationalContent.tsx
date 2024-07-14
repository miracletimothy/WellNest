import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Logo from '../../assets/img/101515806.jpg';
import '../../styles/Theme.css';

const EducationalContent: React.FC = () => {
	return (
		<div
			id='page-container'
			className='page-container'>
			<Header
				pageTitle='Educational content'
				className='header'
			/>
			<div
				id='page-content'
				className='page-content'>
				<h1
					id='page-heading'
					className='page-heading'>
					Content categories
				</h1>

				<section
					id='grid-view'
					className='grid view'>
					<Link
						to='/content/prenatal-care'
						className='grid-item'>
						<img
							src={Logo}
							alt='Prenatal Care'
						/>
						<span>
							<p>Prenatal Care</p>
						</span>
					</Link>
					<Link
						to='/content/postnatal-care'
						className='grid-item'>
						<img
							src={Logo}
							alt='Postnatal Care'
						/>
						<span>
							<p>Postnatal Care</p>
						</span>
					</Link>
					<Link
						to='/content/nutrition'
						className='grid-item'>
						<img
							src={Logo}
							alt='Nutrition'
						/>
						<span>
							<p>Nutrition</p>
						</span>
					</Link>
					<Link
						to='/content/exercise-and-fitness'
						className='grid-item'>
						<img
							src={Logo}
							alt='Exercise and Fitness'
						/>
						<span>
							<p>Exercise and Fitness</p>
						</span>
					</Link>
					<Link
						to='/content/mental-health'
						className='grid-item'>
						<img
							src={Logo}
							alt='Mental Health'
						/>
						<span>
							<p>Mental Health</p>
						</span>
					</Link>
					<Link
						to='/content/family-planning'
						className='grid-item'>
						<img
							src={Logo}
							alt='Family Planning'
						/>
						<span>
							<p>Family Planning</p>
						</span>
					</Link>
					<Link
						to='/content/labor-and-delivery'
						className='grid-item'>
						<img
							src={Logo}
							alt='Labor and Delivery'
						/>
						<span>
							<p>Labor and Delivery</p>
						</span>
					</Link>
					<Link
						to='/content/breastfeeding'
						className='grid-item'>
						<img
							src={Logo}
							alt='Breastfeeding'
						/>
						<span>
							<p>Breastfeeding</p>
						</span>
					</Link>
					<Link
						to='/content/newborn-care'
						className='grid-item'>
						<img
							src={Logo}
							alt='Newborn Care'
						/>
						<span>
							<p>Newborn Care</p>
						</span>
					</Link>
					<Link
						to='/content/vaccination-and-immunization'
						className='grid-item'>
						<img
							src={Logo}
							alt='Vaccination and Immunization'
						/>
						<span>
							<p>Vaccination and Immunization</p>
						</span>
					</Link>
					<Link
						to='/content/common-pregnancy-symptoms-and-remedies'
						className='grid-item'>
						<img
							src={Logo}
							alt='Common Pregnancy Symptoms and Remedies'
						/>
						<span>
							<p>Common Pregnancy Symptoms and Remedies</p>
						</span>
					</Link>
					<Link
						to='/content/emergency-and-complications'
						className='grid-item'>
						<img
							src={Logo}
							alt='Emergency and Complications'
						/>
						<span>
							<p>Emergency and Complications</p>
						</span>
					</Link>
					<Link
						to='/content/announcements-and-updates'
						className='grid-item'>
						<img
							src={Logo}
							alt='Announcements and Updates'
						/>
						<span>
							<p>Announcements and Updates</p>
						</span>
					</Link>
					<Link
						to='/content/healthy-lifestyle-tips'
						className='grid-item'>
						<img
							src={Logo}
							alt='Healthy Lifestyle Tips'
						/>
						<span>
							<p>Healthy Lifestyle Tips</p>
						</span>
					</Link>
					<Link
						to='/content/medical-appointments-and-tracking'
						className='grid-item'>
						<img
							src={Logo}
							alt='Medical Appointments and Tracking'
						/>
						<span>
							<p>Medical Appointments and Tracking</p>
						</span>
					</Link>
					<Link
						to='/content/support-groups-and-resources'
						className='grid-item'>
						<img
							src={Logo}
							alt='Support Groups and Resources'
						/>
						<span>
							<p>Support Groups and Resources</p>
						</span>
					</Link>
					<Link
						to='/content/medications-and-supplements'
						className='grid-item'>
						<img
							src={Logo}
							alt='Medications and Supplements'
						/>
						<span>
							<p>Medications and Supplements</p>
						</span>
					</Link>
				</section>
			</div>
		</div>
	);
};

export default EducationalContent;
