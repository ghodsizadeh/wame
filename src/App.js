import { useState } from 'react';
import './App.css';
const { countries } = require('countries-list');

function App() {
	const [tel, setTel] = useState('');
	const [country, setCountry] = useState('98');

	const goToWhatsapp = () => {
		const url = 'https://wa.me/+' + country + tel;
		window.open(url, '_blank');
	};
	const onEnter = (e) => {
		if (e.key === 'Enter') {
			goToWhatsapp();
		}
	};

	console.log(Object.values(countries));
	return (
		<div className=" w-full bg-slate-900 h-screen ">
			<header className="text-center  justify-center items-center flex flex-col App-header">
				<div className="flex flex-col w-f">
					<label className=" text-teal-700 mb-2">Please enter phone number:</label>
					{/* drop down with options lookup.countries */}
					<span className="">
						<select
							className="bg-teal-900 my-2 rounded-lg h-full py-3  mx-1 w-1/5  text-xs "
							name="countries"
							id="countries"
							value={country}
							onChange={(e) => setCountry()}
						>
							{Object.values(countries).map((country) => (
								<option value={country.phone} key={country.phone} className="px-6 text-xs">
									{country.emoji} (+{country.phone})
								</option>
							))}
						</select>
						<input
							type="text"
							className=" text-blue-900 rounded-lg py-3  shadow-lg px-1 "
							value={tel}
							onChange={(e) => setTel(e.target.value)}
							onKeyPress={onEnter}
						/>
					</span>
				</div>

				<p></p>
				<button
					className="text-3xl text-white font-bold underline bg-teal-700 p-3 m-3 rounded-lg shadow-2xl"
					onClick={() => goToWhatsapp()}
				>
					Go to whatsapp!
				</button>
				<a
					href="https://visitorbadge.io/status?path=https%3A%2F%2Fghodsizadeh.github.io%2Fwame%2F"
					className=" absolute bottom-0"
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
