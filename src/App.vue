<template>
	<div id="app">
		<div class="container">
			<div class="row">
				<CartItem
					v-for="item in cart"
					:key="item.itemid"
					:id="item.itemid"
					:manufacturer="item.manufacturer"
					:name="item.productName"
					:description="item.description"
					:image="item.image"
					:price="item.price"
					:quantity="item.quantity"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import CartItem from "./components/CartItem.vue";

	export default {
		name: 'App',
		computed: {
			cart() {
				return this.$store.getters.items;
			}
		},
		components: {
			CartItem
		}
	}
</script>
