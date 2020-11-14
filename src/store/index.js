import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		cart: [
			{
				"image": "https://media.sweetwater.com/images/items/120/SM57-medium.jpg",
				"url": "https://www.sweetwater.com/store/detail/SM57",
				"manufacturer": "Shure",
				"productName": "Sm57",
				"itemid": "SM57",
				"quantity": 1,
				"price": 99.00,
				"description": "Dynamic Microphone with Cardioid Pickup Pattern, 40Hz-15kHz Frequency Response, Low Impedance, Includes Stand Adapter, and Zippered Carrying Case",
				"available": 9
			},
			{
				"image": "https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-300__bg-ffffff__q-85__ha-e842a0b321fdb550__hmac-f206a896f8caef02e662454ed9724e9f26f492a9/images/items/350/SG61VENH.jpg.auto.webp",
				"url": "https://www.sweetwater.com/store/detail/SGS17HCCH/sn170099523",
				"manufacturer": "Gibson",
				"productName": "SG Standard 2017 T - Heritage Cherry",
				"itemid": "SGS17HCCH",
				"quantity": 1,
				"price": 1169.00,
				"serial": 170099523,
				"description": "Solidbody Electric Guitar with Mahogany Body, Mahogany Neck, Rosewood Fingerboard, and 2 Humbucking Pickups - Heritage Cherry",
				"available": 1
			},
			{
				"image": "https://media.sweetwater.com/images/items/120/SM58-medium.jpg",
				"url": "https://www.sweetwater.com/store/detail/SM58",
				"manufacturer": "Shure",
				"productName": "SM58",
				"itemid": "SM58",
				"quantity": 3,
				"price": 99.00,
				"description": "Dynamic Vocal Microphone with Cardioid Pickup Pattern and 50Hz-15kHz Frequency Response, Includes Stand Adapter, and Zippered Carrying Case",
				"available": 6
			},
			{
				"image": "https://media.sweetwater.com/images/items/120/R16-medium.jpg",
				"url": "https://www.sweetwater.com/store/detail/R16",
				"manufacturer": "Zoom",
				"productName": "R16",
				"itemid": "R16",
				"quantity": 1,
				"price": 399.99,
				"description": "16-track Portable SD Recorder, USB Audio Interface, and DAW Control Surface with 8 Microphone Inputs, Built-in Stereo Condenser Microphones, Built-in Effects, 1GB SD Card, and USB - Mac/PC",
				"available": 14
			}
		]
	},
	getters: {
		items: (state) => state.cart,
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	}
})
