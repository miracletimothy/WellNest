import User from '../../models/UserModel';

export const getProfile = async (req: any, res: any) => {
	try {
		if (req.user?.role !== 'health_worker') {
			return res.status(403).json({ msg: 'Unauthorized' });
		}
		const healthWorkerProfile = await User.findOne({ _id: req.user?.id });

		if (!healthWorkerProfile) {
			return res.status(404).json({ msg: 'Profile not found' });
		}

		res.json(healthWorkerProfile);
	} catch (err) {
		console.error((err as Error).message);
		res.status(500).send('Server Error');
	}
};
