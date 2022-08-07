
const updatePricing = (pricingSummary)=>{
    localStorage.setItem("pricingSummary", JSON.stringify(pricingSummary));
    return pricingSummary;
}

const pricingService = {
    updatePricing
}

export default pricingService;