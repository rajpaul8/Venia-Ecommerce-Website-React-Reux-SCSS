import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/Category/Header';
import BreadCrumps from '../../components/BreadCrumps';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, reset } from '../../features/products/productSlice'
import Spinner from '../../components/Spinner';
import ProductCard from '../../components/Category/ProductCard';
import { RiArrowDropDownLine } from 'react-icons/ri'
import { BiSortAlt2 } from 'react-icons/bi'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import CategoriesFilter from './CategoriesFilter';
import { HiAdjustments } from 'react-icons/hi'


function Category() {
    const { height, width } = useWindowDimensions();
    // changing the header dynamically:
    const location = useLocation();
    const [selectedCategoryHeader, setSelectedCategoryHeader] = useState('All Products');
    const [selectedCategoryHeaderImage, setSelectedCategoryHeaderImage] = useState('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
    const categoryHeaderBannerImages = {
        men: 'https://images.unsplash.com/photo-1510950332145-8ee189b80332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        women: 'https://images.unsplash.com/photo-1581404917879-53e19259fdda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80',
        jewelery: 'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80https://images.unsplash.com/photo-1633934542430-0905ccb5f050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80',
        electronics: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    }

    useEffect(() => {
        if (location.pathname === '/products/men') {
            setSelectedCategoryHeader("Men's")
            setSelectedCategoryHeaderImage(categoryHeaderBannerImages.men)
        }
        if (location.pathname === '/products/women') {
            setSelectedCategoryHeader("Women")
            setSelectedCategoryHeaderImage(categoryHeaderBannerImages.women)
        }
        if (location.pathname === '/products/jewelery') {
            setSelectedCategoryHeader("Jewelery")
            setSelectedCategoryHeaderImage(categoryHeaderBannerImages.jewelery)
        }
        if (location.pathname === '/products/electronics') {
            setSelectedCategoryHeader("Electronics")
            setSelectedCategoryHeaderImage(categoryHeaderBannerImages.electronics)
        }

    }, [location, selectedCategoryHeaderImage, selectedCategoryHeader])

    // Products
    const { products, isLoading, isSuccess } = useSelector((state) => state.products)
    const dispatch = useDispatch();
    const [filterDataLoading, setFilterDataLoading] = useState();
    // useState to manage temp. sorting and filtering of the original data
    const [filteredProducts, setFilteredProducts] = useState([products]);

    // Dispatch Fetch Products
    useEffect(() => {
        dispatch(getProducts())
        if (isLoading) {
            setFilterDataLoading(true)
        }
        let filteringProd = products.filter((prod) => prod.category === selectedCategoryHeader)
        setFilterDataLoading(false)

        setFilteredProducts(products);

        if (products.length > 0 && selectedCategoryHeader !== 'All Products') {
            setFilteredProducts(filteringProd)
        } else if (selectedCategoryHeader === 'All Products') {
            setFilteredProducts(products);
        }

        handleFilters(selectedfilterCategory)
    }, [dispatch, location, setFilterDataLoading, selectedCategoryHeader])


    // Sort by Price
    const sortLowToHigh = () => {
        if (filteredProducts.length > 0) {
            return setFilteredProducts([...filteredProducts].sort((a, b) => (a.price > b.price ? 1 : -1)))
        }
        else {
            return setFilteredProducts([...products].sort((a, b) => (a.price > b.price ? 1 : -1)))
        }
    }
    const sortHighToLow = () => {
        if(filteredProducts.length>0){
            return setFilteredProducts([...filteredProducts].sort((a, b) => (a.price > b.price ? -1 : 1)))
        }
        else{
            return setFilteredProducts([...products].sort((a, b) => (a.price > b.price ? -1 : 1)))
        }
    }

    // Filter By Categories
    const [selectedfilterCategory, setSelectedFilterCategory] = useState([])

    useEffect(() => {
        if (location.pathname === '/products/men') {
            setSelectedFilterCategory(["men's clothing"])
        }
        if (location.pathname === '/products/women') {
            setSelectedFilterCategory(["women's clothing"])
        }
        if (location.pathname === '/products/jewelery') {
            setSelectedFilterCategory(["jewelery"])
        }
        if (location.pathname === '/products/electronics') {
            setSelectedFilterCategory(["electronics"])
        }

    }, [location])

    const showFilterResults = (filters) => {
        const res = products.filter(f => filters.includes(f.category));
        setFilteredProducts(res)
    }

    const handleFilters = (filters, category) => {
        let newFilter = [...selectedfilterCategory]
        newFilter = filters
        showFilterResults(newFilter)
        setSelectedFilterCategory(newFilter)
    }

    // Pagination Logic 


    if (isLoading || filterDataLoading) {
        return <Spinner></Spinner>
    }

    return (
        <>
            {/* Top Header Banner Dynamically changes as per categories */}
            <div className='categoryBanner'></div>
            <Header category={selectedCategoryHeader} imageUrl={selectedCategoryHeaderImage} />

            {/* Main Layout Section */}
            <div className="flex justify-center mainCategory">
                <div className="pt-11">
                    <div className="container">

                        <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--1 aem-Grid--phone--1 phone_flex_col overflow-y-hidden">
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--1 aem-GridColumn--phone--1 md-pr-2">
                                {/* Leftside BreadCrump and Filters */}
                                <BreadCrumps />

                                {width > 992 ? <>
                                    <div>
                                        <h4 className='pb-3 pt-3'>Filters</h4>
                                        <h5 className='pt-3 pb-3'>Categories</h5>
                                        <CategoriesFilter handleFilters={filters => handleFilters(filters, "category")} />
                                    </div></> :
                                    <>
                                        <div className="dropdown dropdown-end h-11 flex justify-center pt-5 ">
                                            <label tabIndex="0" className=" w-36 flex justify-start mt-6"><HiAdjustments className="text-2xl" /> <h4 className='font-light underline underline-offset-4 pl-2 '>Filter</h4>
                                                <ul className='tabIndex="0" className="menu dropdown-content p-2 shadow bg-base-100 text-black w-52'>
                                                    <li><CategoriesFilter handleFilters={filters => handleFilters(filters, "category")} /></li>
                                                </ul>
                                            </label>
                                        </div>
                                    </>}
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--tablet--1 aem-GridColumn--phone--1 pt-1_5">
                                {/* ProductsResults Component */}
                                <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--12 reverseFlexRow">
                                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--7'>
                                        <div>
                                            <div className="dropdown dropdown-end h-11 p-0 ">{width > 992 ? <label tabIndex="0" className="btn btn-default w-52 flex justify-start font-light sortPriceDropDownLabel">Sort by Price <span className='ml-9 text-2xl'><RiArrowDropDownLine /></span></label> :
                                                <label tabIndex="0" className=" w-36 flex justify-start text-2xl "><BiSortAlt2 /> <span className=' font-light text-sm underline underline-offset-4'>Sort by Price</span></label>}
                                                <ul tabIndex="0" className="menu dropdown-content shadow bg-base-100 w-52 sortPriceDropDown">
                                                    <li><a onClick={sortLowToHigh}>Low to High</a> </li>
                                                    <li><a onClick={sortHighToLow}> High to Low</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--5'>
                                        &nbsp;
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--12'>

                                        <h5 className='font-bold'>{filteredProducts.length > 0 ? filteredProducts.length : products.length} Results</h5>
                                    </div>
                                </div>
                                <div className='aem-Grid aem-Grid--default--9 aem-Grid--tablet--9 aem-Grid--phone--12 py-7'>
                                    {filteredProducts.length > 0 ? filteredProducts.map((product) => {
                                        return (<>
                                            <div key={product.id} className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--6'>
                                                <ProductCard productImage={product.image} productName={product.title} productPrice={product.price} productID={product.id} productCategory={product.category}></ProductCard>
                                            </div>
                                        </>
                                        )
                                    }) : products.map((product) => {
                                        return (<>
                                            <div key={product.id} className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--6'>
                                                <ProductCard productImage={product.image} productName={product.title} productPrice={product.price} productID={product.id} productCategory={product.category}></ProductCard>
                                            </div>
                                        </>
                                        )
                                    })

                                    }
                                </div>
                                {/* Pagination Here */}
                                <div className="btn-group flex justify-center space-x-7">
                                    <button className="">1</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category

