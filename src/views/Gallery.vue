<template>
		<div class="gallery">
			<v-card height="100" flat tile>
				<v-layout fill-height column justify-center align-center>
					<v-flex xs1>
						<v-divider></v-divider>
						<div class="headline grey--text text--darken-2">Gallery</div>
						<v-divider></v-divider>
					</v-flex>
				</v-layout>
			</v-card>
				<div>
				<v-card flat tile>
					<v-container grid-list-lg fluid>
						<v-layout wrap>
							<v-flex xs6 d-flex child-flex v-for="(picture, index) in gallery" :key="index">
								<v-img :src="picture.src" :height="imageHeight">
									<template v-slot:placeholder>
										<v-layout fill-height align-center justify-center ma-0>
											<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
										</v-layout>
									</template>
								</v-img>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card>
			</div>
		</div>
</template>

<script>
export default {
	name: "Gallery",
	data() {
		return {
			// url: "http://localhost:3000",
			url: "https://thegraydogserver.herokuapp.com",
			gallery: []
		};
	},
	methods: {
		loadGallery: function() {
			fetch(`${this.url}/gallery`).then((response) => {
				response.json().then((data) => {
					this.gallery = data.gallery;
				});
			});
		}
	},
	created() {
		this.loadGallery();
	},
    computed: {
      imageHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '220px'
          case 'sm': return '300px'
          case 'md': return '300px'
          case 'lg': return '400px'
          case 'xl': return '500px'
        }
      },
    },
};
</script>
