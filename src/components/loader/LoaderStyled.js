import styled, { keyframes } from 'styled-components'
import { globalColor } from '../../GlobalStyles'

export const spinAnimation = keyframes`
 0% {
    transform: translate(2px, 1px) rotate(0deg) rotateZ(0deg);
  }
  10% {
    transform: translate(-1px, -3px) rotate(-1deg) rotateZ(36deg);
  }
  20% {
    transform: translate(-2px, 0px) rotate(1deg) rotateZ(72deg);
  }
  30% {
    transform: translate(1px, 2px) rotate(0deg) rotateZ(108deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg) rotateZ(144deg);
  }
  50% {
    transform: translate(-1px, 3px) rotate(-1deg) rotateZ(180deg);
  }
  60% {
    transform: translate(-1px, 1px) rotate(0deg) rotateZ(216deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg) rotateZ(252deg);
  }
  80% {
    transform: translate(-2px, -1px) rotate(1deg) rotateZ(288deg);
  }
  90% {
    transform: translate(2px, 1px) rotate(0deg) rotateZ(324deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg) rotateZ(360deg);
  }
 	

`
export const carAnimation = keyframes`

  0% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -3px) rotate(-1deg);
  }
  20% {
    transform: translate(-2px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 3px) rotate(-1deg);
  }
  60% {
    transform: translate(-1px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-2px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
`
export const strikesAnimation = keyframes`
  from {
    left: 25px;
  }
  to {
    left: -80px;
    opacity: 0;
  }
`
export const dotsAnimation = keyframes`
  from{width: 0px}
 		
	to{width: 15px}
 		
`
export const fadeInAnimation = keyframes`
  from{opacity: 0}
 		
	to{opacity: 1}
  
 		
`

export const BackgroundOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const LoadingWindow = styled.div`
	animation: ${fadeInAnimation} 0.4s both;
	background: transparent;
	height: 300px;
	width: 500px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 99;
`
export const Text = styled.div`
	color: ${globalColor.colorRed};
	font-size: 24px;
	font-weight: 600;
	position: absolute;
	width: auto;
	top: 75%;
	left: 50%;
	transform: translate(0, -50%);

	.dots {
		display: inline-block;
		width: 5px;
		overflow: hidden;
		vertical-align: bottom;
		animation: ${dotsAnimation} 1.5s linear infinite;
		transition: 1;
	}
`
export const Car = styled.div`
	position: absolute;
	width: 234px;
	height: 84px;
	left: 60%;
	top: 50%;
	transform: translate(0, -20%) scale(2);
	.strike {
		position: absolute;
		width: 22px;
		height: 2px;
		background: ${globalColor.colorRed};
		animation: ${strikesAnimation} 0.2s linear infinite;
	}

	.strike2 {
		top: 11px;
		animation-delay: 0.05s;
	}

	.strike3 {
		top: 22px;
		animation-delay: 0.1s;
	}

	.strike4 {
		top: 33px;
		animation-delay: 0.15s;
	}

	.strike5 {
		top: 44px;
		animation-delay: 0.2s;
	}

	.car-detail {
		position: absolute;
		display: block;
		background: ${globalColor.colorRed};
		animation: ${carAnimation} 0.5s linear infinite;

		&.spoiler {
			width: 0;
			height: 0;
			top: 7px;
			background: none;
			border: 20px solid transparent;
			border-bottom: 8px solid black;
			border-left: 20px solid black;
		}

		&.back {
			height: 20px;
			width: 92px;
			top: 15px;
			left: 0px;
		}

		&.center {
			height: 35px;
			width: 75px;
			left: 12px;
			border-top-left-radius: 30px;
			border-top-right-radius: 45px 40px;
			border: 4px solid black;
			background: none;
			box-sizing: border-box;
		}

		&.center1 {
			height: 35px;
			width: 35px;
			left: 12px;
			border-top-left-radius: 30px;
		}

		&.front {
			height: 20px;
			width: 50px;
			top: 15px;
			left: 67px;
			border-top-right-radius: 50px 40px;
			border-bottom-right-radius: 10px;
			color: black;
		}

		&.wheel {
			height: 24px;
			width: 24px;
			border-radius: 50%;
			top: 20px;
			left: 12px;
			border: 3px solid black;
			background: linear-gradient(
					45deg,
					transparent 45%,
					#ffe4e1 46%,
					#ffe4e1 54%,
					transparent 55%
				),
				linear-gradient(
					-45deg,
					transparent 45%,
					#ffe4e1 46%,
					#ffe4e1 54%,
					transparent 55%
				),
				linear-gradient(
					90deg,
					transparent 45%,
					#ffe4e1 46%,
					#ffe4e1 54%,
					transparent 55%
				),
				linear-gradient(
					0deg,
					transparent 45%,
					#ffe4e1 46%,
					#ffe4e1 54%,
					transparent 55%
				),
				radial-gradient(
					#ffe4e1 29%,
					transparent 30%,
					transparent 50%,
					#ffe4e1 51%
				),
				red;
			animation: ${spinAnimation} 0.5s linear infinite;
		}

		&.wheel2 {
			left: 82px;
			background-color: red;
		}
	}
`
