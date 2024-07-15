import React from 'react';
import './RecordForms.css';

const MotherChildIdentificationForm: React.FC = () => {
	return (
		<div className='records-form'>
			<h3>MOTHER AND CHILD IDENTIFICATION</h3>
			<form>
				<section>
					<h4>A. Mother's profile</h4>
					<div className='form-section'>
						<div className='form-row'>
							<div>
								<label>First Name</label>
								<input type='text' />
							</div>
							<div>
								<label>Last Name</label>
								<input type='text' />
							</div>
						</div>
						<div>
							<label>Education</label>
							<input type='text' />
						</div>
						<div className='form-row'>
							<div>
								<label>Occupation</label>
								<input type='text' />
							</div>
							<div>
								<label>Contact/Phone No</label>
								<input type='text' />
							</div>
						</div>
						<div>
							<label>Relationship status</label>
							<input type='text' />
						</div>
					</div>
				</section>

				{/* Childs profile */}
				<section>
					<h4>B. Child's profile (after birth)</h4>
					<div className='form-section'>
						<div className='form-row'>
							<div>
								<label>First Name</label>
								<input type='text' />
							</div>
							<div>
								<label>Last Name</label>
								<input type='text' />
							</div>
						</div>
						<div>
							<label>Sex: (F/M)</label>
							<input type='text' />
						</div>
						<div className='form-row'>
							<div>
								<label>Birth date</label>
								<input type='text' />
							</div>
							<div>
								<label>Birth weight in Kg:</label>
								<input type='text' />
							</div>
							<div>
								<label>Birth order</label>
								<input type='text' />
							</div>
						</div>
					</div>
				</section>

				{/* Home address */}
				<section>
					<h4>C. Home Address (where the child lives)</h4>
					<div className='form-section'>
						<div className='form-row'>
							<div>
								<label>Village/LC1</label>
								<input type='text' />
							</div>
							<div>
								<label>Parish</label>
								<input type='text' />
							</div>
						</div>

						<div className='form-row'>
							<div>
								<label>Sub/county</label>
								<input type='text' />
							</div>
							<div>
								<label>District</label>
								<input type='text' />
							</div>
						</div>
					</div>
				</section>

				{/* Next of kin */}
				<section>
					<h4>D. Next of kin identification</h4>
					<div className='form-section'>
						<div className='form-row'>
							<div>
								<label>Relationship to next of kin</label>
								<input type='text' />
							</div>
							<div>
								<label>Address</label>
								<input type='text' />
							</div>
						</div>

						<div className='form-row'>
							<div>
								<label>Occupation</label>
								<input type='text' />
							</div>
							<div>
								<label>Phone/No</label>
								<input type='text' />
							</div>
						</div>
					</div>
				</section>
				<div>
					<button>Save</button>
				</div>
			</form>
		</div>
	);
};

export default MotherChildIdentificationForm;
