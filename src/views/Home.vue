<template>
	<div class="home">
		<v-carousel interval="3000" hide-delimiters :show-arrows="show_arrows" height="400">
			<v-carousel-item
				v-for="(picture, index) in slideshow"
				:key="index"
				:src="picture.src"
				reverse-transition="fade-transition"
				transition="fade-transition"
			>
				<v-layout align-center justify-end fill-height column>
					<v-flex xs3>
						<v-btn to="/about" block large rounded color="orange lighten-1">Contact us!</v-btn>
					</v-flex>
				</v-layout>
			</v-carousel-item>
		</v-carousel>
		<v-card flat tile height="350">
			<v-layout column justify-center align-center fill-height>
				<v-flex xs1>
					<div
						class="text-center text-uppercase grey--text text--darken-2 display-1 font-weight-bold"
					>The Gray Dog</div>
				</v-flex>
				<v-flex xs1>
					<div
						class="text-center text-uppercase grey--text text--darken-2 body-1 font-weight-bold"
					>Grooming - Self Wash - Boutique</div>
				</v-flex>
				<!-- <v-flex xs1></v-flex> -->
				<v-flex xs4 pl-4 ml-4 pr-4 mr-4>
					<div
						class="text-center grey--text text--darken-2"
					>Here at The Gray Dog we offer many grooming services, a self wash, and boutique! Bring in your pooch for a spa day and we will give them the care he or she needs. We treat your pets like the valued family members they are.</div>
				</v-flex>
				<v-flex xs1 mt-2>
					<v-layout align-center justify-center>
						<v-btn
							rounded
							color="orange lighten-1"
							class="white--text"
							to="/services"
						>Check out our services</v-btn>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-card>
  <v-card flat tile :height="cardHeight" color="grey lighten-4">
			<v-layout column justify-center align-center fill-height class="white">
				<v-flex xs1>
					<div
						class="text-center text-uppercase grey--text text--darken-2 display-1 font-weight-bold"
					>Meet the staff</div>
				</v-flex>
				<v-flex xs1>
					<div class="text-center text-uppercase grey--text text--darken-2 body-1 font-weight-bold">
						<router-link class="orange--text text--lighten-1" to="/staff">Learn More</router-link>&nbsp;About Our Friendly Staff
					</div>
				</v-flex>
				<v-flex xs1></v-flex>
				<v-flex xs4 pr-4 pl-4>
					<v-card>
						<v-layout align-center>
							<v-flex xs6>
								<v-img :height="imageHeight" :src="head_groomer.src" position="top center"></v-img>
							</v-flex>
							<v-flex xs6>
								<div
									class="text-center grey--text text--darken-2 body-1 font-weight-bold"
								>{{head_groomer.name}}</div>
								<div class="text-center grey--text text--darken-2 body-1 font-italic">{{head_groomer.title}}</div>
								<router-link
									to="/staff"
									class="orange--text text--lighten-1"
									style="display: block; text-align: center"
								>Read More</router-link>
							</v-flex>
						</v-layout>
					</v-card>
				</v-flex>
			</v-layout>
		</v-card>
	</div>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
			show_arrows: false,
			// url: "http://localhost:3000",
			url: "https://thegraydogserver.herokuapp.com",
			slideshow: [],
			head_groomer: {}
		};
	},
	methods: {
		loadSlideshow: function() {
			fetch(`${this.url}/slideshow`).then(response => {
				response.json().then(data => {
					this.slideshow = data.slideshow;
				});
			});
		},
		loadHeadGroomer: function() {
			fetch(`${this.url}/headgroomer`).then(response => {
				response.json().then(data => {
					this.head_groomer = data.headgroomer;
				});
			});
		}
	},
	computed: {
		imageHeight() {
			switch (this.$vuetify.breakpoint.name) {
				case "xs":
					return "200px";
				case "sm":
					return "300px";
				case "md":
					return "300px";
				case "lg":
					return "350px";
				case "xl":
					return "400px";
			}
		},
		cardHeight() {
			switch (this.$vuetify.breakpoint.name) {
				case "xs":
					return "350px";
				case "sm":
					return "450px";
				case "md":
					return "550px";
				case "lg":
					return "550px";
				case "xl":
					return "750px";
			}
		},
	},
	created() {
		this.loadSlideshow();
		this.loadHeadGroomer();
	}
};
</script>