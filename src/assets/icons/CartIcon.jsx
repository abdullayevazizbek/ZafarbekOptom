import * as React from "react"

const CartIcon = (props) => (
  <svg
    {...props}
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
      stroke="#5D6066"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CartIcon
