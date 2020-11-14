<template>
	<div class="col-sm-12 py-2 border-bottom cart-item">
		<div class="row">
			<div class="col-md-2 d-flex align-items-center justify-content-center cart-item-img">
				<img :src="image"/>
			</div>
			<div class="col-md-10">
				<div class="mb-2">
					<span class="h4">{{manufacturer}} {{name}}</span>
				</div>
				<span>Qty: {{quantity}}</span>
				<p>{{description}}</p>
				<strong class="h5">{{'$' + price}}</strong>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.cart-item-img img {
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