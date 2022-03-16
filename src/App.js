import { useState } from 'react';
import './App.css';
const { countries } = require('countries-list');

function App() {
	const [tel, setTel] = useState('');
	const [country, setCountry] = useState('98');

	const goToWhatsapp = () => {
		let cleanedTel = tel.replace(/\D/g, '');
		// remove leading zero
		cleanedTel = cleanedTel.replace(/^0+/, '');
		// remove leading +
		cleanedTel = cleanedTel.replace(/^\+/, '');
		const url = 'https://wa.me/+' + country + cleanedTel;
		window.open(url, '_blank');
	};
	const onEnter = (e) => {
		if (e.key === 'Enter') {
			goToWhatsapp();
		}
	};

	console.log(Object.values(countries));
	return (
		<div className="w-full h-screen bg-slate-900">
			<header className="flex flex-col items-center justify-center text-center App-header">
				<div className="flex flex-col w-f">
					<label className="mb-2 text-teal-700 ">Please enter phone number:</label>
					{/* drop down with options lookup.countries */}
					<span className="">
						<select
							className="w-1/5 h-full py-3 mx-1 my-2 text-xs bg-teal-900 rounded-lg "
							name="countries"
							id="countries"
							value={country}
							onChange={(e) => setCountry()}
							autoComplete
						>
							{Object.values(countries).map((country) => (
								<option value={country.phone} key={country.name} className="px-6 text-xs">
									{country.emoji}
									{country.name} (+{country.phone})
								</option>
							))}
						</select>
						<input
							type="text"
							className="px-1 py-3 text-blue-900 rounded-lg shadow-lg "
							value={tel}
							onChange={(e) => setTel(e.target.value)}
							onKeyPress={onEnter}
						/>
					</span>
				</div>

				<p></p>
				<button
					className="p-3 m-3 text-3xl font-bold text-white underline bg-teal-700 rounded-lg shadow-2xl"
					onClick={() => goToWhatsapp()}
				>
					Go to whatsapp!
				</button>
				<a
					href="https://visitorbadge.io/status?path=https%3A%2F%2Fghodsizadeh.github.io%2Fwame%2F"
					className="absolute bottom-0 "
				>
					<img
						src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fghodsizadeh.github.io%2Fwame%2F&countColor=%23263759"
						alt="hits"
					/>
				</a>
			</header>
		</div>
	);
}

export default App;
