import React from "react";


export const Portfolio = () => {
    return(
        <>
          <div className="container mx-auto">
            <h1 className="text-4xl text-center text-gray-50">MY Portfolio</h1>
               <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-3" >
                  <div className="py-2 px-4 text-amber-100">
                      <img src="https://picsum.photos/200/300" alt="Portfolio Item 1" className="w-full h-auto rounded-lg shadow-lg"/>
                      <h2 className="text-center text-2xl">Portfolio Item 1</h2>
                  </div>
                  <div className="py-2 px-4 text-amber-100">
                      <img src="https://picsum.photos/200/300" alt="Portfolio Item 1" className="w-full h-auto rounded-lg shadow-lg"/>
                      <h2 className="text-center text-2xl">Portfolio Item 1</h2>
                  </div>
                  <div className="py-2 px-4 text-amber-100">
                      <img src="https://picsum.photos/200/300" alt="Portfolio Item 1" className="w-full h-auto rounded-lg shadow-lg"/>
                      <h2 className="text-center text-2xl">Portfolio Item 1</h2>
                  </div>
                  <div className="py-2 px-4 text-amber-100">
                      <img src="https://picsum.photos/200/300" alt="Portfolio Item 1" className="w-full h-auto rounded-lg shadow-lg"/>
                      <h2 className="text-center text-2xl">Portfolio Item 1</h2>
                  </div>
               </div>
               <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-3" >
                  <div className="py-2 px-4 text-amber-100">
                      <img src="https://picsum.photos/200/300" alt="Portfolio Item 1" className="w-full h-auto rounded-lg shadow-lg"/>
                      <h2 className="text-center text-2xl">Portfolio Item 1</h2>
                  </div>
                  <div className="py-2 px-4 text-amber-100">
                      <img src="https://picsum.photos/200/300" alt="Portfolio Item 1" className="w-full h-auto rounded-lg shadow-lg"/>
                      <h2 className="text-center text-2xl">Portfolio Item 1</h2>
                  </div>
                  <div className="py-2 px-4 text-amber-100">
                      <img src="https://picsum.photos/200/300" alt="Portfolio Item 1" className="w-full h-auto rounded-lg shadow-lg"/>
                      <h2 className="text-center text-2xl">Portfolio Item 1</h2>
                  </div>
                  <div className="py-2 px-4 text-amber-100">
                      <img src="https://picsum.photos/200/300" alt="Portfolio Item 1" className="w-full h-auto rounded-lg shadow-lg"/>
                      <h2 className="text-center text-2xl">Portfolio Item 1</h2>
                  </div>
               </div>
          </div>
        </>
    );

}