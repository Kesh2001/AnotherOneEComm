export default function Home() {
  return (
  <div className="p-5"> {/**p is for padding */}
    <div>
      <h2 className="font-bold text-2xl">Mobiles</h2>  {/**lg is for large */}
        <div className="py-4"> {/**py is for vertical padding (along y axis) */}
          <div className="w-64">{/**width */}
            <div className="bg-blue-100 p-5 rounded-xl"> {/**xl is for increasing the curve */}
              <img src="iphone.png" alt=""></img>
            </div>      
             
            <div className="mt-2"> {/**mt is margin top */}
              <h3 className="font-bold text-lg">
                Iphone 14 Pro
              </h3>
            </div>
            <p className="text-sm mt-1 leading-4"> Loren Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
            {/**leading is the space btw lines */}
            <div className="flex mt-1">
              <div className="text-2xl font-bold grow">$899</div>
              <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
            </div>
            </div>
        </div>
      </div>  
  </div>
  );
}
