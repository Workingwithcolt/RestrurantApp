export const NUMBERS = "NUMBERS";

export const NEW_CUSTOMER = "newCustomer";

export const UPDAE_AND_NEW = 'updatedOrNew';
export const REMOVED = 'removed'

export const INQUIRY_RAW_MATERIALS = "inquiryRawMaterial"

export const ADMIN_USER_LEVEL_ID = "AdminLevelID";
export const ADMIN_USER_LEVEL_NAME = "Admin";

export const USER_USER_LEVEL_ID = "UserLevelID";
export const USER_USER_LEVEL_NAME = "User";

export const MODERATOR_LEVEL_ID = "ModeratorLevelID";
export const MODERATOR_LEVEL_NAME = "Moderator";

export const UPDATE_ON_PARTY = "UpdateOnParty";
export const PARTIES = "Parties";

export const USERS = "Users";
export const UPDATE_ON_USER = "UpdateOnUser";

export const KHATAVANI = "Khatavani";
export const UPDATE_ON_KHATAVANI = "UpdateOnKhatavani";

export const PRODUCTS = 'Products';
export const UPDATE_ON_PRODUCT = "UpdateOnUser";

export const RESTAURENT = "restaurent";
export const UPDATE_ON_RESTAURENT = "UpdateOnRestaurent"

export const USERROLE = "UserRoles";
export const UPDATE_ON_USERROLE = "UpdateOnUser";

export const CUSTOMER = "Customer";
export const UPDATE_ON_CUSTOMER = "UpdateOnCustomer";

export const VENDOR = "Vendor";
export const UPDATE_ON_VENDOR = "UpdateOnVendor";

export const INQUIRY = "Inquiry";
export const UPDATE_ON_INQUIRY = "UpdateOnInquiry";


export const INQUIRY_SOURCE = "InquirySource";
export const UPDATE_ON_INQUIRY_SOURCE = "UpdateOnInquirySource";

export const CONTACTS = "Contacts";
export const UPDATE_ON_CONTACTS = "UpdateOnContacts";

export const NEW_PRODUCTS = "/Products";




export const NEW_RESTRAURANT = "/newRestraurant";
export const RESTRAURANTS = "/"
export const EDIT_RESTRAURANT = "/editRestraurant"

// Inquiry Status
export const ONBOARDING = "onboard";
export const OPEN = "open";
export const CLOSED = "closed";
export const QUOTATION_PENDING = "quotation Needed"
export const QUOTATION_READY = "quotation Ready"
export const REVISE_QUOTATION = "revise qotation"
export const QUOTED = "quoted"
export const CONVERTED = "converted"
export const PRODUCTION = "production"
export const DISPATCH = "dispatch"
export const INQUIRY_RESOURCE_TAG = "inquiryresource"
export const INQUIRY_STORE_TAG = "inquirystore"

export const CATEGORIES = {
  [OPEN]: {
    name: 'New Inquiry',
    color: 'primary.main',
    btnText: 'On Board',
    nextStatus: ONBOARDING
  },
  [ONBOARDING]: {
    name: 'On Board',
    color: 'secondary.main',
    btnText: 'Quotation Sent',
    nextStatus: QUOTATION_PENDING
  },
  [QUOTATION_PENDING]: {
    name: 'Quotation Needed',
    color: 'warning.main',
    btnText: 'Quotation Ready',
    nextStatus: QUOTATION_READY
  },
  [QUOTATION_READY]: {
    name: 'Quotation Ready',
    color: 'warning.main',
    btnText: 'Quotation Sent',
    nextStatus: QUOTED
  },
  [QUOTED]: {
    name: 'Quoted',
    color: 'warning.main',
    btnText: 'Converted',
    nextStatus: CONVERTED
  },
  [CONVERTED]: {
    name: 'Converted',
    color: 'success.main',
    btnText: 'In Production',
    nextStatus: PRODUCTION
  },
  [PRODUCTION]: {
    name: 'Production',
    color: 'info.main',
    btnText: 'Production Ready',
    nextStatus: DISPATCH
  },
  [DISPATCH]: {
    name: 'Dispatch',
    color: 'success.main',
    btnText: 'Dispatched',
    nextStatus: CLOSED
  },
  [CLOSED]: {
    name: 'Closed',
    color: 'error.main',
    btnText: 'All Done'
  },
  [REVISE_QUOTATION]: {
    name: 'Revise Quotation',
    color: 'warning.main',
    btnText: 'Revise Quotation',
    nextStatus: QUOTATION_PENDING
  },
};

// Order Status
export const INACTIVE = "inactive";
export const ACTIVE = "active";
export const COMPLETED = "completed";

// Order Category
export const ORDER_CATEGORY = {
  [INACTIVE]: {
    name: 'Inactive',
    color: 'secondary.main',
    nextStatus: ACTIVE
  },
  [ACTIVE]: {
    name: 'Active',
    color: 'warning.main',
    nextStatus: COMPLETED
  },
  [COMPLETED]: {
    name: 'Completed',
    color: 'success.main',
  },
}

export const COLOR_RED = '#E43131';
const COLOR_YELLOW = '#D69B03';
const COLOR_TEAL = '#067279';
const COLOR_PURPLE = '#3E008D';
export const PRIMARY_COLOR = '#1976d2';
export const SECONDARY_COLOR = '#fff';
export const GREEN_BUTTON = '#01AF5C';
export const BLUE_BUTTON = '#0578BC';
export const SUBTEXT_COLOR = '#0578BC';
export const TITLE_COLOR = '#004D7C';
export const TABLE_HEADER_COLOR = '#2887BF'
export const COLOR_GREEN = "#00FF00";
export const ADD_PROPERTY_GROUP_COLOR = "#EBEBEB"
export const DEFAULT_TEXT_COLOR = '#212121';
export const RED_BUTTON = '#E43131'

export const INQ_OVERDUE = "overdue";
export const INQ_TODAY = "today";
export const INQ_OPEN = "open";
export const INQ_ONTRACK = "ontrack"
export const INQ_CLOSED = "closed"
export const INQ_REJECTED = "rejected";

export const STATUS_UPDATED = "STATUS_CHANGE";
export const COMMENT_UPDATED = "COMMENT_CHANGE";

export const SESSION_STORAGE_KEY_FIRM = "selectedFirm";
export const SESSION_STORAGE_FIRM_LIST = "UserFirmList";

export const CUSTOMER_DROPDOWN = 'CustomerDropDown';
export const PRODUCTS_DROPDOWN = 'productsDropdown';
export const INQUIRY_SOURCE_DROPDOWN = 'inquirySourceDropdown';
export const USER_ROLES_DROPDOWN = 'userRolesDropdown';
export const ADD_PROPERTY = "addProperty";
export const VENDOR_DROPDOWN = 'VendorDropDown';

export const STATUS_OPTIONS = {
  [INQ_OVERDUE]: COLOR_RED,
  [INQ_TODAY]: COLOR_YELLOW,
  [INQ_OPEN]: COLOR_TEAL,
  [INQ_ONTRACK]: COLOR_PURPLE,
  [INQ_REJECTED]: COLOR_RED,
  [INQ_CLOSED]: COLOR_GREEN,
};

export const REPORT_CARD_GRADIENT = {
  [OPEN]: {
    name:'Open Inquiry',
    gradiantColor:'linear-gradient(135deg, #FFB6C1 30%, #FFA07A 90%)',
    detailText:(data)=>data.length
  },
  [CONVERTED]: {
    name:'Overall Conversion',
    gradiantColor: 'linear-gradient(120deg, #00CED1 30%, #4682B4 100%)',
    detailText:(data)=>data.length
  },
  [QUOTED]: {
    name:'Quoted Inquiry',
    gradiantColor: 'linear-gradient(150deg, #1E90FF 40%, #00BFFF 100%)',
    detailText:(data)=>data.length
  },
};

export const inquiryReportColors=['#FF5733', '#33FF57', '#3357FF']
export const ReasonWiseRejectedInquiryReportColors=['#FF5733', '#33FF57', '#3357FF'];
export const sourceWiseReportColors=['#FF5733', '#33FF57', '#3357FF'];

export const ADD_PROPS = "Add_Property";
export const REMOVE_PROPS = "Remove_Property";
export const AUTO_FILL = "AUTO_FILL"

export const NA = "NA"
export const STRING = "string"
export const EMPTY = ""
export const NOS = "Nos"

export const drawerWidth = 240;

export const commonFontSize = '0.875rem';
export const regularFontSize = '1rem';
export const smallFontSize = '0.9rem';
export const largeFontSize = '1.125rem';
export const extraLargeFontSize = '2rem'

export const commonFontWeight = '700'

export const STATE_UPDATE_RESOURCE_ID = "StateUpdate";
export const BATCH_STATE_ACCOUNT_ID = 'BatchStateAccountID';

export const INPROGRESS_INQUIRY_RESOURCE_ID = "inprogressInquiryId";
export const INPROGRESS_INQUIRY = "Inprogress Inquiry";

export const INQUIRY_STATUS_RESOURCES = [
  { id: INPROGRESS_INQUIRY_RESOURCE_ID, name: INPROGRESS_INQUIRY, tag: INQUIRY_RESOURCE_TAG, unit: NUMBERS, known: true, entityPublicAccess: true },
]

export const INQUIRY_STORE_ACCOUNT_ID = "InquiryStoreId";
export const INQUIRY_STORE_ACCOUNT = "Inquiry Store";

export const INQUIRY_STORE = { id: INQUIRY_STORE_ACCOUNT_ID, name: INQUIRY_STORE_ACCOUNT, tag: INQUIRY_STORE_TAG, known: true, entityPublicAccess: true }

export const COMMON_BATCH = "common";
export const INQUIRY_VOUCHER_TYPE = "Referance";

export const INQUIRY_PRODUCTS = 'Inquiry_products';

export const RAW_MATERIAL = "RawMaterial";

export const defaultSources = [
  { id: 'e2f5c689-08b3-457a-94a2-4b3a8a54d816', name: 'Indiamart', tag: INQUIRY_SOURCE },
  { id: 'c983c38c-1e80-4d6e-933f-4bcd54b42a3d', name: 'JustDial', tag: INQUIRY_SOURCE },
  { id: 'b70e71db-ec49-4822-b3e6-54b23b5096a1', name: 'TradeIndia', tag: INQUIRY_SOURCE },
  { id: '09825f3b-f3d8-495b-88c4-d14e2fa3d265', name: 'Google', tag: INQUIRY_SOURCE },
  { id: '5c4cf073-287f-47a4-b4c8-4ef7f891bb6b', name: 'Facebook', tag: INQUIRY_SOURCE },
  { id: '0cf01b4f-fd97-4112-9627-27a815dcf249', name: 'Referance', tag: INQUIRY_SOURCE },
  { id: 'c8f8a2b4-d5cb-44a5-88f7-7bba2bb0f6b1', name: 'Email', tag: INQUIRY_SOURCE }
];

export const AccountsToCreate = [INQUIRY_STORE, ...defaultSources]

export const DELETE_FIELD = 'delete_this_field_from_database';

export const PRODUCT_TYPE_FINISHED = "Finished Goods"
export const PRODUCT_TYPE_RAW = "Raw Material"
export const PRODUCT_TYPE_PROCESS = "Work Process"