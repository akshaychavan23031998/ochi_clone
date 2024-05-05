import { useEffect, useState } from "react"

const Eyes = () => {

  const [rotate, setRotate] = useState(0);  

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
        // console.log(e);
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        // console.log(e.clientX, e.clientY);
        let deltaX = mouseX - window.innerWidth/2;
        let deltaY = mouseY - window.innerHeight/2;
        
        let angle = 270 - (Math.atan2(deltaX, deltaY) * (180/Math.PI));

        // console.log(angle);
        setRotate(angle);
    })
  })

  return (
    <div className="eyes w-full h-screen overflow-hidden">
        <div data-scroll data-scroll-section data-scroll-speed="-.4" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
            <div className="flex gap-10 -translate-x-[50%] -translate-y-[50%] absolute top-1/2 left-1/2">
                <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
                    <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                            <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                        </div>
                    </div>
                </div>
                <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
                    <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">    
                            <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes