//REGISTER
export const POST_JWT_REGISTER = "/api/auth/signup";


//LOGIN
export const POST_JWT_LOGIN = "/api/auth/signin";


// My pages
export const GET_MY_INFORMATION = "/api/myInfo/get_one";
export const PUT_SAVE_MY_INFORMATION = "/api/myInfo/update";
export const GET_FIND_BROWSER_HISTORY = "/api/browseHistory/findBrowseHistoryById";
export const GET_FIND_DATA_PURCHASE_HISTORY = "/api/dataPurchaseHistory/finddataPurchaseHistoyById";
export const GET_FIND_BROWSER_HISTORY_ALL = "api/browseHistory/get_All";
export const GET_FIND_PASSED_TEST = "api/findPassedTestById";

// Test page

export const GET_ALL_QA = "/api/question/findAll";
export const GET_FIND_QUESTION = "/api/question/findQuestionById";

// Ship Data page
export const GET_ALL_SHIP = "/api/data/findAll";
export const GET_SHIP_BY_CATEGORY = "/api/data/findDataCategoryById";
export const GET_SHIP_DETAIL = "/api/data/get_one";





export const POST_FAKE_REGISTER = "/post-fake-register";
export const POST_FAKE_LOGIN = "/api/auth/signin";
// export const POST_FAKE_LOGIN = "/post-fake-login";
export const POST_FAKE_JWT_LOGIN = "/post-jwt-login";


export const POST_FAKE_PASSWORD_FORGET = "/fake-forget-pwd";
export const POST_FAKE_JWT_PASSWORD_FORGET = "/jwt-forget-pwd";
export const SOCIAL_LOGIN = "/social-login";

//PROFILE
export const POST_EDIT_JWT_PROFILE = "/api/myInfo/update";
export const POST_EDIT_PROFILE = "/post-fake-profile";
export const GET_MY_PROFILE = "/api/browseHistory/findBrowseHistoryById"

//CALENDER
export const GET_EVENTS = "/events";
export const GET_CATEGORIES = "/categories";
export const GET_UPCOMMINGEVENT = "/upcommingevents";
export const ADD_NEW_EVENT = "/add/event";
export const UPDATE_EVENT = "/update/event";
export const DELETE_EVENT = "/delete/event";

//Chat
export const GET_DIRECT_CONTACT = "/chat";
export const GET_MESSAGES = "/messages";
export const ADD_MESSAGE = "add/message";
export const GET_CHANNELS = "/channels";

//project list
export const GET_PROJECT_LIST = "/project/list";

//PRODUCTS
export const GET_PRODUCTS = "/products";
export const GET_SELLERS = "/sellers";
export const DELETE_PRODUCT = "/delete/product";

//Task
export const GET_TASK_LIST = "/task-list";
export const ADD_NEW_TASK = "/add/task";
export const UPDATE_TASK = "/update/task";
export const DELETE_TASK = "/delete/task";

//Crypto
export const GET_TRANSATION_LIST = "/transation-list";
export const GET_ORDRER_LIST = "/order-list";

//TicketsList
export const GET_TICKETS_LIST = "/tickets-list";
export const ADD_NEW_TICKET = "/add/ticket";
export const UPDATE_TICKET = "/update/ticket";
export const DELETE_TICKET = "/delete/ticket";

// Conatct
export const GET_CONTACTS = "/crmcontacts";
export const ADD_NEW_CONTACT = "/add/contact";
export const UPDATE_CONTACT = "/update/contact";
export const DELETE_CONTACT = "/delete/contact";

// Crm
export const GET_DEALS = "/deals";

// Lead
export const GET_LEADS = "/leads";
export const ADD_NEW_LEAD = "/add/lead";
export const UPDATE_LEAD = "/update/lead";
export const DELETE_LEAD = "/delete/lead";

// Companies
export const GET_COMPANIES = "/companies";
export const ADD_NEW_COMPANIES = "/add/companies";
export const UPDATE_COMPANIES = "/update/companies";
export const DELETE_COMPANIES = "/delete/companies";


//Invoice
export const GET_INVOICES = "/invoices";
export const ADD_NEW_INVOICE = "/add/invoice";
export const UPDATE_INVOICE = "/update/invoice";
export const DELETE_INVOICE = "/delete/invoice";

//Mailbox
export const GET_MAIL_DETAILS = "/mail";
export const DELETE_MAIL = "/delete/mail";

// ORDERS
export const GET_ORDERS = "/orders";
export const ADD_NEW_ORDER = "/add/order";
export const UPDATE_ORDER = "/update/order";
export const DELETE_ORDER = "/delete/order";

// CUSTOMERS
export const GET_CUSTOMERS = "/customers";
export const ADD_NEW_CUSTOMER = "/add/customer";
export const UPDATE_CUSTOMER = "/update/customer";
export const DELETE_CUSTOMER = "/delete/customer";

//studyfield
export const GET_ALL_STUDY_WITH_CATEGORY = "/api/campus/findAllBy";
export const GET_ALL_STUDY = "/api/campus/findAll";
export const GET_ALL_STUDY_BY_CATEGORY = "/api/campus/findCampusCategoryById";

//softwarefield
export const GET_ALL_SOFTWARE_WITH_CATEGORY = "/api/program/findAllBy";
export const GET_ALL_SOFTWARE_BY_CATEGORY = "/api/program/findProgramCategoryById";
export const GET_ALL_SOFTWARE = "/api/program/findAll";
export const GET_ALL_TOP_SOFTWARES = "/api/program/getTopPrograms";

// Users
export const GET_USERS = "/api/user/getAllUsers";
export const GET_USER = "/api/user/get";
export const ADD_NEW_USER = "/api/user/create";
export const UPDATE_USER = "/api/user/update";
export const DELETE_USER = "/api/user/delete";

// Notifications
export const GET_NOTIFICATIONS = "/api/notifications/get_All";
export const GET_NOTIFICATION = "/api/notifications/get";
export const ADD_NEW_NOTIFICATION = "/api/notifications/create";
export const UPDATE_NOTIFICATION = "/api/notifications/update";
export const DELETE_NOTIFICATION = "/api/notifications/delete";

// Programs
export const GET_PROGRAMS = "/api/program/get_All";
export const GET_PROGRAM = "/api/program/get_one";
export const ADD_NEW_PROGRAM = "/api/program/create";
export const UPDATE_PROGRAM = "/api/program/update";
export const DELETE_PROGRAM = "/api/program/delete";

// ProgramCategories
export const GET_PROGRAMCATEGORIES = "/api/program/category/get_All";
export const GET_PROGRAMCATEGORY = "/api/program/category/get_one";
export const ADD_NEW_PROGRAMCATEGORY = "/api/program/category/create";
export const UPDATE_PROGRAMCATEGORY = "/api/program/category/update";
export const DELETE_PROGRAMCATEGORY = "/api/program/category/delete";

//SUGGESTION
export const GET_SUGGESTIONS = "/api/suggestions/get_All";
export const GET_SUGGESTION = "/api/suggestions/get_one";
export const ADD_NEW_SUGGESTION = "/api/suggestions/create";
export const UPDATE_SUGGESTION = "/api/suggestions/update";
export const DELETE_SUGGESTION = "/api/suggestions/delete";

// Articles
export const GET_ARTICLES = "/api/article/get_All";
export const GET_ARTICLE = "/api/article/get_one";
export const ADD_NEW_ARTICLE = "/api/article/create";
export const UPDATE_ARTICLE = "/api/article/update";
export const DELETE_ARTICLE = "/api/article/delete";
export const GET_ARTICLE_FIND_TOP_USER = "/api/article/findTopUser";
export const GET_ARTICLEBYCATEGORYID = "/api/article/findArticleCategoryById";
// ArticleCategory
export const GET_ARTICLECATEGORIES = "/api/article/category/get_All";
export const GET_ARTICLECATEGORY = "/api/article/category/get_one";
export const ADD_NEW_ARTICLECATEGORY = "/api/article/category/create";
export const UPDATE_ARTICLECATEGORY = "/api/article/category/update";
export const DELETE_ARTICLECATEGORY = "/api/article/category/delete";

// Comments
export const GET_COMMENTS = "/api/comment/get_All";
export const GET_COMMENT = "/api/comment/getOneComment";
export const ADD_NEW_COMMENT = "/api/comment/create";
export const UPDATE_COMMENT = "/api/comment/update";
export const DELETE_COMMENT = "/api/comment/delete";

// Datas
export const GET_DATAS = "/api/data/get_All";
export const GET_DATA = "/api/data/get_one";
export const ADD_NEW_DATA = "/api/data/create";
export const UPDATE_DATA = "/api/data/update";
export const DELETE_DATA = "/api/data/delete";
export const GET_ALL_TOP_DATA = "/api/data/getTopDatas";

// DataCategories
export const GET_DATACATEGORIES = "/api/data/category/get_All";
export const GET_DATACATEGORY = "/api/data/category/get_one";
export const ADD_NEW_DATACATEGORY = "/api/data/category/create";
export const UPDATE_DATACATEGORY = "/api/data/category/update";
export const DELETE_DATACATEGORY = "/api/data/category/delete";


// Campuses
export const GET_CAMPUSES = "/api/campus/findAll";
export const GET_CAMPUS = "/api/campus/get_one";
export const ADD_NEW_CAMPUS = "/api/campus/create";
export const UPDATE_CAMPUS = "/api/campus/update";
export const DELETE_CAMPUS = "/api/campus/delete";

// CampusCategories
export const GET_CAMPUSCATEGORIES = "/api/campus/category/get_All";
export const GET_CAMPUSCATEGORY = "/api/campus/category/get_one";
export const ADD_NEW_CAMPUSCATEGORY = "/api/campus/category/create";
export const UPDATE_CAMPUSCATEGORY = "/api/campus/category/update";
export const DELETE_CAMPUSCATEGORY = "/api/campus/category/delete";

//Avatar
export const GET_AVATARS = "/api/avatar/get_All";
export const GET_AVATAR = "/api/avatar/get_one";
export const ADD_NEW_AVATAR = "/api/avatar/create";
export const UPDATE_AVATAR = "/api/avatar/update";
export const DELETE_AVATAR = "/api/avatar/delete";
export const DOWNLOAD_AVATAR ="/api/avatar/fileById";

// Questiones
export const GET_QUESTIONES = "/api/question/findAll";
export const GET_QUESTION = "/api/question/get_question";
export const ADD_NEW_QUESTION = "/api/question/create";
export const UPDATE_QUESTION = "/api/question/update";
export const DELETE_QUESTION = "/api/question/delete";

// Answers
export const GET_ANSWERS = "/api/answer/get_All";
export const GET_ANSWER = "/api/answer/get_one";
export const ADD_NEW_ANSWER = "/api/answer/create";
export const UPDATE_ANSWER = "/api/answer/update";
export const DELETE_ANSWER = "/api/answer/delete";