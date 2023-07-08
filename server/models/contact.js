const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const ContactSchema = new Schema({
  owner1FirstName: {
    type: String,
    trim: true
  },
  owner1LastName: {
    type: String,
    trim: true
  },
  siteCarrierRoute: {
    type: String,
    trim: true
  },
  fullSiteAddress: {
    type: String,
    trim: true
  },
  siteAddressUnitNumber: {
    type: String,
    trim: true
  },
  fullMailAddress: {
    type: String,
    trim: true
  },
  mailAddressCity: {
    type: String,
    trim: true
  },
  mailAddressState: {
    type: String,
    trim: true
  },
  mailAddressZip: {
    type: String,
    trim: true
  },
  llcOwnerAgentName: {
    type: String,
    trim: true
  },
  phone1: {
    type: String,
    trim: true
  },
  phoneType1: {
    type: String,
    trim: true
  },
  phone2: {
    type: String,
    trim: true
  },
  phoneType2: {
    type: String,
    trim: true
  },
  phone3: {
    type: String,
    trim: true
  },
  phoneType3: {
    type: String,
    trim: true
  },
  phone4: {
    type: String,
    trim: true
  },
  phoneType4: {
    type: String,
    trim: true
  },
  phone5: {
    type: String,
    trim: true
  },
  phoneType5: {
    type: String,
    trim: true
  },
  phone6: {
    type: String,
    trim: true
  },
  phoneType6: {
    type: String,
    trim: true
  },
  phone7: {
    type: String,
    trim: true
  },
  phoneType7: {
    type: String,
    trim: true
  },
  email1: {
    type: String,
    trim: true
  },
  email2: {
    type: String,
    trim: true
  },
  email3: {
    type: String,
    trim: true
  },
  siteAddress: {
    type: String,
    trim: true
  },
  siteAddressCity: {
    type: String,
    trim: true
  },
  siteAddressState: {
    type: String,
    trim: true
  },
  siteAddressZip: {
    type: String,
    trim: true
  },
  useCodeDescription: {
    type: String,
    trim: true
  },
  useCodeCountyDescription: {
    type: String,
    trim: true
  },
  parcelNumber: {
    type: String,
    trim: true
  },
  bedrooms: {
    type: String,
    trim: true
  },
  bathrooms: {
    type: String,
    trim: true
  },
  buildingArea: {
    type: String,
    trim: true
  },
  lotAreaSQFT: {
    type: String,
    trim: true
  },
  lotAreaAcres: {
    type: String,
    trim: true
  },
  costPerSqFt: {
    type: String,
    trim: true
  },
  tract: {
    type: String,
    trim: true
  },
  yearBuilt: {
    type: String,
    trim: true
  },
  zoning: {
    type: String,
    trim: true
  },
  numberOfUnits: {
    type: String,
    trim: true
  },
  pool: {
    type: String,
    trim: true
  },
  ownerOccupied: {
    type: String,
    trim: true
  },
  ownerType: {
    type: String,
    trim: true
  },
  saleDate: {
    type: String,
    trim: true
  },
  salesPrice: {
    type: String,
    trim: true
  },
  salesPriceCode: {
    type: String,
    trim: true
  },
  salesDocumentNumber: {
    type: String,
    trim: true
  },
  deedType: {
    type: String,
    trim: true
  },
  assessedLandValue: {
    type: String,
    trim: true
  },
  totalAssessedValue: {
    type: String,
    trim: true
  },
  taxAmount: {
    type: String,
    trim: true
  },
  currentTaxYear: {
    type: String,
    trim: true
  }
});

module.exports = Mongoose.model('Contact', ContactSchema);