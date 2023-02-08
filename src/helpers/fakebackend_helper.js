import { APIClient } from "./api_helper";
import * as url from "./url_helper";

const api = new APIClient();
// Gets the logged in user data from local session



// Login Method
export const postJwtLogin = data => api.create(url.POST_JWT_LOGIN, data);

// Register Method
export const postJwtRegister = (url, data) => {
  return api.create(url, data)
    .catch(err => {
      var message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message = "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};




// My page
export const getGetMyInformation = id => api.get(url.GET_MY_INFORMATION + '/' + id);
export const putSaveMyInformation = (id, data) => api.update(url.PUT_SAVE_MY_INFORMATION + '/' + id, data);
export const getFindBrowseHistoriesById = id => api.get(url.GET_FIND_BROWSER_HISTORY + '/' + id);
export const getFindDataPurchaseHistoyById = id => api.get(url.GET_FIND_DATA_PURCHASE_HISTORY + '/' + id);
export const getBrowserHistoriesAll = ()=> api.get(url.GET_FIND_BROWSER_HISTORY_ALL);
export const getPassedTestsById = id => api.get(url.GET_FIND_PASSED_TEST+'/'+id);

// Test page
export const getGetAllQA = () => api.get(url.GET_ALL_QA);
export const getGetQuestionById = id => api.get(url.GET_FIND_QUESTION + '/' + id);

// Ship Data page
export const getGetAllShipData = () => api.get(url.GET_ALL_SHIP);
export const getGetShipCategoryById = id => api.get(url.GET_SHIP_BY_CATEGORY + '/' + id);
export const getGetShipDetail = id => api.get(url.GET_SHIP_DETAIL + '/' + id);


/**
   * Returns the authenticated user
   */
export const getAuthenticatedUser = () => {
  if (!localStorage.getItem("authUser")) return null;
  return JSON.parse(localStorage.getItem("authUser"));
};

export const updateAuthenticatedUser = (user) => {
  localStorage.setItem("authUser", JSON.stringify(user));
};


// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
export const postFakeRegister = (data) => {
  return api.create(url.POST_FAKE_REGISTER, data)
    .catch(err => {
      let message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message = "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};

// Login Method
export const postFakeLogin = data => api.create(url.POST_FAKE_LOGIN, data);

// postForgetPwd
export const postFakeForgetPwd = data => api.create(url.POST_FAKE_PASSWORD_FORGET, data);

// Edit profile
export const postJwtProfile = data => api.update(url.POST_EDIT_JWT_PROFILE + "/" + data.id, data);

// Browser My Inoformation

export const getJwtMyProfile = data => api.get(url.GET_MY_PROFILE + "/" + data.id, data);

export const postFakeProfile = data => api.create(url.POST_EDIT_PROFILE, data);




// postForgetPwd
export const postJwtForgetPwd = data => api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

// postSocialLogin
export const postSocialLogin = data => api.create(url.SOCIAL_LOGIN, data);


// get Events
export const getEvents = () => api.get(url.GET_EVENTS);

// get Events
export const getCategories = () => api.get(url.GET_CATEGORIES);

// get Upcomming Events
export const getUpCommingEvent = () => api.get(url.GET_UPCOMMINGEVENT);

// add Events
export const addNewEvent = event => api.create(url.ADD_NEW_EVENT, event);

// update Event
export const updateEvent = event => api.update(url.UPDATE_EVENT, event);

// delete Event
export const deleteEvent = event => api.delete(url.DELETE_EVENT, { headers: { event } });

// get Contact
export const getDirectContact = () => api.get(url.GET_DIRECT_CONTACT);

// get messages
export const getMessages = roomId => api.get(`${url.GET_MESSAGES}/${roomId}`, { params: { roomId } });

//add message
export const addMessage = message => api.create(url.ADD_MESSAGE, message);

// get Channels
export const getChannels = () => api.get(url.GET_CHANNELS);

//project list 
export const getProjectList = () => api.get(url.GET_PROJECT_LIST);
//Ecommerce

// get Products
export const getProducts = () => api.get(url.GET_PRODUCTS);
// get Orders
export const getOrders = () => api.get(url.GET_ORDERS);

// add order
export const addNewOrder = order => api.create(url.ADD_NEW_ORDER, order);

// update order
export const updateOrder = order => api.update(url.UPDATE_ORDER, order);

// delete order
export const deleteOrder = order => api.delete(url.DELETE_ORDER, { headers: { order } });

// get Sellers
export const getSellers = () => api.get(url.GET_SELLERS);


// get Task
export const getTaskList = () => api.get(url.GET_TASK_LIST);

// add Task
export const addNewTask = task => api.create(url.ADD_NEW_TASK, task);

// update Task
export const updateTask = task => api.update(url.UPDATE_TASK, task);

// delete Task
export const deleteTask = task => api.delete(url.DELETE_TASK, { headers: { task } });


// get Customers
export const getCustomers = () => api.get(url.GET_CUSTOMERS);

// add CUSTOMER
export const addNewCustomer = customer => api.create(url.ADD_NEW_CUSTOMER, customer);

// update CUSTOMER
export const updateCustomer = customer => api.update(url.UPDATE_CUSTOMER, customer);

// delete CUSTOMER
export const deleteCustomer = customer => api.delete(url.DELETE_CUSTOMER, { headers: { customer } });

//Crypto
export const getTransationList = () => api.get(url.GET_TRANSATION_LIST);
export const getOrderList = () => api.get(url.GET_ORDRER_LIST);


// Support Tickets 
export const getTicketsList = () => api.get(url.GET_TICKETS_LIST);

// add Support Tickets 
export const addNewTicket = ticket => api.create(url.ADD_NEW_TICKET, ticket);

// update Support Tickets 
export const updateTicket = ticket => api.update(url.UPDATE_TICKET, ticket);

// delete Support Tickets 
export const deleteTicket = ticket => api.delete(url.DELETE_TICKET, { headers: { ticket } });

//Crm

// get Contacts
export const getContacts = () => api.get(url.GET_CONTACTS);

// add Contact
export const addNewContact = contact => api.create(url.ADD_NEW_CONTACT, contact);

// update Contact
export const updateContact = contact => api.update(url.UPDATE_CONTACT, contact);

// delete Contact
export const deleteContact = contact => api.delete(url.DELETE_CONTACT, { headers: { contact } });

// get Companies
export const getCompanies = () => api.get(url.GET_COMPANIES);

// add Companies
export const addNewCompanies = company => api.create(url.ADD_NEW_COMPANIES, company);

// update Companies
export const updateCompanies = company => api.update(url.UPDATE_COMPANIES, company);

// delete Companies
export const deleteCompanies = company => api.delete(url.DELETE_COMPANIES, { headers: { company } });

// get Deals
export const getDeals = () => api.get(url.GET_DEALS);

// get leads
export const getLeads = () => api.get(url.GET_LEADS);

// add Lead
export const addNewLead = lead => api.create(url.ADD_NEW_LEAD, lead);

// update Lead
export const updateLead = lead => api.update(url.UPDATE_LEAD, lead);

// delete Lead
export const deleteLead = lead => api.delete(url.DELETE_LEAD, { headers: { lead } });


//get invoice
export const getInvoices = () => api.get(url.GET_INVOICES);

// add Invoice
export const addNewInvoice = invoice => api.create(url.ADD_NEW_INVOICE, invoice);

// update Invoice
export const updateInvoice = invoice => api.update(url.UPDATE_INVOICE, invoice);

// delete Invoice
export const deleteInvoice = invoice => api.delete(url.DELETE_INVOICE, { headers: { invoice } });

//get mail
export const getMailDetails = () => api.get(url.GET_MAIL_DETAILS);

//delete mail
export const deleteMail = forId => api.delete(url.DELETE_MAIL, { headers: { forId } });

//product
export const deleteProducts = product => api.delete(url.DELETE_PRODUCT, { headers: { product } });

//studyfield
export const getStudy = study => api.get(url.GET_STUDY);

//softwarefield
export const getAllSoftware = () => api.get(url.GET_ALL_SOFTWARE);
export const getAllSoftwareWithCategory = () => api.get(url.GET_ALL_SOFTWARE_WITH_CATEGORY);
export const getAllSoftwareByCategory = (category) => api.get(url.GET_ALL_SOFTWARE_BY_CATEGORY + '/' + category);

// export const getTopSoftwares = () => api.get(url.GET_ALL_TOP_SOFTWARES);

// get Users
export const getUsers = () => api.get(url.GET_USERS);
export const getUser = (id) => api.get(url.GET_USER + '/' + id);

// add USER
export const addNewUser = customer => api.create(url.ADD_NEW_USER, customer);

// update USER
export const updateOneUser = (id, customer) => api.update(url.UPDATE_USER + '/' + id, customer);

// delete USER
export const deleteUser = id => api.delete(url.DELETE_USER + '/' + id);


// ----------- Notificaiton --------------

// get Notifications
export const getNotifications = () => api.get(url.GET_NOTIFICATIONS);

export const getNotification = (id) => api.get(url.GET_NOTIFICATION + '/' + id);

// add NOTIFICATION
export const addNewNotification = customer => api.create(url.ADD_NEW_NOTIFICATION, customer);

// update NOTIFICATION
export const updateOneNotification = (id, customer) => api.update(url.UPDATE_NOTIFICATION + '/' + id, customer);

// delete NOTIFICATION
export const deleteNotification = id => api.delete(url.DELETE_NOTIFICATION + '/' + id);

//-----------Program-----------
// get Programs
export const getPrograms = () => api.get(url.GET_PROGRAMS);

export const getProgram = (id) => api.get(url.GET_PROGRAM + '/' + id);

// add PROGRAM
export const addNewProgram = customer => api.create(url.ADD_NEW_PROGRAM, customer);

// update PROGRAM
export const updateOneProgram = (id, customer) => api.update(url.UPDATE_PROGRAM + '/' + id, customer);

// delete PROGRAM
export const deleteProgram = id => api.delete(url.DELETE_PROGRAM + '/' + id);

//-----------ProgramCategory-----------
// get ProgramCategories
export const getProgramCategories = () => api.get(url.GET_PROGRAMCATEGORIES);

export const getProgramCategory = (id) => api.get(url.GET_PROGRAMCATEGORY + '/' + id);

// add PROGRAMCATEGORY
export const addNewProgramCategory = customer => api.create(url.ADD_NEW_PROGRAMCATEGORY, customer);

// update PROGRAMCATEGORY
export const updateOneProgramCategory = (id, customer) => api.update(url.UPDATE_PROGRAMCATEGORY + '/' + id, customer);

// delete PROGRAMCATEGORY
export const deleteProgramCategory = id => api.delete(url.DELETE_PROGRAMCATEGORY + '/' + id);

//---------------Suggestion-----------//

// get Suggestions
export const getSuggestions = () => api.get(url.GET_SUGGESTIONS);

export const getSuggestion = (id) => api.get(url.GET_SUGGESTION + '/' + id);

// add SUGGESTION
export const addNewSuggestion = customer => api.create(url.ADD_NEW_SUGGESTION, customer);

// update SUGGESTION
export const updateOneSuggestion = (id, customer) => api.update(url.UPDATE_SUGGESTION + '/' + id, customer);

// delete SUGGESTION
export const deleteSuggestion = id => api.delete(url.DELETE_SUGGESTION + '/' + id);

// ----------- Article --------------

// get Articles
export const getArticles = () => api.get(url.GET_ARTICLES);
export const getArticle = (id) => api.get(url.GET_ARTICLE + '/' + id);

// add ARTICLE
export const addNewArticle = customer => api.create(url.ADD_NEW_ARTICLE, customer);

// update ARTICLE
export const updateOneArticle = (id, customer) => api.update(url.UPDATE_ARTICLE + '/' + id, customer);

// delete ARTICLE
export const deleteArticle = id => api.delete(url.DELETE_ARTICLE + '/' + id);

// ----------- ArticleCategory --------------

// get ArticleCategories
export const getArticleCategories = () => api.get(url.GET_ARTICLECATEGORIES);

export const getArticleCategory = (id) => api.get(url.GET_ARTICLECATEGORY + '/' + id);

// add ARTICLECATEGORY
export const addNewArticleCategory = customer => api.create(url.ADD_NEW_ARTICLECATEGORY, customer);

// update ARTICLECATEGORY
export const updateOneArticleCategory = (id, customer) => api.update(url.UPDATE_ARTICLECATEGORY + '/' + id, customer);

// delete ARTICLECATEGORY
export const deleteArticleCategory = id => api.delete(url.DELETE_ARTICLECATEGORY + '/' + id);

//-----------Comment-----------
// get Comments
export const getComments = () => api.get(url.GET_COMMENTS);

export const getComment = (id) => api.get(url.GET_COMMENT + '/' + id);

// add COMMENT
export const addNewComment = customer => api.create(url.ADD_NEW_COMMENT, customer);

// update COMMENT
export const updateOneComment = (id, customer) => api.update(url.UPDATE_COMMENT + '/' + id, customer);

// delete COMMENT
export const deleteComment = id => api.delete(url.DELETE_COMMENT + '/' + id);

//-----------Avatar-----------
// get Avatars
export const getAvatars = () => api.get(url.GET_AVATARS);

export const getAvatar = (id) => api.get(url.GET_AVATAR + '/' + id);

// add AVATAR
export const addNewAvatar = customer => api.postFormData(url.ADD_NEW_AVATAR, customer);

// update AVATAR
export const updateOneAvatar = (id, customer) => api.postFormData(url.UPDATE_AVATAR + '/' + id, customer);

// delete AVATAR
export const deleteAvatar = id => api.delete(url.DELETE_AVATAR + '/' + id);

//-----------Data-----------
// get Datas
export const getDatas = () => api.get(url.GET_DATAS);

export const getData = (id) => api.get(url.GET_DATA + '/' + id);

// add DATA
export const addNewData = customer => api.create(url.ADD_NEW_DATA, customer);

// update DATA
export const updateOneData = (id, customer) => api.update(url.UPDATE_DATA + '/' + id, customer);

// delete DATA
export const deleteData = id => api.delete(url.DELETE_DATA + '/' + id);

//-----------DataCategory-----------
// get DataCategories
export const getDataCategories = () => api.get(url.GET_DATACATEGORIES);

export const getDataCategory = (id) => api.get(url.GET_DATACATEGORY + '/' + id);

// add DATACATEGORY
export const addNewDataCategory = customer => api.create(url.ADD_NEW_DATACATEGORY, customer);

// update DATACATEGORY
export const updateOneDataCategory = (id, customer) => api.update(url.UPDATE_DATACATEGORY + '/' + id, customer);

// delete DATACATEGORY
export const deleteDataCategory = id => api.delete(url.DELETE_DATACATEGORY + '/' + id);


// get Campuses
export const getCampuses = () => api.get(url.GET_CAMPUSES);
export const getCampus = (id) => api.get(url.GET_CAMPUS + '/' + id);

// add CAMPUS
export const addNewCampus = customer => api.create(url.ADD_NEW_CAMPUS, customer);

// update CAMPUS
export const updateOneCampus = (id, customer) => api.update(url.UPDATE_CAMPUS + '/' + id, customer);

// delete CAMPUS
export const deleteCampus = id => api.delete(url.DELETE_CAMPUS + '/' + id);

// ----------- CampusCategory --------------

// get CampusCategories
export const getCampusCategories = () => api.get(url.GET_CAMPUSCATEGORIES);

export const getCampusCategory = (id) => api.get(url.GET_CAMPUSCATEGORY + '/' + id);

// add CAMPUSCATEGORY
export const addNewCampusCategory = customer => api.create(url.ADD_NEW_CAMPUSCATEGORY, customer);

// update CAMPUSCATEGORY
export const updateOneCampusCategory = (id, customer) => api.update(url.UPDATE_CAMPUSCATEGORY + '/' + id, customer);

// delete CAMPUSCATEGORY
export const deleteCampusCategory = id => api.delete(url.DELETE_CAMPUSCATEGORY + '/' + id);

//--------Question--------
// get Questiones
export const getQuestiones = () => api.get(url.GET_QUESTIONES);
export const getQuestion = (id) => api.get(url.GET_QUESTION + '/' + id);

// add QUESTION
export const addNewQuestion = customer => api.create(url.ADD_NEW_QUESTION, customer);

// update QUESTION
export const updateOneQuestion = (id, customer) => api.update(url.UPDATE_QUESTION + '/' + id, customer);

// delete QUESTION
export const deleteQuestion = id => api.delete(url.DELETE_QUESTION + '/' + id);

// ----------- Answer --------------

// get Answers
export const getAnswers = () => api.get(url.GET_ANSWERS);

export const getAnswer = (id) => api.get(url.GET_ANSWER + '/' + id);

// add ANSWER
export const addNewAnswer = customer => api.create(url.ADD_NEW_ANSWER, customer);

// update ANSWER
export const updateOneAnswer = (id, customer) => api.update(url.UPDATE_ANSWER + '/' + id, customer);

// delete ANSWER
export const deleteAnswer = id => api.delete(url.DELETE_ANSWER + '/' + id);