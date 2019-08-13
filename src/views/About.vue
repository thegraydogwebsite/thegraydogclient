<template>
	<div class="about">
		<v-card height="100" flat tile>
			<v-layout fill-height column justify-center align-center>
				<v-flex xs1>
					<v-divider></v-divider>
					<div class="headline grey--text text--darken-2">About Us</div>
					<v-divider></v-divider>
				</v-flex>
			</v-layout>
		</v-card>
		<v-card flat tile class="grey--text text--darken-2">
			<v-layout column class="pa-3 text-center">
				<v-flex class="title mb-2">Call or stop by to make an appointment.</v-flex>
				<v-flex>
					<a href="tel:+1-435-627-1620" class="link">
						<div class="grey--text text--darken-2">
							<v-icon small>mdi-phone</v-icon>(453) 627-1620
						</div>
					</a>
				</v-flex>
				<v-flex>
					<a
						href="https://www.google.com/maps/place/The+Gray+Dog/@37.1249741,-113.5256414,17z/data=!3m1!4b1!4m5!3m4!1s0x80ca5ba724d08c0f:0x4c89cbe32d1f40e8!8m2!3d37.1249741!4d-113.5234527"
						class="link"
						target="_blank"
					>
						<div class="grey--text text--darken-2">
							<v-icon small>mdi-map-marker</v-icon>969 N 3050 E UNIT A2 St. George, UT
						</div>
					</a>
				</v-flex>
				<v-flex>TUE-SAT 8AM-5PM</v-flex>
				<v-flex>
					<v-btn icon small href="https://www.facebook.com/thegraydogstg/" target="_blank">
						<i class="fa fa-facebook-f" style="font-size: 20px"></i>
					</v-btn>
					<v-btn icon small href="https://www.instagram.com/thegraydoggrooming/" target="_blank">
						<i class="fa fa-instagram" style="font-size: 20px"></i>
					</v-btn>
				</v-flex>
			</v-layout>
		</v-card>
		<v-card flat tile class="grey--text text--darken-2">
			<v-layout column justify-center align-left fill-height>
				<v-flex
					class="pa-3"
				>Established in 2007, Red Rock Pet Resort is located in Saint George and was voted Southern Utah's Best Pet Resort by St. George Magazine and most recently by Best of Southern Utah 2019. Our mission is to provide a clean, safe, fun and stimulating social environment for your pet, year round. We'll give your pet the attention and love they deserve, and treat them as if they were our own.</v-flex>
				<v-flex
					class="pa-3"
				>We offer three basic services: Doggie Daycare, Dog/Cat Boarding and Dog/Cat Grooming. What makes us unique is that our dogs are never kenneled, except to eat and sleep if they’re boarding. Dogs are closely supervised by our experienced handlers every minute while they’re at play.</v-flex>
				<v-flex class="pa-3">
					<router-link to="/services" class="orange--text text--lighten-1">Grooming:</router-link>&nbsp;Nails, Baths, mini grooms and full grooms are available from our experienced staff.
				</v-flex>
				<v-flex class="pa-3">
					<router-link to="/services" class="orange--text text--lighten-1">Baths:</router-link>&nbsp;Nails, Baths, mini grooms and full grooms are available from our experienced staff.
				</v-flex>
				<v-flex class="pa-3">
					<router-link to="/services" class="orange--text text--lighten-1">Self Wash:</router-link>&nbsp;Nails, Baths, mini grooms and full grooms are available from our experienced staff.
				</v-flex>
			</v-layout>
		</v-card>
		<div class="mapouter" :style="{width: window.width}">
			<div class="gmap_canvas" :style="{width: window.width}">
				<iframe
					:width="window.width"
					height="400"
					id="gmap_canvas"
					src="https://maps.google.com/maps?q=the%20gray%20dog&t=&z=13&ie=UTF8&iwloc=&output=embed"
					frameborder="0"
					scrolling="no"
					marginheight="0"
					marginwidth="0"
				></iframe>
				<a
					href="https://www.embedgooglemap.net/blog/best-wordpress-themes/"
				>embedgooglemap.net design wordpress</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "About",
	data() {
		return {
			window: {
				width: 0,
				height: 0
			}
		};
	},
	created() {
		window.addEventListener("resize", this.handleResize);
		this.handleResize();
	},
	destroyed() {
		window.removeEventListener("resize", this.handleResize);
	},
	methods: {
		handleResize() {
			this.window.width = window.innerWidth;
			this.window.height = window.innerHeight;
		}
	}
};
</script>

<style scoped>
.mapouter {
	position: relative;
	text-align: right;
	height: 400px;
}
.gmap_canvas {
	overflow: hidden;
	background: none !important;
	height: 400px;
}
.link {
	text-decoration: none;
}
</style>

