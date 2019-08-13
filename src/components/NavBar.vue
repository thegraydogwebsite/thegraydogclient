<template>
	<div class="nav-bar">
		<v-app-bar dense fixed elevate-on-scroll>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-spacer></v-spacer>
			<v-layout column align-end>
				<v-flex>
					<a href="tel:+1-435-627-1620" class="link">
						<div class="body-2 grey--text text--darken-2">
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
						<div class="body-2 grey--text text--darken-2">
							<v-icon small>mdi-map-marker</v-icon>969 N 3050 E UNIT A2 St. George, UT
						</div>
					</a>
				</v-flex>
			</v-layout>
		</v-app-bar>
		<v-app-bar dense></v-app-bar>
		<v-navigation-drawer v-model="drawer" app temparary>
			<v-list shaped absolute>
				<v-subheader>Menu</v-subheader>
				<v-list-item to="/" color="orange lighten-1">
					<v-list-item-icon>
						<v-icon>mdi-home</v-icon>
					</v-list-item-icon>
					<v-list-item-content>Home</v-list-item-content>
				</v-list-item>
				<v-list-item to="/services" color="orange lighten-1">
					<v-list-item-icon>
						<v-icon>mdi-dog</v-icon>
					</v-list-item-icon>
					<v-list-item-content>Services</v-list-item-content>
				</v-list-item>
				<v-list-item to="/gallery" color="orange lighten-1">
					<v-list-item-icon>
						<v-icon>mdi-image-multiple</v-icon>
					</v-list-item-icon>
					<v-list-item-content>Gallery</v-list-item-content>
				</v-list-item>
				<v-list-item to="/staff" color="orange lighten-1">
					<v-list-item-icon>
						<v-icon>mdi-paw</v-icon>
					</v-list-item-icon>
					<v-list-item-content>Staff</v-list-item-content>
				</v-list-item>
				<v-list-item to="/about" color="orange lighten-1">
					<v-list-item-icon>
						<v-icon>mdi-information</v-icon>
					</v-list-item-icon>
					<v-list-item-content>About Us</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-card color="grey darken-2" height="125" flat tile>
			<router-link to="/">
				<v-img height="125" contain src="../assets/main_logo.png"></v-img>
			</router-link>
		</v-card>
	</div>
</template>

<script>
export default {
	name: "NavBar",
	data: () => {
		return {
			drawer: false
		};
	},
	computed: {
		width() {
			return this.$vuetify.breakpoint.name;
		}
	}
};
</script>

<style scoped>
.link {
	text-decoration: none;
}
</style>
