import React from 'react';
import MotherChildIdentificationForm from '../components/RecordsForms/MotherChildIdentification';
import RecordPreviousPregnancies from '../components/RecordsForms/RecordPreviousPregnancies';

const Records: React.FC = () => {
	return (
		<div>
			{/* <MotherChildIdentificationForm /> */}
			<RecordPreviousPregnancies />
		</div>
	);
};

export default Records;
