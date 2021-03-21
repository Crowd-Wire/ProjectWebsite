// const counters = document.querySelectorAll('.counter');

// if (
// 	"IntersectionObserver" in window &&
// 	"IntersectionObserverEntry" in window &&
// 	"intersectionRatio" in window.IntersectionObserverEntry.prototype
// ) {
// let observer = new IntersectionObserver(entries => {
// 	if (entries[0].boundingClientRect.y < 0) {
// 		counters.forEach(counter => {
// 			const updateCount = () => {
// 				const target = +counter.getAttribute('data-target');
// 				const count = +counter.innerText;
		
// 				// Lower inc to slow and higher to slow
// 				const inc = 1;
		
// 				// console.log(inc);
// 				// console.log(count);
		
// 				// Check if target is reached
// 				if (count < target) {
// 					// Add inc to count and output in counter
// 					counter.innerText = Math.ceil(count + inc);
// 					console.log(counter.innerText)
// 					// Call function every ms
// 					setTimeout(updateCount, 100);
// 				} else {
// 					counter.innerText = target;
// 				}
// 			};
		
// 			updateCount();
// 		});
// 	} 
// });
// observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
// }