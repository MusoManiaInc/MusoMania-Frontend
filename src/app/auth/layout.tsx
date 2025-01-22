import Image from "next/image"
import Link from "next/link"

type Props = {
    children: React.ReactNode,
}
const Layout = async ({children}:Props) => {
  return (
      <div className="">
          {children}
      </div>
  )
}

export default Layout