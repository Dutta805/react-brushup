import React, { useEffect, useState } from 'react';
import './pagination.css';

export default function Pagination() {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);


    const fetchProducts = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        
        if(data && data?.products){
            setProducts(data.products)
        }
    }

    const selectPageHandler = (selectedIndex) => {
        if(selectedIndex >= 1 && selectedIndex <= products.length / 10 & selectedIndex !== page){
            setPage(selectedIndex)
        }
    }

    useEffect(() => {
        fetchProducts();
    },[])
  return (
    <div>
        <div>
            <h1>Pagination</h1>
        </div>
        <div>
            {
                products.length > 0 && <div className='products'>
                    {
                        products.slice(page * 10 - 10, page * 10).map((prod) => {
                            return <div className='products__single'>
                                <img src={prod.thumbnail} alt={prod.title} />
                                <span>{prod.title}</span>
                            </div>
                        })
                    }
                </div>
            }
        </div>
        {
            products.length > 0 && (
            <div className='pagination'>
                <span className={page > 1 ? '':'hide'} onClick={() => selectPageHandler(page - 1)}>Prev</span>
                {
                    [...Array(products.length / 10)].map((_,index) => {
                        return <span className={page === index + 1 ? "paginatin__selected":""} onClick={() => selectPageHandler(index + 1)}>{index + 1}</span>
                    })
                }
                <span className={page === products.length / 10 ? 'hide':''} onClick={() => selectPageHandler(page + 1)}>Next</span>
            </div>)
        }
    </div>
  )
}
