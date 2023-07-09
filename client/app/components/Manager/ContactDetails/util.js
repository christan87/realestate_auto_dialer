export const detailCategorySeparator = contact => {
    const separatedCategories = [];

    const ownerInfo = {
        owner1FirstName: contact.owner1FirstName,
        owner1LastName: contact.owner1LastName,
        llcOwnerAgentName: contact.llcOwnerAgentName
    };

    const contactInfo = {
        phone1: contact.phone1, 
        phoneType1: contact.phoneType1,
        phone2: contact.phone2,
        phoneType2: contact.phoneType2,
        phone3: contact.phone3,
        phoneType3: contact.phoneType3,
        phone4: contact.phone4,
        phoneType4: contact.phoneType4,
        phone5: contact.phone5,
        phoneType5: contact.phoneType5,
        phone6: contact.phone6,
        phoneType6: contact.phoneType6,
        phone7: contact.phone7,
        phoneType7: contact.phoneType7, 
        email1: contact.email1,
        email2: contact.email2,
        email3: contact.email3
    };

    const locationInfo = {
        siteCarrierRoute: contact.siteCarrierRoute,
        fullSiteAddress: contact.fullSiteAddress,
        siteAddressUnitNumber: contact.siteAddressUnitNumber,
        fullMailAddress: contact.fullMailAddress,
        mailAddressCity: contact.mailAddressCity,
        mailAddressState: contact.mailAddressState,
        mailAddressZip: contact.mailAddressZip,
        siteAddress: contact.siteAddress,
        siteAddressCity: contact.siteAddressCity,
        siteAddressState: contact.siteAddressState,
        siteAddressZip: contact.siteAddressZip
    };

    const locationTechnicalInfo = {
        useCodeDescription: contact.useCodeDescription,
        useCodeCountyDescription: contact.useCodeCountyDescription,
        parcelNumber: contact.parcelNumber,
        bedrooms: contact.bedrooms,
        bathrooms: contact.bathrooms,
        buildingArea: contact.buildingArea,
        lotAreaSQFT: contact.lotAreaSQFT,
        lotAreaAcres: contact.lotAreaAcres,
        costPerSqFt: contact.costPerSqFt,
        tract: contact.tract,
        yearBuilt: contact.yearBuilt,
        zoning: contact.zoning,
        numberOfUnits: contact.numberOfUnits,
        pool: contact.pool,
        ownerOccupied: contact.ownerOccupied,
        ownerType: contact.ownerType,
        saleDate: contact.saleDate,
        salesPrice: contact.salesPrice,
        salesPriceCode: contact.salesPriceCode,
        salesDocumentNumber: contact.salesDocumentNumber,
        deedType: contact.deedType,
        assessedLandValue: contact.assessedLandValue,
        totalAssessedValue: contact.totalAssessedValue,
        taxAmount: contact.taxAmount,
        currentTaxYear: contact.currentTaxYear
    };

    separatedCategories.push(ownerInfo);
    separatedCategories.push(contactInfo);
    separatedCategories.push(locationInfo);
    separatedCategories.push(locationTechnicalInfo);
    return separatedCategories;
}