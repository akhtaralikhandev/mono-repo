import Link from "next/link"
const Page = () => {
  return (
    <div>
      <span>this is docs app</span>
      <Link href={"http://localhost:3001/"}>
        <button>
          visit web
        </button>
      </Link>

    </div>
  )
}
export default Page