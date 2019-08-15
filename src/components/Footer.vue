<template>
	<div class="footer">
		<v-card flat tile height="150" class="grey--text text--darken-2">
			<v-layout column fill-height justify-center align-center>
				<v-flex xs1>TUE-SAT 8AM-5PM</v-flex>
				<v-flex xs1>
					<a
						href="https://www.google.com/maps/place/The+Gray+Dog/@37.1249741,-113.5256414,17z/data=!3m1!4b1!4m5!3m4!1s0x80ca5ba724d08c0f:0x4c89cbe32d1f40e8!8m2!3d37.1249741!4d-113.5234527"
						target="_blank"
						class="link"
					>
						<div class="grey--text text--darken-2">
							<v-icon>mdi-map-marker</v-icon>969 N 3050 E UNIT A2 St. George, UT
						</div>
					</a>
				</v-flex>
				<v-flex xs1>
					<v-btn icon small href="https://www.facebook.com/thegraydogstg/" target="_blank">
						<i class="fa fa-facebook-f" style="font-size: 24px"></i>
					</v-btn>
					<v-btn icon small href="https://www.instagram.com/thegraydoggrooming/" target="_blank">
						<i class="fa fa-instagram" style="font-size: 24px"></i>
					</v-btn>
				</v-flex>
			</v-layout>
		</v-card>
		<v-card flat tile height="100" color="grey lighten-4" class="grey--text text--darken-2">
			<v-layout column fill-height justify-center align-center>
				<v-flex xs3>
					<router-link class="link" to="/services">Services</router-link>&nbsp;|
					<router-link class="link" to="/gallery">Gallery</router-link>&nbsp;|
					<router-link class="link" to="/staff">Staff</router-link>&nbsp;|
					<router-link class="link" to="/about">About Us</router-link>
				</v-flex>
				<v-flex xs3>
					<div>&copy; {{ new Date().getFullYear() }}</div>
				</v-flex>
			</v-layout>
		</v-card>
	</div>
</template>

<script>
export default {
	name: "Footer",
	data() {
		return {};
	}
};
</script>

<style scoped>
.link {
	color: rgb(82, 82, 82);
	text-decoration: none;
}
</style>

