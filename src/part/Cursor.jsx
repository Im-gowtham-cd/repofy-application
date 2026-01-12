import { useEffect } from 'react';
import CursorStyle from './css/Cursor.module.css'

export default function Cursor() {

    useEffect(() => {
        const cursor = document.getElementById("cursor");
        const mouse = e => {
            let y = e.clientY - cursor.offsetHeight / 2;
            let x = e.clientX - cursor.offsetWidth / 2;
            cursor.style.transform = `translate(${x}px , ${y}px)`;
        }

        window.addEventListener('mousemove', mouse);
        return(()=>{
            window.removeEventListener('mousemove',mouse)
        })
    },[])



    return (
        <>
            <div className={CursorStyle.cursor} id="cursor">
                <ul className={CursorStyle.eyes}>
                    <li></li>
                    <li></li>
                </ul>
                <span className={CursorStyle.mouth}></span>
                <span className={CursorStyle.mouthCircle}></span>
            </div>
        </>
    )
}