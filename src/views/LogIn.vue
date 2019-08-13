<template>
	<div class="log-in">
		<v-card height="300" class="pa-4 ma-4">
			<v-layout column fill-height justify-center>
				<v-flex xs2 class="headline grey--text text--darken-2 ma-4">Admin Log In</v-flex>
				<v-flex xs1>
					<v-layout justify-space-around>
						<v-flex xs5>
							<v-text-field color="grey darken-2" outlined label="Username"></v-text-field>
						</v-flex>
						<v-flex xs5>
							<v-text-field type="password" color="grey darken-2" outlined label="Password"></v-text-field>
						</v-flex>
					</v-layout>
				</v-flex>
				<v-flex xs1>
					<v-layout justify-end>
						<v-flex xs4>
							<v-btn rounded small color="orange lighten-1" class="white--text">Log In</v-btn>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-card>
	</div>
</template>

<script>
export default {
	name: "LogIn"
};
</script>
