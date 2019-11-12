<template>
	<div class="staff">
		<v-card height="100" flat tile>
			<v-layout fill-height column justify-center align-center>
				<v-flex xs1>
					<v-divider></v-divider>
					<div class="headline grey--text text--darken-2">Meet The Staff</div>
					<v-divider></v-divider>
				</v-flex>
			</v-layout>
		</v-card>
		<v-layout column class="white">
			<v-card v-for="(employee, index) in staff" :key="index" class="pa-3 ma-4">
				<v-layout align-center>
					<v-flex xs6>
						<v-img :height="imageHeight" :src="employee.src" position="top center"></v-img>
					</v-flex>
					<v-flex xs6>
						<div class="text-center grey--text text--darken-2 body-1 font-weight-bold">{{employee.name}}</div>
						<div class="text-center grey--text text--darken-2 body-1 font-italic">{{employee.title}}</div>
						<v-layout justify-center column align-center>
							<v-flex>
								<v-btn icon small @click="shows[index].show = !shows[index].show">
									<v-icon>mdi-{{shows[index].show ? "chevron-up" : "chevron-down"}}</v-icon>
								</v-btn>
							</v-flex>
						</v-layout>
					</v-flex>
				</v-layout>
				<v-expand-transition>
					<div class="pt-3" v-show="shows[index].show">{{employee.text}}</div>
				</v-expand-transition>
			</v-card>
		</v-layout>
	</div>
</template>

<script>
export default {
	name: "Staff",
	data() {
		return {
			staff: [],
			shows: [],
			// url: "http://localhost:3000",
			url: "https://thegraydogserver.herokuapp.com"
		};
	},
	methods: {
		loadStaff: function() {
			fetch(`${this.url}/staff`).then(response => {
				response.json().then(data => {
					this.staff = data.staff;
					this.setShows(this.staff.length);
				});
			});
		},
		setShows: function(size) {
			for (var i = 0; i < size; i++) {
				this.shows.push({ show: false });
			}
		}
	},
	computed: {
		imageHeight() {
			switch (this.$vuetify.breakpoint.name) {
				case "xs":
					return "220px";
				case "sm":
					return "300px";
				case "md":
					return "300px";
				case "lg":
					return "400px";
				case "xl":
					return "500px";
			}
		}
	},
	created() {
		this.loadStaff();
	}
};
</script>
