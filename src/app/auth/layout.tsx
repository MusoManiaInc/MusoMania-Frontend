import Image from "next/image"
import Link from "next/link"

type Props = {
    children: React.ReactNode,
}
const Layout = async ({children}:Props) => {
  return (
      <div className="h-screen flex w-full justify-center">
          <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
          <Link href="/" className="flex items-center gap-2">
              <Image
              src="/icons/logo.png"
              alt="LOGO"
              sizes="100vw"
              className=""
              style={{
                  width: '22%',
                  height: 'auto',
              }}
              width={0}
              height={0}
              /> 
              <span className="font-semibold text-lg">MusoMania</span>
          </Link>
          {children}
        </div>
        <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative justify-center bg-amber-100 flex-col pt-10 pl-24 gap-3">
            <Image src="/images/auth.png" alt="auth picture" className="!w-[1000px]" width={400} height={400}/>
        </div>
        
      </div>
  )
}

export default Layout