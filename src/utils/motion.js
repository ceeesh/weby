export const fade = (duration, delay) => ({
	offscreen: { opacity: 0 },
	onscreen: {
		opacity: 1,
		transition: {
			duration: duration,
			delay: delay,
			ease: 'easeInOut',
		},
	},
});

export const spanFade = (delay) => ({
	offscreen: { opacity: 0 },
	onscreen: {
		opacity: 1,
		transition: {
			duration: 0.8,
			delay: 0.2 *  Math.floor(delay),
			ease: 'easeInOut',
		},
	},
});

export const fadeDown = (direction, type, duration) => ({
	offscreen: {
		x: direction
	},
	onscreen: {
		x: 0,
		transition: {
			type: type,
			duration: duration,
		},
	}
})

export const bounceIn = (direction, type, duration, bounce) => ({
	offscreen: {
		x: direction
	},
	onscreen: {
		x: 0,
		transition: {
			type: type,
			duration: duration,
			bounce: bounce
		},
	},
});

export const slideUp = (direction, duration) => ({
	offscreen: {
		y: direction
	},
	onscreen: {
		y: 0,
		transition: {
			duration: duration,
			ease: 'easeInOut',
		},
	},
});

export const slideLeft = (direction, duration) => ({
	offscreen: {
		x: direction,
		rotate: -150,
	},
	onscreen: {
		x: 0,
		rotate: 0,
		transition: {
			duration: duration,
			ease: 'easeInOut',
		},
	},
});

export const slideRight = (direction, duration) => ({
	offscreen: {
		x: direction,
		rotate: 300,
	},
	onscreen: {
		x: 0,
		rotate: 90,
		transition: {
			duration: duration,
			ease: 'easeInOut',
		},
	},
});






