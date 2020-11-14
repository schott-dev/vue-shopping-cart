<template>
	<div id="main">
		<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			<div class="navbar-brand">
				<img src="./assets/logo.png" height="35">
				<span class="ml-2">Vue Shopping Cart</span>
			</div>
		</nav>
		<div class="container">
			<div class="row">
				<Cart
					v-for="item in cart"
					:key="item.itemid"
					:id="item.itemid"
					:manufacturer="item.manufacturer"
					:name="item.productName"
					:description="item.description"
					:url="item.url"
					:image="item.image"
					:price="item.price"
					:quantity="item.quantity"
					:available="item.available"
				/>
			</div>
			<div v-if="cart.length" class="text-right mt-2 mb-4">
				<span class="h4">Subtotal: <strong>{{'$' + total}}</strong></span>
			</div>
			<div v-if="!cart.length" id="empty-cart" class="text-center mt-2">
				<div class="mb-4"><i class="text-primary fas fa-sad-tear"></i></div>
				<h2>Your cart is empty.</h2>
				<small>We have tons of great products, certainly you can find something awesome?</small>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.container {
		margin-top: 75px;
	}

	#empty-cart .fa-sad-tear {
		font-size: 100px;
	}
</style>

<script>
	import Cart from "./components/Cart.vue";

	export default {
		name: 'App',
		computed: {
			cart() {
				return this.$store.getters.items;
			},
			total() {
				let total = 0;

				this.cart.forEach(function(item) {
					total += (parseFloat(item.price) * item.quantity);
				});

				return total.toFixed(2);
			}
		},
		components: {
			Cart
		}
	}
</script>
