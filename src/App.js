import { useState } from 'react';
import './App.css';

function App() {
	const [tel, setTel] = useState('');
	const goToWhatsapp = () => {
		const url = 'https://wa.me/' + tel;
		window.open(url, '_blank');
	};
	return (
		<div className=" w-full bg-slate-900 h-screen ">
			<header className="text-center  justify-center items-center flex flex-col App-header">
				<div className="flex flex-col w-f">
					<label className=" text-teal-700 mb-2">Please enter phone number:</label>
					<input
						type="text"
						className=" text-blue-900 rounded-lg p-3  shadow-lg"
						value={tel}
						onChange={(e) => setTel(e.target.value)}
					/>
				</div>
				<button
					className="text-3xl text-white font-bold underline bg-teal-700 p-3 m-3 rounded-lg shadow-2xl"
					onClick={() => goToWhatsapp()}
				>
					Go to whatsapp!
				</button>
			</header>
		</div>
	);
}

export default App;
