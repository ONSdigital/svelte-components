<script>
	import { onMount } from "svelte";
	import Container from "$lib/wrappers/Container/Container.svelte";

	/**
	 * Set the title/call to action
	 * @type {string}
	 */
	export let title = "Share this page";
	/**
	 * Adds margin above section
	 * @type {boolean}
	 */
	export let marginTop = false;
	/**
	 * Adds margin below section
	 * @type {boolean}
	 */
	export let marginBottom = true;
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";

	let href = "";
	let pageTitle = "";

	onMount(() => {
		href = document.location.href;
		pageTitle = document.title;
	});
</script>

<Container width="wide" {marginTop} {marginBottom} {cls}>
	<h2 class="ons-u-fs-r--b ons-u-mb-2xs">{title}</h2>
	<ul class="ons-list ons-list--inline ons-list--icons">
		<li class="ons-list__item">
			<span class="ons-list__prefix" aria-hidden="true">
				<svg
					class="ons-icon ons-icon--2xl"
					id="icon-facebook"
					viewBox="0 0 32 32"
					xmlns="http://www.w3.org/2000/svg"
					focusable="false"
					aria-hidden="true"
					role="img"
					title="ons-icon-facebook"
				>
					<path
						d="M32,16.0986285 C32.0009185,7.5342974 25.337417,0.468462963 16.8372092,0.0203294753 C8.33700136,-0.427804013 0.97607758,5.89865855 0.0874346352,14.4161886 C-0.801208309,22.9337186 5.09355054,30.6602611 13.5009524,31.9979281 L13.5009524,20.7518951 L9.44,20.7518951 L9.44,16.0986285 L13.5009524,16.0986285 L13.5009524,12.549267 C13.5009524,8.5169471 15.8857143,6.28613892 19.5428571,6.28613892 C20.742535,6.30277426 21.9393895,6.40782423 23.1238095,6.60044523 L23.1238095,10.5637711 L21.1047619,10.5637711 C19.1161905,10.5637711 18.4990476,11.8056643 18.4990476,13.0782216 L18.4990476,16.0986285 L22.9409524,16.0986285 L22.2247619,20.7518951 L18.4990476,20.7518951 L18.4990476,31.9979281 C26.2735701,30.760956 31.9991507,24.0182672 32,16.0986285 L32,16.0986285 Z"
					/>
				</svg></span
			><a
				href="https://www.facebook.com/sharer/sharer.php?u={href}"
				class="ons-list__link"
				target="_blank">Facebook<span class="ons-u-vh"> (opens in a new tab)</span></a
			>
		</li>
		<li class="ons-list__item">
			<span class="ons-list__prefix" aria-hidden="true">
				<svg
					class="ons-icon ons-icon--2xl"
					id="icon-twitter"
					viewBox="0 0 90.01 90.01"
					xmlns="http://www.w3.org/2000/svg"
					focusable="false"
					aria-hidden="true"
					role="img"
					title="ons-icon-twitter"
				>
					<polygon points="24.89,23.01 57.79,66.99 65.24,66.99 32.34,23.01" />
					<path
						d="M 45 0 L 45 0 C 20.147 0 0 20.147 0 45 v 0 c 0 24.853 20.147 45 45 45 h 0 c 24.853 0 45 -20.147 45 -45 v 0 C 90 20.147 69.853 0 45 0 z M 56.032 70.504 L 41.054 50.477 L 22.516 70.504 h -4.765 L 38.925 47.63 L 17.884 19.496 h 16.217 L 47.895 37.94 l 17.072 -18.444 h 4.765 L 50.024 40.788 l 22.225 29.716 H 56.032 z"
					/>
				</svg></span
			><a
				href="https://x.com/intent/post?text={pageTitle}&url={href}"
				class="ons-list__link"
				target="_blank">Twitter<span class="ons-u-vh"> (opens in a new tab)</span></a
			>
		</li>
		<li class="ons-list__item">
			<span class="ons-list__prefix" aria-hidden="true">
				<svg
					class="ons-icon ons-icon--2xl"
					id="icon-linkedin"
					viewBox="0 0 32 32"
					xmlns="http://www.w3.org/2000/svg"
					focusable="false"
					aria-hidden="true"
					role="img"
					title="ons-icon-linkedin"
				>
					<path
						d="M16,-3.41060513e-13 C20.2434638,-3.41060513e-13 24.3131264,1.68570945 27.3137085,4.6862915 C30.3142906,7.68687356 32,11.7565362 32,16 C32,24.836556 24.836556,32 16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,-3.41060513e-13 16,-3.41060513e-13 Z M11.3505859,12.4641113 L7.45385744,12.4641113 L7.45385744,24.1875 L11.3505859,24.1875 L11.3505859,12.4641113 Z M20.9152832,12.1889649 C18.8479004,12.1889649 17.9213867,13.3251953 17.4035644,14.1240234 L17.4035644,14.1240234 L17.4035644,12.4641113 L13.5070801,12.4641113 C13.5212538,12.7696262 13.5275532,13.809993 13.5292593,15.1533871 L13.5293118,16.8832762 C13.5292156,16.9843911 13.5291048,17.0860852 13.5289803,17.1882303 L13.5280782,17.8054916 L13.5280782,17.8054916 L13.5268961,18.427439 C13.5216699,20.9164121 13.5108442,23.3704557 13.5078578,24.0208157 L13.5070801,24.1875 L17.4035644,24.1875 L17.4035644,17.640625 C17.4035644,17.2902832 17.4287109,16.9401856 17.5317382,16.6896972 C17.8134766,15.9897461 18.4545899,15.2646484 19.5310059,15.2646484 C20.940918,15.2646484 21.5051269,16.3395996 21.5051269,17.9157715 L21.5051269,17.9157715 L21.5051269,24.1875 L25.4013672,24.1875 L25.4013672,17.465332 C25.4013672,13.8645019 23.4790039,12.1889649 20.9152832,12.1889649 Z M9.42822263,6.8125 C8.09521488,6.8125 7.22363281,7.68774412 7.22363281,8.83813475 C7.22363281,9.96313475 8.06933594,10.8632812 9.37695313,10.8632812 L9.37695313,10.8632812 L9.40234375,10.8632812 C10.7612305,10.8632812 11.6069336,9.96313475 11.6069336,8.83813475 C11.581543,7.68774412 10.7612305,6.8125 9.42822263,6.8125 Z"
					/>
				</svg>
			</span><a
				href="https://www.linkedin.com/sharing/share-offsite/?url={href}"
				class="ons-list__link"
				target="_blank">LinkedIn<span class="ons-u-vh"> (opens in a new tab)</span></a
			>
		</li>
		<li class="ons-list__item">
			<span class="ons-list__prefix" aria-hidden="true">
				<svg
					class="ons-icon ons-icon--2xl"
					id="icon-email"
					viewBox="0 0 36 36"
					xmlns="http://www.w3.org/2000/svg"
					focusable="false"
					aria-hidden="true"
					role="img"
					title="ons-icon-email"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M30.7279 5.27208C27.3523 1.89642 22.7739 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36
              27.9411 36 18C36 13.2261 34.1036 8.64773 30.7279 5.27208ZM18 19L26 14V12L18 17L10 12V14L18 19ZM8 10H28V26H8V10Z"
					></path>
				</svg>
			</span><a
				href="mailto:?subject={pageTitle}&body={pageTitle}%0A{href}"
				class="ons-list__link"
				target="_blank">Email<span class="ons-u-vh"> (opens in a new tab)</span></a
			>
		</li>
	</ul>
</Container>
