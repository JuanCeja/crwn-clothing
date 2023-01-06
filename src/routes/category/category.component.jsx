import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCategoriesLoading, selectCategoriesMap } from '../../store/categories/category.selector';
import { Title, CategoryContainer } from './category.styles.jsx';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';


const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <Title>{category.toUpperCase()}</Title>
            {isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                    {products &&
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </CategoryContainer>
            )}
        </>
    )
}

export default Category