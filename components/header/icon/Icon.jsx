import Link from "next/link"

const Icon = () => {
  return (
    <div>
      <Link href='/'>
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#FF6154" />
            <path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14" fill="#FFF" />
          </g>
        </svg>
      </Link>
    </div>
  )
}

export default Icon