export function setUserData(data) {
	return {
		type: "SET_DATA",
		data: {
			country: data.country,
			lan: data.lan,
			ageGp: data.ageGp
		}
	}
}