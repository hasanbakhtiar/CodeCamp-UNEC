import { useRef, useState } from "react"
import { propType } from "../types"




const List: React.FC<propType> = ({ title, price }) => {

    const [data, setData] = useState<string>("Hello");
    const inputRef = useRef<HTMLInputElement>(null);
    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                <input ref={inputRef} type="text" />
            </form>

            {data}
            <button onClick={() => {
                setData("bye");
            }}>test</button>
            <li>{title}</li>
            <li>{price}</li>
        </div>
    )
}

export default List