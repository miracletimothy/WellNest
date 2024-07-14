import React, { useState } from 'react';
import Header from '../Header/Header';
import './RecordForms.css';

const RecordPreviousPregnancies: React.FC = () => {
	// Step 1: Initialize state for each form field
	const [formData, setFormData] = useState({
		diabetes: '',
		cardiacDisease: '',
		kidneyDisease: '',
		hypertension: '',
		epilepsy: '',
		asthma: '',
		sti: '',
		sickleCellDisease: '',
		mentalIllness: '',
		tuberculosis: '',
		smoking: '',
		alcohol: '',
		otherComplications: '',
		healthOfHusband: '',
		operationsType: '',
		operationsDate: '',
		bloodTransfusionsReason: '',
		bloodTransfusionsDate: '',
		fractures: '',
		fracturesDate: '',
		pregnancies: '',
		deliveries: '',
		livingChildren: '',
		miscarriages: '',
		stillBirths: '',
		prematureBirths: '',
		caesarianSections: '',
		vacuumExtraction: '',
		retainedPlacenta: '',
		pph: '',
		operationsOnUterus: '',
		cervicalShrodkar: '',
		lastPregnancyInterval: '',
		previousDeliveryAssistant: '',
		otherComplicationsDetails: '',
	});

	// Step 2: Create change handlers
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type } = e.target;
		setFormData(prevData => ({
			...prevData,
			[name]: type === 'radio' ? (value === 'yes' ? true : false) : value,
		}));
	};

	// Step 3: Handle form submission
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
		// Process the form data here
	};

	// Step 4: Apply CSS classes to style the form
	return (
		<div>
			<Header
				pageTitle='Records'
				className='header'
			/>
			<div className='records-form'>
				<h3>RECORD PREVIOUS PREGNANCIES</h3>
				<form onSubmit={handleSubmit}>
					<section>
						<h4>A. Past Medical and Social history</h4>
						<div
							className='form-section'
							id='form-section-rows'>
							<div>
								<div className='radio-buttons-group'>
									<h4>Diabetes</h4>
									<div className='radio-buttons'>
										<label>
											<input
												type='radio'
												name='diabetes'
												value='yes'
												onChange={handleChange}
											/>
											Yes
										</label>
										<label>
											<input
												type='radio'
												name='diabetes'
												value='no'
												onChange={handleChange}
											/>
											No
										</label>
									</div>
								</div>
								<div className='radio-buttons-group'>
									<h4>Cardiac disease</h4>
									<div className='radio-buttons'>
										<label>
											<input
												type='radio'
												name='cardiacDisease'
												value='yes'
												onChange={handleChange}
											/>
											Yes
										</label>
										<label>
											<input
												type='radio'
												name='cardiacDisease'
												value='no'
												onChange={handleChange}
											/>
											No
										</label>
									</div>
								</div>
								<div className='radio-buttons-group'>
									<h4>Kidney disease</h4>
									<div className='radio-buttons'>
										<label>
											<input
												type='radio'
												name='kidneyDisease'
												value='yes'
												onChange={handleChange}
											/>
											Yes
										</label>
										<label>
											<input
												type='radio'
												name='kidneyDisease'
												value='no'
												onChange={handleChange}
											/>
											No
										</label>
									</div>
								</div>
								<div className='radio-buttons-group'>
									<h4>Hypertension</h4>
									<div className='radio-buttons'>
										<label>
											<input
												type='radio'
												name='hypertension'
												value='yes'
												onChange={handleChange}
											/>
											Yes
										</label>
										<label>
											<input
												type='radio'
												name='hypertension'
												value='no'
												onChange={handleChange}
											/>
											No
										</label>
									</div>
								</div>
								<div className='radio-buttons-group'>
									<h4>Epilepsy</h4>
									<div className='radio-buttons'>
										<label>
											<input
												type='radio'
												name='epilepsy'
												value='yes'
												onChange={handleChange}
											/>
											Yes
										</label>
										<label>
											<input
												type='radio'
												name='epilepsy'
												value='no'
												onChange={handleChange}
											/>
											No
										</label>
									</div>
								</div>
								<div className='radio-buttons-group'>
									<h4>Asthma</h4>
									<div className='radio-buttons'>
										<label>
											<input
												type='radio'
												name='asthma'
												value='yes'
												onChange={handleChange}
											/>
											Yes
										</label>
										<label>
											<input
												type='radio'
												name='asthma'
												value='no'
												onChange={handleChange}
											/>
											No
										</label>
									</div>
								</div>
								<div className='radio-buttons-group'>
									<h4>STI</h4>
									<div className='radio-buttons'>
										<label>
											<input
												type='radio'
												name='sti'
												value='yes'
												onChange={handleChange}
											/>
											Yes
										</label>
										<label>
											<input
												type='radio'
												name='sti'
												value='no'
												onChange={handleChange}
											/>
											No
										</label>
									</div>
								</div>
							</div>
							<div>
								<div className='radio-buttons-group'>
									<h4>Sickle cell disease</h4>
									<div className='radio-buttons'>
										<label>
											<input
												type='radio'
												name='sickleCellDisease'
												value='yes'
												onChange={handleChange}
											/>
											Yes
										</label>
										<label>
											<input
												type='radio'
												name='sickleCellDisease'
												value='no'
												onChange={handleChange}
											/>
											No
										</label>
									</div>
								</div>
								<div className='radio-buttons-group'>
									<h4>Mental illness</h4>
									<div className='radio-buttons'>
										<label>
											<input
												type='radio'
												name='mentalIllness'
												value='yes'
												onChange={handleChange}
											/>
											Yes
										</label>
										<label>
											<input
												type='radio'
												name='mentalIllness'
												value='no'
												onChange={handleChange}
											/>
											No
										</label>
									</div>
								</div>
								<div className='radio-buttons-group'>
									<h4>Tuberculosis</h4>
									<div className='radio-buttons'>
										<label>
											<input
												type='radio'
												name='tuberculosis'
												value='yes'
												onChange={handleChange}
											/>
											Yes
										</label>
										<label>
											<input
												type='radio'
												name='tuberculosis'
												value='no'
												onChange={handleChange}
											/>
											No
										</label>
									</div>
								</div>
								<div className='radio-buttons-group'>
									<h4>Smoking</h4>
									<div className='radio-buttons'>
										<label>
											<input
												type='radio'
												name='smoking'
												value='yes'
												onChange={handleChange}
											/>
											Yes
										</label>
										<label>
											<input
												type='radio'
												name='smoking'
												value='no'
												onChange={handleChange}
											/>
											No
										</label>
									</div>
								</div>
								<div className='radio-buttons-group'>
									<h4>Alcohol</h4>
									<div className='radio-buttons'>
										<label>
											<input
												type='radio'
												name='alcohol'
												value='yes'
												onChange={handleChange}
											/>
											Yes
										</label>
										<label>
											<input
												type='radio'
												name='alcohol'
												value='no'
												onChange={handleChange}
											/>
											No
										</label>
									</div>
								</div>
							</div>
							<div>
								<label>Other complications</label>
								<input
									type='text'
									name='otherComplications'
									value={formData.otherComplications}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label>Health of husband</label>
								<input
									type='text'
									name='healthOfHusband'
									value={formData.healthOfHusband}
									onChange={handleChange}
								/>
							</div>
						</div>
					</section>
					<section>
						<h4>
							B. Past Surgical history (Indicate type and date of surgery)
						</h4>
						<div className='form-section'>
							<div className='form-row'>
								<div>
									<label>Operations (type) </label>
									<input
										type='text'
										name='operationsType'
										value={formData.operationsType}
										onChange={handleChange}
									/>
									<input
										type='date'
										name='operationsDate'
										value={formData.operationsDate}
										onChange={handleChange}
									/>
								</div>
								<div>
									<label>Blood transfusions (why?)</label>
									<input
										type='text'
										name='bloodTransfusionsReason'
										value={formData.bloodTransfusionsReason}
										onChange={handleChange}
									/>
									<input
										type='date'
										name='bloodTransfusionsDate'
										value={formData.bloodTransfusionsDate}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className='form-row'>
								<div>
									<label>Fracture of pelvis, spine, and femur</label>
									<input
										type='text'
										name='fractures'
										value={formData.fractures}
										onChange={handleChange}
									/>
									<input
										type='date'
										name='fracturesDate'
										value={formData.fracturesDate}
										onChange={handleChange}
									/>
								</div>
							</div>
						</div>
					</section>
					<section>
						<h4>C. Other complications</h4>
						<div className='form-section'>
							<label>Other complications</label>
							<input
								type='text'
								name='otherComplicationsDetails'
								value={formData.otherComplicationsDetails}
								onChange={handleChange}
							/>
						</div>
					</section>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default RecordPreviousPregnancies;
