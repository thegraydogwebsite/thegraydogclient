<template>
	<v-app>
		<v-content>
			<NavBar></NavBar>
		<!-- {{width}} -->
			<v-layout column align-center class="white">
				<v-flex>
					<v-card :width="appWidth" flat>
						<router-view></router-view>
					</v-card>
				</v-flex>
			</v-layout>
			<Footer></Footer>
		</v-content>
	</v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
	name: "App",
	components: {
		NavBar,
		Footer,
	},
	data: () => {
		return {};
	},
	computed: {
		appWidth() {
			switch (this.$vuetify.breakpoint.name) {
				case "xs":
					return "";
				case "sm":
					return "600px";
				case "md":
					return "800px";
				case "lg":
					return "800px";
				case "xl":
					return "1000px";
			}
		}
	}
};
</script>
