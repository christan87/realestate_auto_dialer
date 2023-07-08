const Mongoose = require('mongoose');
const { Schema } = Mongoose

const ContactSchema = new Schema({
    Owner1FirstName : {
        type: String,
        trim: true
       },
       
    Owner1LastName : {
        type: String,
        trim: true
    },
       
    SiteCarrierRoute : {
        type: String,
        trim: true
    },
       
    FullSiteAddress : {
        type: String,
        trim: true
    },
       
    SiteAddressUnitNumber : {
        type: String,
        trim: true
    },
       
    FullMailAddress : {
        type: String,
        trim: true
    },
       
    MailAddressCity : {
        type: String,
        trim: true
    },
       
     MailAddressState : {
        type: String,
        trim: true
    },
       
    MailAddressZip : {
        type: String,
        trim: true
    },
       
    LLCOwnerAgentName : {
        type: String,
        trim: true
    },
       
    Phone1 : {
        type: String,
        trim: true
    },
       
    PhoneType : {
        type: String,
        trim: true
    },
       
    Phone2 : {
        type: String,
        trim: true
    },
       
    PhoneType : {
        type: String,
        trim: true
    },
       
    Phone3 : {
        type: String,
        trim: true
    },
       
    PhoneType : {
        type: String,
        trim: true
    },
       
    Phone4 : {
        type: String,
        trim: true
    },
       
    PhoneType : {
        type: String,
        trim: true
    },
       
    Phone5 : {
        type: String,
        trim: true
    },
       
    PhoneType : {
        type: String,
        trim: true
    },
       
    Phone6 : {
        type: String,
        trim: true
    },
       
    PhoneType : {
        type: String,
        trim: true
    },
       
    Phone7 : {
        type: String,
        trim: true
    },
       
    PhoneType : {
        type: String,
        trim: true
    },
       
    Email1 : {
        type: String,
        trim: true
    },
       
    Email2 : {
        type: String,
        trim: true
       },
       
    Email3 : {
        type: String,
        trim: true
    },
       
    SiteAddress : {
        type: String,
        trim: true
    },
       
    SiteAddressCity : {
        type: String,
        trim: true
       },
       
    SiteAddressState : {
        type: String,
        trim: true
    },
       
    SiteAddressZip : {
        type: String,
        trim: true
       },
       
    UseCodeDescription : {
        type: String,
        trim: true
    },
       
    UseCodeCountyDescription : {
        type: String,
        trim: true
    },
       
    ParcelNumber : {
        type: String,
        trim: true
    },
       
    Bedrooms : {
        type: String,
        trim: true
    },
       
    Bathrooms : {
        type: String,
        trim: true
    },
       
    BuildingArea : {
        type: String,
        trim: true
    },
       
    LotAreaSQFT : {
        type: String,
        trim: true
    },
       
    LotAreaAcres : {
        type: String,
        trim: true
    },
       
    CostPerSqFt : {
        type: String,
        trim: true
    },
       
    Tract : {
        type: String,
        trim: true
    },
       
    YearBuilt : {
        type: String,
        trim: true
    },
       
    Zoning : {
        type: String,
        trim: true
    },
       
    NumberofUnits : {
        type: String,
        trim: true
    },
       
    Pool : {
        type: String,
        trim: true
    },
       
    OwnerOccupied : {
        type: String,
        trim: true
    },
       
    OwnerType : {
        type: String,
        trim: true
    },
       
    SaleDate : {
        type: String,
        trim: true
    },
       
    SalesPrice : {
        type: String,
        trim: true
    },
       
    SalesPriceCode : {
        type: String,
        trim: true
    },
       
    SalesDocumentNumber : {
        type: String,
        trim: true
    },
       
    DeedType : {
        type: String,
        trim: true
    },
       
    AssessedLandValue : {
        type: String,
        trim: true
    },
       
    TotalAssessedValue : {
        type: String,
        trim: true
    },
       
    TaxAmount : {
        type: String,
        trim: true
    },
       
    CurrentTaxYear : {
        type: String,
        trim: true
    }
});

module.exports = Mongoose.model('Contact', ContactSchema);