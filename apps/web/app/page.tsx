import Link from "next/link"
const Page = () => {
  return (
    <div>
      <span>this is web app</span>
      <Link href={"http://localhost:3000/"}>
        <button>
          visit docs
        </button>
      </Link>

    </div>
  )
}
export default Page