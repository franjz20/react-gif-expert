
import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

//rafc
export const GifExpertApp = () => {
    
    //NUNCA hay que poner los hooks de react en condicionales (if)

    //Es conveniente tener un valor inicial, en este caso siempre sera un arreglo porque asi lo definimos 
    const [categories, setCategories] = useState([ 'Dragon Ball' ]);
    
    const onAddCategory = (newCategory) => {
        
        if(categories.includes(newCategory)) return;

        // categories.push('newCategory');
        setCategories([newCategory,...categories]);
        // setCategories(categories => [...categories, 'Vinland Saga']);
        
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={setCategories} 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/* Listado de Gif */}
           
            
            {
                categories.map( (category) => ( 
                    <GifGrid key={category} category={category}/>          
                ))
            }
            
            
            {/* Gif Item */}
    
            {/* RZDiXzMxEnx4WhyxV4YpZEPcVuYHmIjW */}
    
        </>
    )
}

