import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Home(props) {
    return (
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => {
                window.location = props.href
            }}>
            loggin with ekyc
        </button>

    )
}