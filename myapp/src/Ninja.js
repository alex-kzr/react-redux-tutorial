import React from 'react';

const Ninjas = ({ninjas}) => {
    // solutin 1
    // const ninjaList = ninjas.map(ninja => {
    //     if(ninja.age > 20){
    //         return (
    //             <div className="ninja" key={ninja.id}>
    //                 <div>Name: {ninja.name}</div>
    //                 <div>Age: {ninja.age}</div>
    //                 <div>Belt: {ninja.belt}</div>
    //             </div>
    //         );
    //     }else{
    //         return null;
    //     }
    // });

    // solution 2
    // const ninjaList = ninjas.map(ninja => {
    //     return ninja.age > 20 ? (
    //         <div className="ninja" key={ninja.id}>
    //             <div>Name: {ninja.name}</div>
    //             <div>Age: {ninja.age}</div>
    //             <div>Belt: {ninja.belt}</div>
    //         </div>
    //     ) : null;
    // });

    // return(
    //     <div className="ninja-list">
    //         {ninjaList}
    //     </div>
    // );
    
    // solution 3
    return(
        <div className="ninja-list">
            {ninjas.map(ninja => {
                return ninja.age > 20 ? (
                    <div className="ninja" key={ninja.id}>
                        <div>Name: {ninja.name}</div>
                        <div>Age: {ninja.age}</div>
                        <div>Belt: {ninja.belt}</div>
                    </div>
                ) : null;
            })
            }
        </div>
    );
}



export default Ninjas;