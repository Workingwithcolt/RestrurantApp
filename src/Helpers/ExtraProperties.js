import {
    NUMBERS,
    PRODUCT_TYPE_FINISHED,
    PRODUCT_TYPE_RAW,
    PRODUCT_TYPE_PROCESS,
    RESTRAURANTS,
} from './ConstantProperties';
export const JPEG_CONTENT_TYPE = 'image/jpeg';
export const PNG_CONTENT_TYPE = "image/png";
export const MaxImageSizeMB = 1;
export const INPUT_TYPE_NONE = "none";
export const INPUT_TYPE_NUM = "numeric"
export const INPUT_TYPE_EMAIL = "email";
export const INPUT_TYPE_TEL = "tel";

export const PARTY_CUSTOMER_TYPE = "Customer"
export const PARTY_VENDOR_TYPE = "Vendor"

//tag must be in lowerCase
export const PARTY_TAG = 'party';
export const LEAD_TAG = 'lead'
export const BANK_ACCOUNT_TAG = 'bankAccount';
export const PRODUCT_TAG = 'product';
export const INQUIRY_TAG = "inquiry";
export const CLOSED_INQUIRY_TAG = "closedinquiry";
export const INQUIRY_REJECT_TAG = "inquiryreject";
export const ACCOUNTANT_USER_LEVEL = 'Accountant';
export const CUSTOMER_USER_LEVEL = 'Customer';
export const USER_LEVEL = 'User';
export const ADMIN_USER_LEVEL = 'Admin';
export const INDIA_COUNTRY_CODE = "91";
export const DEVELOPMENT_ENV = 'development';
export const CONTACT = 'Contact';
export const OTHER = "Other";
export const NO_DATA = "Not Available"

export const AllImageTypes = [JPEG_CONTENT_TYPE, PNG_CONTENT_TYPE];
export const MULTIPLE_Role = "Multiple Role"

export const HSN_CODE_PROP = "productHSNcode";
export const GST_RATE = "GSTRate";
export const SHOW_GST_DROPDOWN = 'showGSTDropdown';

export const PRODUCTSGROUP = "products";
export const PRODUCTGROUPID = "productID"

export const menuItems = [
    { text: 'Restraurent', path: RESTRAURANTS },
];

export const requirementRawMaterialHeading = [
    { label: 'Raw Material Name', lg: 3, xs: 12 },
    { label: 'RM Quantity', lg: 3, xs: 12 },
    { label: 'Price/Unit', lg: 3, xs: 12 },
    { label: 'Actions', lg: 3, xs: 12 }
]

export const SchemaTypes = {
    Number: "Number",
    String: "String",
    UUID: "UUID",
    KN_PAN: "KN_PAN",
    KN_PIN: "KN_PIN",
    KN_GSTIN: "KN_GSTIN",
    DATE: "date",
    radio: "radio",
    file: "file",
    EMAIL: "EMAIL",
    IMAGE: "image",
    ADHAR_CARD: "aadharCard",
    DROP_DOWN: "dropdown",
    headline: "Headline",
    PASSWORD: "password",
    Password: "password",
    STD_DROPDOWN: "standarddropdown",
    checkbox: "checkbox",
    DIV_DROPDOWN: "divisiondropdown",
    PHONE_NUMBER: "PHONE_NUMBER",
    IFSC_CODE: "IFSC_CODE",
    ESTD: "ESTD",
    UDISE: "UDISE",
    USER_LEVEL_DROPDOWN: "userleveldropdown",
    RADIO_BUTTON: "radiobutton",
    TextArea: "TextArea",
    HSNCODE: "HSNCODE",
    STATICDROPDOWN: 'StaticDropDown',
    PRODUCTDROPDOWN: 'ProductDropDown',
    CUSTOMERDROPDOWN: "CustomerDropDown",
    INQUIRYSOURCEDROPDOWN: "InquirySourceDropdown",
    PINCODE: "PINCODE",
    ALPHA_NUM: "ALPHA_NUM",
    GSTRATE: "GSTRATE",
    QUANTITY: "QUANTITY",
    SALERATE: "SALERATE",
    DESIGNATION: "DESIGNATION",
    CITY: "CITY",
    ITEMCODE: "ITEMCODE",
}

const units = [
    "BAGS",
    "BALE",
    "BUNDLES",
    "BUCKLES",
    "BILLIONS OF UNITS",
    "BOX",
    "BOTTLES",
    "BUNCHES",
    "CANS",
    "CUBIC METER",
    "CUBIC CENTIMETER",
    "CENTIMETER",
    "CARTONS",
    "DOZEN",
    "DRUM",
    "GREAT GROSS",
    "GRAMS",
    "GROSS",
    "GROSS YARDS",
    "KILOGRAMS",
    "KILOLITER",
    "KILOMETRE",
    "MILLILITRE",
    "METERS",
    "METRIC TONS",
    NUMBERS,
    "PACKS",
    "PIECES",
    "PAIRS",
    "QUINTAL",
    "ROLLS",
    "SETS",
    "SQUARE FEET",
    "SQUARE METERS",
    "SQUARE YARDS",
    "TABLETS",
    "TEN GROSS",
    "THOUSANDS",
    "TONNES",
    "TUBES",
    "US GALLONS",
    "UNITS",
    "YARDS",
    "OTHERS"
];

export const known_Custom_Types = {
    KN_PAN: "^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$",
    KN_PIN: "^[1-9]{1}[0-9]{5}$",
    KN_GSTIN: "^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5})([0-9]{4})([a-zA-Z]{1}[1-9a-zA-Z]{1})([zZ]{1})([0-9a-zA-Z]{1})$",
    date: "d{2}-d{2}-d{4}",
    PINCODE: "^\\d{6}$",
    ADHAR_CARD_FIRST: "[2-9]{1}[0-9]{3}",
    ADHAR_CARD_SECOND: "[0-9]{4}",
    ADHAR_CARD_THIRD: "[0-9]{4}",
    PHONE_NUMBER: "^\\+?\\s?(\\d\\s?){12}$",
    IFSC_CODE: "^[A-Za-z]{4}[a-zA-Z0-9]{7}$",
    ALPHA_NUM: "^(?!\\d+$)[A-Za-z0-9]+$",
    QUANTITY: "^(?!0+$)[1-9][0-9]{0,6}$",
    SALERATE: "^(?!0{2,}(\\.0{1,2})?$)(0|[1-9][0-9]{0,6})(\\.[0-9]{1,2})?$",
    HSNCODE: "^[0-9]{4,8}$",
    GSTRATE: "^([0-9]|[1-9][0-9]|[0-9][0-9]*\\.[0-9]{0,2})$",
    DESIGNATION: "^(?=.*[A-Za-z])[A-Za-z0-9 ]+$",
    CITY: "^[A-Za-z\\s\\-]+$",
    EMAIL: "^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\\.[a-zA-Z]{2,}$",
    ITEMCODE: "^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$",
}


export const propertyList = {
    Full_NAME: {
        displayName: "Your Name",
        name: "Full_Name",
        type: SchemaTypes.String,
        required: true
    },
    PhoneNumber: {
        displayName: "Phone Number",
        name: "phoneNumber",
        type: SchemaTypes.PHONE_NUMBER,
        required: true
    },
    Password: {
        displayName: "Your Password",
        name: 'password',
        type: SchemaTypes.Password,
        required: true
    },
    userPassword: {
        displayName: "Password",
        name: "password",
        type: SchemaTypes.PASSWORD,
        required: true,
        helperText: "Please enter the Password"
    },
    userPhoneNumber: {
        displayName: "Phone No.",
        name: "phoneNumber",
        type: SchemaTypes.PHONE_NUMBER,
        required: true,
        helperText: "Please enter the valid Mobile Number."
    },
    firmName: {
        displayName: 'Firm Name',
        name: 'name',
        type: SchemaTypes.String,
        required: true,
        helperText: "Please enter the Firm Name",
    },
    firmId: {
        displayName: 'PAN',
        name: 'khID',
        type: SchemaTypes.KN_PAN,
        required: true,
        helperText: "Please enter the Firm ID in PAN card format (e.g., ABCDE1234F)."
    },
    Address: {
        displayName: 'Address',
        name: 'address',
        type: SchemaTypes.String,
        required: true,
        helperText: "Please enter the Your current Address ."
    },
    City: {
        displayName: 'City',
        name: 'city',
        type: SchemaTypes.CITY,
        required: true,
        helperText: "Please enter city name"
    },
    Pincode: {
        displayName: 'Pincode',
        name: 'pincode',
        type: SchemaTypes.PINCODE,
        required: true,
        helperText: "Please enter a 6-digit PIN code."
    },
    GSTIN: {
        displayName: 'GSTIN',
        name: 'gstin',
        type: SchemaTypes.KN_GSTIN,
        required: false,
        helperText: "Please enter the GSTIN in format (e.g. 11AAAAA1111A1Z1/A)."
    },
    userRole: {
        displayName: "User Role",
        name: "name",
        type: SchemaTypes.String,
        required: true,
        helperText: "Please enter the User Role"
    },
    userLevelDropdown: {
        name: "userLevel",
        type: SchemaTypes.USER_LEVEL_DROPDOWN,
        required: true,
        helperText: "Please enter the User Role"
    },
    partyName: {
        displayName: 'Party Name',
        name: 'name',
        type: SchemaTypes.String,
        required: true,
        helperText: "Please enter the Party Name"
    },
    partyEmail: {
        displayName: 'Party Email',
        name: 'email',
        type: SchemaTypes.EMAIL,
        required: false,
        helperText: "Please enter the valid Email ID"
    },
    restraurantEmail: {
        displayName: 'Restraurant Email',
        name: 'restaurantEmail',
        type: SchemaTypes.EMAIL,
        required: false,
        helperText: "Please enter the valid Email ID"
    },
    restraurantNumber: {
        displayName: 'Mobile Number',
        name: 'phoneNumber',
        type: SchemaTypes.PHONE_NUMBER,
        required: true,
        helperText: "Please enter the valid Mobile Number"
    },
    partyNumber: {
        displayName: 'Mobile Number',
        name: 'phoneNumber',
        type: SchemaTypes.PHONE_NUMBER,
        required: true,
        helperText: "Please enter the valid Mobile Number"
    },
    partyContactName: {
        displayName: 'Conatct Person',
        name: 'contactPerson',
        type: SchemaTypes.String,
        required: false,
        helperText: "Please enter the Contact Person Name"
    },
    partyGstNumber: {
        displayName: 'GSTIN',
        name: 'gstin',
        type: SchemaTypes.KN_GSTIN,
        required: false,
        helperText: "Please enter the GSTIN in format (e.g. 11AAAAA1111A1Z1/A)."
    },
    partyPANNumber: {
        displayName: 'PAN',
        name: 'panNumber',
        type: SchemaTypes.KN_PAN,
        required: false,
        helperText: "Please enter the PAN Number in format (e.g., ABCDE1234F)."
    },
    partyType: {
        displayName: 'Type',
        name: 'type',
        type: SchemaTypes.STATICDROPDOWN,
        required: true,
        dropDownList: [PARTY_VENDOR_TYPE, PARTY_CUSTOMER_TYPE],
        className: "mb-4"
    },
    partyDesignation: {
        displayName: 'Designation',
        name: 'designation',
        type: SchemaTypes.DESIGNATION,
        required: true,
        helperText: "Please enter the Designation"
    },
    shippingAddress: {
        displayName: 'Shipping Address',
        name: 'shippingAddress',
        type: SchemaTypes.TextArea,
        required: true,
        helperText: "Please enter the Shipping Address"
    },
    billingAddress: {
        displayName: 'Billing Address',
        name: 'billingAddress',
        type: SchemaTypes.TextArea,
        required: true,
        helperText: "Please enter the Billing Address"
    },

    name: {
        displayName: 'Name',
        name: 'name',
        type: SchemaTypes.String,
        required: true,
        helperText: 'Please enter the Person Name'
    },

    role: {
        displayName: 'Department',
        name: 'role',
        type: SchemaTypes.String,
        required: true,
        helperText: 'Please enter the Department'
    },

    phoneNumber: {
        displayName: 'Mobile Number',
        name: 'phoneNumber',
        type: SchemaTypes.PHONE_NUMBER,
        required: true,
        helperText: 'Please enter the valid Mobile Number'
    },

    email: {
        displayName: 'Email',
        name: 'email',
        type: SchemaTypes.EMAIL,
        required: true,
        helperText: 'Please enter valid Email ID'
    },

    ContactDesignation: {
        displayName: 'Designation',
        name: 'contactPersonDesignation',
        type: SchemaTypes.String,
        required: true,
        helperText: 'Please enter the Designation'
    },

    ContactGender: {
        displayName: 'Gender',
        name: 'ContactGender',
        type: SchemaTypes.STATICDROPDOWN,
        required: true,
        helperText: 'Please Select Gender',
        dropDownList: ['Male', 'Female', 'Other'],
        className: "mb-4",
    },

    productName: {
        displayName: "Product Name",
        name: "name",
        type: SchemaTypes.String,
        required: true,
        helperText: 'Please enter Product Name'
    },
    restraurantName: {
        displayName: "Restraurant Name",
        name: "restaurantName",
        type: SchemaTypes.String,
        required: true,
        helperText: 'Please enter Restraurant Name'
    },

    productUnit: {
        displayName: "Unit",
        name: "unit",
        type: SchemaTypes.STATICDROPDOWN,
        required: true,
        helperText: "Please Select the Unit",
        dropDownList: units,
        className: "mb-4"
    },
    productHsnCode: {
        displayName: "HSN Code",
        name: HSN_CODE_PROP,
        type: SchemaTypes.HSNCODE,
        required: true,
        helperText: "please enter the HSN Code with 4 to 8 digits."
    },
    productItemCode: {
        displayName: "Item Code",
        name: "productItemcode",
        type: SchemaTypes.ITEMCODE,
        required: true,
        helperText: "please enter the Item Code"
    },
    ProductgstRate: {
        displayName: "GST Rate",
        name: GST_RATE,
        type: SchemaTypes.GSTRATE,
        required: true,
        helperText: 'Please enter the product GST rate (e.g. 0, 2.5, 3, 18).'
    },
    productSaleRate: {
        displayName: "Default Sale Rate",
        name: "saleRate",
        type: SchemaTypes.SALERATE,
        required: true,
        helperText: 'Please enter the product Sales Rate'
    },
    productType: {
        displayName: 'Product Type',
        name: 'type',
        required: true,
        type: SchemaTypes.STATICDROPDOWN,
        dropDownList: [PRODUCT_TYPE_FINISHED, PRODUCT_TYPE_RAW, PRODUCT_TYPE_PROCESS],
    },
    sourceName: {
        displayName: "Enter Source Name",
        name: "name",
        type: SchemaTypes.String,
        required: true,
        helperText: 'Please enter the Name'
    },
    ContactName: {
        displayName: 'Contact Person',
        name: 'contactPerson',
        required: false,
        type: SchemaTypes.String,
        helperText: 'Please enter the Customer Name'
    },
    ContactNumber: {
        displayName: 'Mobile Number',
        name: 'contactPhone',
        required: true,
        type: SchemaTypes.PHONE_NUMBER,
        helperText: 'Please enter the valid Mobile Number'
    },
    ContactEmail: {
        displayName: 'Contact Email',
        name: 'contactEmail',
        required: false,
        type: SchemaTypes.EMAIL,
        helperText: 'Please enter the Customer Email ID '
    },
    ProductDropDown: {
        displayName: 'Product Inquiry ',
        name: 'ProductDropDown',
        required: false,
        type: SchemaTypes.PRODUCTDROPDOWN,
        helperText: 'Please Select the Product',
        Producttype: PRODUCT_TYPE_FINISHED
    },
    CustomerDropDown: {
        displayName: 'Customer DropDown ',
        name: 'CustomerDropDown',
        required: false,
        type: SchemaTypes.CUSTOMERDROPDOWN,
        helperText: 'Please Select the Customer',
    },
    EnquirySourceDropdown: {
        displayName: 'Source Of Enquiry',
        name: 'enquirySource',
        required: false,
        type: SchemaTypes.INQUIRYSOURCEDROPDOWN,
        helperText: 'select enquirySource'
    },
    quantity: {
        displayName: 'Quantity',
        name: 'units',
        required: false,
        type: SchemaTypes.QUANTITY,
        helperText: 'Quantity needed',
        disabled: true
    },
    FirmImage: {
        displayName: 'Firm LogoUrl',
        name: 'logoUrl',
        required: false,
        type: SchemaTypes.String,
        helperText: 'Please enter the Image Url',
    },
    description: {
        displayName: 'Description',
        name: 'description',
        required: false,
        type: SchemaTypes.String,
        helperText: 'Please Write the description',
    },
    ProductDescription: {
        displayName: 'Product Description',
        name: 'productdescription',
        required: false,
        type: SchemaTypes.String,
        helperText: 'Please Write the product description',
        disabled: true
    },
    gstDropdown: {
        displayName: 'GSTRate',
        name: 'GSTRate',
        type: SchemaTypes.STATICDROPDOWN,
        required: true,
        dropDownList: [],
        className: "mb-4",
    },
    addDesign: {
        displayName: 'Add Design files',
        name: 'designUrl',
        type: SchemaTypes.String,
        required: true,
    },
    PoNumber: {
        displayName: 'PO Number',
        name: 'poNumber',
        type: SchemaTypes.String,
        required: true,
        helperText: 'Please Enter the PO Number',
    },
}


export const restraurantProps = [
    {
        item: propertyList.restraurantName,
        attributes: {
            lg: 3
        }
    },
    {
        item: propertyList.restraurantEmail,
        inputMode: INPUT_TYPE_EMAIL,
        attributes: {
            lg: 4,
        }
    },
    {
        item: propertyList.restraurantNumber,
        inputMode: INPUT_TYPE_TEL,
        attributes: {
            lg: 5,
        }
    },
    {
        item: propertyList.Address,
        attributes: {
            lg: 9
        }
    },
    {
        item: propertyList.description,
        attributes: {
            lg: 12
        },
        extraProps: {
            multiline: true,
            rows: 3
        }
    },

]
