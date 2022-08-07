import React from 'react'

function Header({ category, imageUrl }) {
    return (
        <>
            <div className="categoryTopHeaderRow">
                <div className="aem-Grid aem-Grid--12 aem-Grid--tablet--12 aem-Grid--phone--12 ">
                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--5 aem-GridColumn--phone--12">
                        <div className="categoryTitle">
                            <div className='categoryTitleBorderBottom'>
                                <div className='categoryTitleText'>{category}</div>
                                {category === "Men's" || category === "Women's" ? <><div className="categoryTitleText">Outerware</div></> : ''}
                            </div>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--7 aem-GridColumn--phone--12">
                        <div className='categoryBannerImager'>
                            <img src={imageUrl} alt= {`${category} Background Top Image`} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header