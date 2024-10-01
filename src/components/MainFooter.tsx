
const MainFooter = () => {
  return (
    <footer className=' w-full p-5'>
        
        <div className="mx-auto w-[80%] flex items-center justify-between ">
            <div>
                <h2 className="text-4xl mb-2">CryptoMemeRawr</h2>
                <p className="text-sm">Read up on the latest articles about crypto tips and tricks </p>
            </div>




            <div className="flex items-center flex-col gap-4">
                <h5 className="text-sm">Links</h5>
                <ul className="flex items-center flex-col gap-4">
                    <li>About</li>
                    <li>Home</li>
                    <li>Blogs</li>
                </ul>
            </div>
        </div>



    </footer>
  )
}

export default MainFooter