<template>
	<div class="col-sm-12 py-2 border-bottom cart-item">
		<div class="row">
			<div class="col-md-2 d-flex align-items-center justify-content-center cart-item-img">
				<img :src="image"/>
			</div>
			<div class="col-md-10">
				<div class="mb-2 d-flex justify-content-between">
					<a :href="url" target="_blank" class="h4">{{manufacturer}} {{name}}</a>
					<strong class="h5">{{'$' + price}}</strong>
				</div>
				<p>{{description}}</p>
				<div class="d-flex justify-content-between mt-5">
					<div>
						<span class="mr-1">Quantity:</span>
						<button class="btn btn-sm mr-1" @click="decQty(id)" :disabled="quantity === 0"><i class="fas fa-minus-circle text-secondary"></i></button>
						<strong>{{quantity}}</strong>
						<button class="btn btn-sm ml-1" @click="incQty(id)" :disabled="quantity === available"><i class="fas fa-plus-circle text-secondary"></i></button>
					</div>
					<button @click="removeItem(id)" class="btn badge badge-warning float-right">Remove <i class="ml-1 fas fa-trash"></i></button>
				</div>

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
		props: ['id', 'manufacturer', 'name', 'description', 'url', 'image', 'price', 'quantity', 'available'],
		methods : {
			incQty(id) {
				this.$store.dispatch('incQty', id);
			},
			decQty(id) {
				this.$store.dispatch('decQty', id);
			},
			removeItem(id) {
				this.$store.dispatch('removeItem', id);
			}
		}
	};
</script>