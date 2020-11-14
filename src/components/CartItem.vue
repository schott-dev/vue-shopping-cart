<template>
	<div class="col-sm-12 d-flex mb-5 cart-item">
		<div class="row">
			<div class="col-sm-2 d-flex align-items-center justify-content-center">
				<img :src="image"/>
			</div>
			<div class="col-sm-10">
				<h1>{{manufacturer}} {{name}}</h1>
				<span>Qty: {{quantity}}</span>
				<p>{{description}}</p>
				<span>{{'$' + price}}</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.cart-item img {
		max-width: 150px;
		height: auto;
	}
</style>

<script>
	export default {
		name: 'cartItem',
		props: ['itemid', 'manufacturer', 'name', 'description', 'image', 'price', 'quantity' ]
	};
</script>