export const state = () => ({
	projects: []
});

export const mutations = {
	updateProjects: (state, payload) => {
		state.projects = payload;
	}
};

export const actions = {
	async getProjects({ state, commit }) {
		if (state.projects.length) return;

		try {
			let projects = await fetch(`URL_HERE`).then(res => res.json());
			console.log(projects);
			commit('updateProjects', projects);
		} catch (err) {
			console.log(err);
		}
	}
};
