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
						<v-img height="150" :src="employee.src"></v-img>
					</v-flex>
					<v-flex xs6>
						<div class="text-center grey--text text--darken-2 body-1 font-weight-bold">{{employee.name}}</div>
						<div class="text-center grey--text text--darken-2 body-1 font-italic">{{employee.title}}</div>
						<v-layout justify-center>
							<v-flex xs3>
								<v-btn icon small @click="employee.show = !employee.show">
									<v-icon>mdi-{{employee.show ? "chevron-up" : "chevron-down"}}</v-icon>
								</v-btn>
							</v-flex>
						</v-layout>
					</v-flex>
				</v-layout>
				<v-expand-transition>
					<div class="pt-3" v-show="employee.show">{{employee.text}}</div>
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
			staff: [
				{
					src: "https://i.imgur.com/Dg4WWAj.jpg",
					name: "Brittany Hardesty",
					title: "Head Groomer",
					text:
						"My wildest dreams are coming true! I went into the first Lovin’ Arms location back in 2012 when it was a tiny 1,700 square foot shop that sold FISH! I quickly became Carol’s very first employee. At the time I had no idea that the store would become my forever home. In 2016 Carol moved our store into the 5,000 square foot building that now stands in downtown St. George. Customers would ask, ‘Are you the owner?’ to which I’d always reply, ‘No, but hopefully one day!’ Well… ‘one day’ is finally here. I am officially the owner of the largest independent pet store in Utah and I couldn’t feel more grateful!",
					show: false
				},
				{
					src: "https://i.imgur.com/DJv5Tk9.jpg",
					name: "Brittany Hardesty",
					title: "Head Groomer",
					text:
						"My wildest dreams are coming true! I went into the first Lovin’ Arms location back in 2012 when it was a tiny 1,700 square foot shop that sold FISH! I quickly became Carol’s very first employee. At the time I had no idea that the store would become my forever home. In 2016 Carol moved our store into the 5,000 square foot building that now stands in downtown St. George. Customers would ask, ‘Are you the owner?’ to which I’d always reply, ‘No, but hopefully one day!’ Well… ‘one day’ is finally here. I am officially the owner of the largest independent pet store in Utah and I couldn’t feel more grateful!",
					show: false
				},
				{
					src: "https://i.imgur.com/zmYsS1L.jpg",
					name: "Brittany Hardesty",
					title: "Head Groomer",
					text:
						"My wildest dreams are coming true! I went into the first Lovin’ Arms location back in 2012 when it was a tiny 1,700 square foot shop that sold FISH! I quickly became Carol’s very first employee. At the time I had no idea that the store would become my forever home. In 2016 Carol moved our store into the 5,000 square foot building that now stands in downtown St. George. Customers would ask, ‘Are you the owner?’ to which I’d always reply, ‘No, but hopefully one day!’ Well… ‘one day’ is finally here. I am officially the owner of the largest independent pet store in Utah and I couldn’t feel more grateful!",
					show: false
				}
			]
		};
	}
};
</script>
