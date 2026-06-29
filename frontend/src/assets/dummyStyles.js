// assets/dummyStyles.js

export const dashboardStyles = {
  // Layout styles
  container: "min-h-screen p-4 md:p-6",

  // Header styles
  headerContainer: "bg-gradient-to-r from-slate-900 to-slate-800 backdrop-blur-lg rounded-3xl p-6 mb-8 shadow-lg border border-slate-700",
  headerContent: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8",
  headerTitle: "text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent",
  headerSubtitle: "text-slate-400",

  // Button styles
  addButton: "flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition-all shadow hover:shadow-md font-medium",

  // Time frame selector styles
  timeFrameContainer: "flex justify-end mt-4",
  timeFrameWrapper: "flex gap-0 bg-slate-900 p-1 -mx-5 rounded-xl border border-slate-700",
  timeFrameButton: (isActive) =>
    `px-2.5 py-2 text-sm rounded-lg transition-all ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-400 hover:bg-slate-800"
    }`,

  // Summary cards grid
  summaryGrid: "grid grid-cols-1 lg:-mx-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5 mb-8",

  // Financial card styles
  balanceBadge: "bg-blue-900 text-blue-300 px-2 py-1 rounded-lg text-xs",
  expenseBadge: "bg-orange-900 text-orange-300 px-1 py-1 rounded-lg text-xs",

  // Gauge container styles
  gaugeGrid: "grid grid-cols-1 -mx-5 xl:-mx-5 md:grid-cols-3 md:gap-13 lg:gap-3 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8",

  // Pie chart container styles
  pieChartContainer: "hidden md:block bg-slate-900 lg:-mx-5.5 md:-mx-4 lg:p-1 xl:-mx-3 rounded-xl p-5 shadow-sm border border-slate-700 relative overflow-hidden mb-8",
  pieChartHeader: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3",
  pieChartTitle: "text-xl lg:pt-3 xl:pl-3 font-bold text-slate-100 mb-5 flex items-center gap-3",
  pieChartSubtitle: "text-sm lg:text-center xl:text-start xl:pl-3 text-slate-400 mb-3",
  pieChartHeight: "h-90 xl:h-80",

  // Pie chart tooltip styles
  tooltipContent: {
    backgroundColor: "rgba(15,23,42,0.95)",
    border: "1px solid #334155",
    borderRadius: "0.75rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    padding: "12px",
    color: "#f8fafc",
  },
  tooltipItem: { fontWeight: 400 },

  // Legend styles
  legendWrapper: { paddingTop: 8 },
  legendText: "text-sm font-medium text-slate-300",

  // Income/Expense lists grid
  listsGrid: "grid grid-cols-1 gap-6",

  // List container styles
  listContainer: "bg-slate-900 rounded-2xl lg:p-5 md:p-6 -mx-8 md:-mx-3 shadow-sm border border-slate-700",
  listHeader: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3",
  listTitle: "text-xl font-bold text-slate-100 md:mt-3 mt-3 flex items-center gap-3",
  listSubtitle: "text-sm text-slate-400 font-normal",

  // Record count badges
  incomeCountBadge: "text-sm bg-blue-900 px-2 mx-2 text-blue-300 md:mx-2 md:mt-2 py-1 rounded-full",
  expenseCountBadge: "text-sm bg-blue-900 text-blue-300 px-2 mx-2 md:mx-2 md:mt-2 py-1 rounded-full",

  // Transaction item styles
  transactionList: "space-y-3",
  incomeTransactionItem: "flex items-center px-2 mx-2 my-2 md:p-4 md:mx-2 lg:px-3 justify-between p-3 bg-slate-800 rounded-lg",
  expenseTransactionItem: "flex items-center justify-between mx-1 p-3 lg:p-3 md:p-4 md:mx-2 bg-slate-800 rounded-lg",

  // Transaction icon container
  incomeIconContainer: "p-2 bg-blue-900 rounded-lg",
  expenseIconContainer: "p-2 bg-blue-900 rounded-lg",

  // Transaction content
  transactionContent: "flex items-center lg:gap-3 md:gap-3 gap-1",
  transactionDescription: "font-medium text-slate-100",
  transactionCategory: "text-sm text-slate-400",
  transactionAmount: "text-right",
  incomeAmount: "font-bold text-blue-400",
  expenseAmount: "font-bold text-blue-400",
  transactionDate: "text-sm text-slate-400",

  // Empty state styles
  emptyState: "text-center py-8",
  emptyIconContainer: (color) => `w-16 h-16 mx-auto mb-4 rounded-full ${color} flex items-center justify-center`,
  emptyText: "text-slate-400 font-medium",

  // View all button styles
  viewAllContainer: "pt-4 border-t border-slate-700",
  viewAllButton: "w-full flex items-center justify-center gap-2 py-3 text-blue-400 font-medium hover:bg-slate-800 rounded-xl transition-colors",

  // Icon container styles
  iconContainer: (color) => `p-2 ${color} rounded-lg`,

  // Specific icon colors
  walletIconContainer: "p-2 bg-blue-900 rounded-lg",
  arrowDownIconContainer: "p-2 bg-orange-900 rounded-lg",
  piggyBankIconContainer: "p-2 bg-violet-900 rounded-lg",
};

// Additional styles for financial trends
export const trendStyles = {
  positive: "text-orange-400",
  negative: "text-green-400",
  positiveRate: "bg-blue-900 text-blue-300",
  negativeRate: "bg-red-900 text-red-300",
};

// Chart specific styles
export const chartStyles = {
  pieChart: "lg:-px-5 lg:text-xs xl:text-xl",
};

// Income Page Styles
export const incomeStyles = {
  // Layout
  wrapper: "space-y-4 md:space-y-6 p-3 md:p-4 max-w-7xl mx-auto",

  headerContainer: "bg-slate-900 rounded-lg md:rounded-xl p-4 -mx-7 lg:-mx-7 overflow-x-hidden md:p-6 mb-6 md:mb-8 shadow border border-slate-700",

  header: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6",

  headerTitle: "text-xl md:text-2xl lg:text-3xl font-bold text-slate-100",

  headerSubtitle: "text-slate-400 mt-1 text-sm md:text-base",

  addButton:
    "flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl transition-all shadow-md hover:shadow-lg font-medium text-sm md:text-base",

  // Summary Cards
  summaryGrid:
    "grid grid-cols-1 -mx-4 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5",

  // Chart
  chartContainer:
    "hidden md:block -mx-7 bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-700",

  chartTitle:
    "text-lg md:text-xl font-bold text-slate-100 mb-4 md:mb-5 flex items-center gap-2 md:gap-3",

  // Transaction List
  listContainer:
    "bg-slate-900 rounded-xl -mx-7 md:rounded-2xl p-4 md:p-6 shadow-sm border border-slate-700 relative overflow-hidden",

  sectionTitle:
    "text-lg md:text-xl font-bold text-slate-100 mb-4 md:mb-5 flex items-center gap-2 md:gap-3",

  // Filter Section
  filterContainer:
    "flex flex-col sm:flex-row gap-2 md:gap-3 w-full sm:w-auto",

  filterSelect:
    "appearance-none bg-slate-800 border border-slate-600 rounded-lg pl-3 pr-8 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full",

  exportButton:
    "flex items-center justify-center gap-1 bg-slate-800 border border-slate-600 hover:bg-slate-700 text-slate-200 px-3 py-2 rounded-lg transition-all text-sm hover:shadow-md w-full sm:w-auto",

  // Transaction Items
  transactionList: "space-y-3 -mx-3 lg:-mx-0 md:-mx-0",

  viewAllButton:
    "mt-4 w-full text-center py-3 text-blue-400 font-medium hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-center gap-2",

  // Empty State
  emptyStateContainer: "text-center py-6 md:py-8",

  emptyStateIcon:
    "w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-blue-950 flex items-center justify-center",

  emptyStateText: "text-slate-300 font-medium text-sm md:text-base",

  emptyStateSubtext:
    "text-xs md:text-sm text-slate-500 mt-1 md:mt-2",

  emptyStateButton:
    "mt-3 md:mt-4 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-3 py-2 md:px-4 md:py-2.5 rounded-lg md:rounded-xl transition-all shadow-md hover:shadow-lg mx-auto text-sm md:text-base",

  // Time Frame Selector Container
  timeFrameContainer:
    "flex px-10 -mx-14 justify-center lg:-mx-0 md:-mx-0 lg:justify-end md:justify-end mt-4",

  // Chart Header
  chartHeaderContainer:
    "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5",

  // Chart Height
  chartHeight: "h-64 md:h-80",

  // Chart Tooltip
  tooltipContent: {
    backgroundColor: "rgba(15,23,42,0.95)",
    border: "1px solid #334155",
    borderRadius: "0.75rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    padding: "12px",
    backdropFilter: "blur(4px)",
    color: "#f8fafc",
  },

  // Icon Containers
  iconGreen: "p-2 bg-blue-900 rounded-lg",
  iconBlue: "p-2 bg-violet-900 rounded-lg",
  iconPurple: "p-2 bg-indigo-900 rounded-lg",

  // Icon Text Colors
  textGreen: "text-blue-400",
  textBlue: "text-violet-400",
  textPurple: "text-indigo-400",

  // Filter Icon
  filterIcon:
    "absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 text-slate-400 pointer-events-none",

  // Financial Card Borders
  borderGreen: "border-l-4 border-blue-500",
  borderBlue: "border-l-4 border-violet-500",
  borderPurple: "border-l-4 border-indigo-500",
};

export const expensePageStyles = {
  // Main container
  container: "space-y-6 max-w-7xl",

  // Header card
  headerCard: "bg-slate-900 rounded-xl p-4 lg:-mx-0 -mx-3.5 overflow-x-hidden mb-8 shadow border border-slate-700",
  headerContainer: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6",
  headerTitle: "text-2xl md:text-3xl font-bold text-slate-100",
  headerSubtitle: "text-slate-400 mt-1",
  addButton: "flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-4 py-3 rounded-xl transition-all shadow-md hover:shadow-lg font-medium",

  // Financial cards grid
  cardsGrid: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5",

  // Chart container
  chartContainer: "hidden md:block bg-slate-900 rounded-xl p-4 -mx-7 lg:-mx-0 shadow-sm border border-slate-700",
  chartHeader: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5",
  chartTitle: "text-xl font-bold text-slate-100 mb-5 flex items-center gap-3",
  exportButton: "flex items-center gap-1 bg-slate-800 border border-slate-600 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg transition-all text-sm hover:shadow-md",
  chart: "h-80",

  // Transactions container
  transactionsContainer: "bg-slate-900 rounded-2xl p-5 -mx-4 lg:-mx-0 md:-mx-5 shadow-sm border border-slate-700 relative overflow-hidden",
  transactionsHeader: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-5",
  transactionsTitle: "text-lg md:text-xl font-bold text-slate-100 mb-4 md:mb-5 flex items-center gap-2 md:gap-3",

  filterSelect: "appearance-none bg-slate-800 border border-slate-600 rounded-lg pl-3 pr-8 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full",

  // Transaction items
  transactionsList: "space-y-3 -mx-2 lg:-mx-0 md:-mx-0",
  viewAllButton: "mt-4 w-full text-center py-3 text-blue-400 font-medium hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-center gap-2",

  emptyState: "text-center py-8",
  emptyStateIcon: "w-16 h-16 mx-auto mb-4 rounded-full bg-blue-950 flex items-center justify-center",
  emptyStateText: "text-slate-300 font-medium",
  emptyStateSubtext: "text-sm text-slate-500 mt-2",

  // Icons
  iconOrange: "p-2 bg-blue-900 rounded-lg",
  iconAmber: "p-2 bg-violet-900 rounded-lg",
  iconYellow: "p-2 bg-indigo-900 rounded-lg",

  textOrange: "text-blue-400",
  textAmber: "text-violet-400",
  textYellow: "text-indigo-400",

  // Borders
  borderOrange: "border-l-4 border-blue-500",
  borderAmber: "border-l-4 border-violet-500",
  borderYellow: "border-l-4 border-indigo-500",

  // Chart tooltip styles
  tooltipContent: {
    backgroundColor: "rgba(15,23,42,0.95)",
    border: "1px solid #334155",
    borderRadius: "0.75rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    padding: "12px",
    backdropFilter: "blur(4px)",
    color: "#f8fafc",
  },

  // Chart height
  chartHeight: "h-80",

  // Export button
  chartExportButton: "flex items-center gap-1 bg-slate-800 border border-slate-600 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg transition-all text-sm hover:shadow-md",

  // Timeframe positioning
  timeframePositioning: "flex px-10 -mx-14 justify-center lg:-mx-0 md:-mx-0 lg:justify-end md:justify-end mt-4",

  // Transaction item
  transactionItemContainer: "flex items-center justify-between p-3 -mx-2 hover:bg-slate-800 rounded-xl transition-all duration-300 border border-slate-700 cursor-pointer mb-3 group",
  transactionAmount: "font-bold",
  transactionIcon: "lg:p-3 md:p-3 p-1 rounded-lg",
};

export const profileStyles = {
  // Container styles
  container: "max-w-4xl mx-auto py-8 px-4",
  mainContainer: "bg-slate-900 -mx-7 rounded-2xl shadow-sm overflow-hidden border border-slate-700",

  // Header styles
  header: "bg-gradient-to-r from-blue-600 to-violet-600 p-8 text-center",
  avatar: "w-24 h-24 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4",
  userName: "text-2xl font-bold text-white",
  userEmail: "text-slate-200 mt-2",

  // Content styles
  content: "p-8 -mx-6.5",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-8",

  // Card styles
  card: "bg-slate-800 rounded-xl p-6",
  cardTitle: "text-xl font-semibold pb-3 text-slate-100 flex items-center",
  icon: "w-5 h-5 mr-2 text-blue-400",

  // Form styles
  label: "text-sm text-slate-400 block mb-1",

  input:
    "w-full px-4 py-2 bg-slate-900 text-slate-100 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",

  inputWithError:
    "w-full px-4 py-2 bg-slate-800 text-slate-100 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",

  // Button styles
  buttonPrimary:
    "flex-1 bg-gradient-to-r from-blue-600 to-violet-600 text-white py-2.5 rounded-xl font-medium shadow-md",

  buttonSecondary:
    "flex-1 py-2.5 border border-slate-600 text-slate-200 rounded-xl font-medium hover:bg-slate-700",

  editButton:
    "text-blue-400 hover:text-blue-300 font-medium text-sm",

  changeButton:
    "text-blue-400 hover:text-blue-300 font-medium lg:text-sm",

  // Security item
  securityItem:
    "flex items-center justify-between p-4 bg-slate-800 rounded-xl text-white border border-slate-700",

  securityText:
    "font-medium lg:text-sm text-slate-400",

  // Modal styles
  modalContent:
    "bg-slate-900 rounded-2xl p-6 lg:px-28 w-full max-w-md border border-slate-700",

  modalHeader:
    "flex justify-between lg:whitespace-nowrap lg:space-x-20 mb-6",

  modalTitle:
    "text-xl font-bold lg:pl-10 text-slate-100",

  // Password input
  passwordLabel:
    "block text-sm font-medium text-slate-300 mb-1",

  passwordContainer: "relative",

  passwordToggle:
    "absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200",

  // Error text
  errorText: "mt-1 text-sm text-red-400"
};

// Add to existing dummyStyles.js
export const modalStyles = {
  // Modal container
  overlay: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50",
  modalContainer: "bg-slate-900 rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-700",

  // Header
  modalHeader: "flex justify-between items-center mb-4",
  modalTitle: "text-xl font-bold text-slate-100",
  closeButton: "text-slate-400 hover:text-slate-200",

  // Form elements
  form: "space-y-4",
  label: "block text-sm font-medium text-slate-300 mb-1",

  input: (ringColor) =>
    `w-full bg-slate-800 text-slate-100 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${ringColor}`,

  // Type buttons
  typeButtonContainer: "flex gap-4",

  typeButton: (isSelected, color) =>
    `flex-1 py-2 rounded-lg font-medium ${
      isSelected
        ? `${color} text-white shadow-md`
        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
    }`,

  // Submit button
  submitButton: (color) =>
    `w-full text-white py-3 rounded-lg font-medium mt-4 shadow-md hover:shadow-lg transition-all ${color}`,

  // Color classes
  colorClasses: {
    teal: {
      button: "bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700",
      ring: "focus:ring-blue-500",
      typeButtonSelected: "bg-blue-600",
    },

    orange: {
      button: "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700",
      ring: "focus:ring-violet-500",
      typeButtonSelected: "bg-violet-600",
    },
  },
};



// In src/assets/dummyStyles.js - add these styles
export const loginStyles = {
  // Page container
  pageContainer: "min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800",

  // Card container
  cardContainer: "w-full max-w-md bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700",

  // Header styles
  header: "bg-gradient-to-r from-blue-600 to-violet-600 p-6 text-center",
  avatar: "w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4",
  headerTitle: "text-2xl font-bold text-white",
  headerSubtitle: "text-slate-200 mt-2",

  // Form container
  formContainer: "p-8",

  // Error message
  errorContainer: "mb-6 p-3 bg-red-950 text-red-300 rounded-lg flex items-center",
  errorIcon: "w-6 h-6 rounded-full bg-red-900 flex items-center justify-center mr-3",
  errorText: "break-words",

  // Form elements
  label: "block text-sm font-medium text-slate-300 mb-2",

  inputContainer: "relative",

  inputIcon: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400",

  input: "w-full pl-10 pr-4 py-3 bg-slate-800 text-slate-100 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500",

  passwordInput: "w-full pl-10 pr-10 py-3 bg-slate-800 text-slate-100 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500",

  passwordToggle: "absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200",

  // Checkbox
  checkboxContainer: "mb-6 flex items-center",

  checkbox: "w-4 h-4 text-blue-600 border-slate-500 rounded focus:ring-blue-500",

  checkboxLabel: "ml-2 block text-sm text-slate-300",

  // Button
  button: "w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center",

  buttonDisabled: "opacity-80 cursor-not-allowed",

  // Sign up link
  signUpContainer: "mt-8 text-center",

  signUpText: "text-slate-400",

  signUpLink: "font-medium text-blue-400 hover:underline",

  // Spinner for loading state
  spinner: "animate-spin -ml-1 mr-3 h-5 w-5 text-white"
};

// Styles for Navbar component
export const navbarStyles = {
  // Layout and container styles
  header: "sticky top-0 z-50 bg-slate-900 border-b border-slate-700 shadow-sm",
  container: "flex items-center justify-between px-4 py-3 md:px-8 max-w-7xl mx-auto",

  // Logo styles
  logoContainer: "flex items-center gap-0 cursor-pointer",
  logoImage: "w-10 h-10  rounded-xl overflow-hidden",

  // Text styles
  logoText: "lg:text-3xl pl-2 md:text-3xl text-2xl text-white font-[550] lobster-regular",

  // User profile styles
  userContainer: "relative",
  userButton: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors",
  userAvatar: "w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white font-bold text-lg",
  statusIndicator: "absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900",
  userTextContainer: "text-left hidden md:block",
  userName: "text-sm font-medium text-slate-100 truncate max-w-[120px]",
  userEmail: "text-xs text-slate-400 truncate max-w-[120px]",
  chevronIcon: (isOpen) => `w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`,

  // Dropdown menu styles
  dropdownMenu: "absolute top-14 right-0 w-56 bg-slate-900 rounded-xl shadow-lg border border-slate-700 z-50",
  dropdownHeader: "px-4 py-3 border-b border-slate-700",
  dropdownAvatar: "w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg",
  dropdownName: "text-sm text-slate-100",
  dropdownEmail: "text-xs text-slate-400",

  // Menu items
  menuItemContainer: "p-1.5",
  menuItem: "w-full px-4 py-3 text-left hover:bg-slate-800 text-sm text-slate-300 flex items-center gap-3 rounded-lg",
  menuItemBorder: "p-1.5 border-t border-slate-700",
  logoutButton: "flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-red-950 text-red-400 rounded-lg"
};


// In src/assets/dummyStyles.js - add these styles
export const signupStyles = {
  // Page container
  pageContainer: "min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800",

  // Card container
  cardContainer: "w-full max-w-md bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700",

  // Header styles
  header: "bg-gradient-to-r from-blue-600 to-violet-600 p-6 text-center relative",
  avatar: "w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4",
  headerTitle: "text-2xl font-bold text-white",
  headerSubtitle: "text-slate-200 mt-2",
  backButton: "absolute top-4 left-4 p-2 text-white rounded-full hover:bg-white/10 transition-colors",

  // Form container
  formContainer: "p-8",

  // Error messages
  apiError: "mb-4 text-center text-sm text-red-400",
  fieldError: "mt-1 text-sm text-red-400",

  // Form elements
  label: "block  text-sm font-medium text-slate-300 mb-2",

  inputContainer: "relative",

  inputIcon: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400",

  input: "w-full pl-10 pr-4 py-3 bg-slate-800 text-slate-100 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500",

  passwordInput: "w-full pl-10 pr-10 py-3 bg-slate-800 text-slate-100 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500",

  passwordToggle: "absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200",

  // Checkbox
  checkboxContainer: "mb-6 flex items-center",

  checkbox: "w-4 h-4 text-blue-600 border-slate-500 rounded focus:ring-blue-500",

  checkboxLabel: "ml-2 block text-sm text-slate-300",

  // Button
  button: "w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center",

  buttonDisabled: "opacity-80 cursor-not-allowed",

  // Sign in link
  signInContainer: "mt-8 text-center",

  signInText: "text-slate-400",

  signInLink: "font-medium text-blue-400 hover:underline",

  // Spinner
  spinner: "animate-spin -ml-1 mr-3 h-5 w-5 text-white"
};

export const transactionItemStyles = {
  // Container styles
  container: (isEditing, classes) =>
    `flex flex-col md:flex-row items-stretch justify-between gap-3 p-4 rounded-xl border border-slate-700 mb-3 last:mb-0 ${isEditing ? classes.bg : "hover:bg-slate-800"}`,

  // Layout styles
  mainContainer: "flex items-center gap-3 flex-1 min-w-0",
  actionsContainer: "flex items-center justify-between gap-3 mt-2 md:mt-0",
  amountContainer: "min-w-[100px] flex-shrink-0 flex justify-end",
  buttonsContainer: "flex gap-1 flex-shrink-0",

  // Icon styles
  iconContainer: (iconClass, classes) => `${iconClass} ${classes.iconBg}`,

  // Content styles
  contentContainer: "min-w-0 flex-1",
  description: "font-medium text-slate-100 truncate",
  details: "text-xs text-slate-400 mt-1 truncate",

  // Input styles
  input: (hasError, classes) =>
  `w-full bg-slate-800 text-white placeholder-slate-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 ${
    hasError ? "border-red-500 ring-red-500" : `${classes.border} ${classes.ring}`
  }`,

    amountInput: (hasError, classes) =>
    `w-full max-w-[120px] bg-slate-800 text-white placeholder-slate-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 ${
      hasError ? "border-red-500 ring-red-500" : `${classes.border} ${classes.ring}`
    }`,

  // Error styles
  errorText: "text-xs text-red-400 mt-1",

  // Amount display
  amountText: (amountClass, classes) => `${amountClass} ${classes.text}`,

  // Button styles
  saveButton: (classes) => `p-2 ${classes.button} rounded-lg`,
  cancelButton: "p-2 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600",
  editButton: (classes) => `p-2 ${classes.text} rounded-lg hover:${classes.bg}`,
  deleteButton: (classes) => `p-2 ${classes.text} rounded-lg hover:${classes.bg}`
};

// Centralized styles for the application
export const sidebarStyles = {
  // Layout and container styles
  sidebarContainer: {
    base: "hidden lg:flex flex-col pt-3 fixed top-16 bottom-0 z-30"
  },

  sidebarInner: {
    base: "bg-slate-900 border-r border-slate-800 shadow-md h-full flex flex-col"
  },

  // User profile section
  userProfileContainer: {
    base: "p-4 border-b pt-20 md:pt-5 lg:pt-5 xl:pt-5 border-slate-700",
    collapsed: "px-3",
    expanded: "px-6"
  },

  userInitials: {
    base: "w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-xl"
  },

  // Menu items
  menuList: {
    base: "space-y-1 px-2"
  },

  menuItem: {
    base: "relative flex items-center gap-3 py-3 rounded-xl font-medium transition-all duration-200",
    active: "text-blue-400 bg-blue-950",
    inactive: "text-slate-300 hover:text-blue-400 hover:bg-slate-800",
    collapsed: "justify-center px-0 mx-2",
    expanded: "px-4"
  },

  menuIcon: {
    active: "text-blue-400",
    inactive: "text-slate-400"
  },

  activeIndicator: "absolute right-4 w-2 h-2 bg-blue-500 rounded-full animate-ping",

  // Toggle button
  toggleButton: {
    base: "absolute -right-3 top-12 z-20 w-6 h-6 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500 hover:bg-slate-800 transition-all"
  },

  // Footer section
  footerContainer: {
    base: "border-t border-slate-700 p-4",
    collapsed: "px-3",
    expanded: "px-6"
  },

  footerLink: {
    base: "flex items-center gap-3 py-2 rounded-xl font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-800",
    collapsed: "justify-center"
  },

  logoutButton: {
    base: "flex items-center gap-3 py-2 rounded-xl font-medium text-slate-300 hover:text-red-400 hover:bg-red-950 w-full mt-1",
    collapsed: "justify-center"
  },

  // Mobile sidebar
  mobileOverlay: "fixed inset-0 z-40 lg:hidden",
  mobileBackdrop: "absolute inset-0 bg-black/50 backdrop-blur-sm",

  mobileSidebar: {
    base: "absolute left-0 top-0 bottom-0 w-4/5 max-w-sm bg-slate-900 shadow-2xl rounded-r-2xl overflow-hidden"
  },

  mobileHeader: "p-6 flex justify-between items-center border-b border-slate-700",
  mobileUserContainer: "flex pt-28 items-center gap-3",
  mobileCloseButton: "p-2 rounded-lg hover:bg-slate-800",

  mobileMenuList: "space-y-1",
  mobileMenuItem: {
    base: "flex items-center gap-4 px-6 py-4 font-medium",
    active: "text-blue-400 bg-blue-950",
    inactive: "text-slate-300 hover:bg-slate-800"
  },

  mobileFooter: "border-t border-slate-700 p-6",
  mobileFooterLink: "flex items-center gap-4 py-2 font-medium text-slate-300 hover:text-blue-400",
  mobileLogoutButton: "flex items-center gap-4 py-2 font-medium text-slate-300 hover:text-red-400 w-full",

  // Mobile menu button
  mobileMenuButton: "lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-blue-600 to-violet-600 text-white rounded-full flex items-center justify-center shadow-xl"
};

// Helper function to combine class names
export const cn = (...classes) => classes.filter(Boolean).join(" ");

// assets/dummyStyles.js

export const styles = {
  // Layout and Container Styles
  layout: {
    root: "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800",
    mainContainer: (sidebarCollapsed) =>
      `p-4 pt-6 transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`,
  },

  // Header Styles
  header: {
    container: "flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4",
    title: "text-2xl font-bold text-slate-100",
    subtitle: "text-slate-400",
  },

  // Stat Card Styles
  statCards: {
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-6",
    card: "bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-700",
    cardHeader: "flex justify-between items-start",
    cardTitle: "text-sm text-slate-400",
    cardValue: "text-2xl font-bold text-slate-100 mt-1",
    iconContainer: (color) => `bg-${color}-900/40 p-2 rounded-lg`,
    icon: (color) => `w-5 h-5 text-${color}-400`,
    cardFooter: "text-xs text-slate-500 mt-3",
  },

  // Grid Layout
  grid: {
    main: "grid grid-cols-1 lg:grid-cols-3 gap-6",
    leftColumn: "lg:col-span-2 space-y-6",
    rightColumn: "lg:col-span-1 lg:-mx-3 space-y-6",
  },

  // Card Styles
  cards: {
    base: "bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-700",
    header: "flex justify-between items-center mb-6",
    title: "text-xl font-bold text-slate-100 flex items-center gap-3",
    titleIcon: "w-6 h-6",
  },

  // Recent Transactions Card
  transactions: {
    cardHeader: "flex justify-between items-center mb-4",
    cardTitle: "text-md md:text-xl lg:text-xl xl:text-xl font-bold text-slate-100 flex items-center gap-3",
    refreshButton: "p-2 rounded-lg hover:bg-slate-800 transition-colors",
    refreshIcon: (loading) => `w-5 h-5 text-slate-400 ${loading ? 'animate-spin' : ''}`,
    dataStackingInfo: "flex items-center gap-2 text-xs text-blue-300 mb-4 bg-blue-950 p-2 rounded-lg",
    dataStackingIcon: "w-4 h-4 text-blue-400",
    listContainer: "space-y-4 max-h-[500px] -mx-5 overflow-y-auto pr-2",
    transactionItem: "flex items-center lg:flex-col xl:flex-row md:flex-row justify-between p-1 -mx-0 lg:p-4 md:p-4 hover:bg-slate-800 rounded-xl transition-all duration-300 border border-slate-700",
    iconWrapper: (type) => type === 'income' ? 'bg-blue-900 text-blue-400' : 'bg-orange-900 text-orange-400',
    icon: "w-4 h-4",
    details: "min-w-0",
    description: "font-medium text-slate-100 truncate max-w-[120px]",
    meta: "text-xs text-slate-400 mt-1",
    amount: (type) => `font-semibold ${type === 'income' ? 'text-blue-400' : 'text-orange-400'}`,
    emptyState: "text-center py-8",
    emptyIconContainer: "w-16 h-16 mx-auto mb-4 rounded-full bg-violet-900 flex items-center justify-center",
    emptyIcon: "w-8 h-8 text-violet-400",
    emptyText: "text-slate-400",
    viewAllContainer: "pt-4 border-t border-slate-700",
    viewAllButton: "w-full flex items-center justify-center gap-2 py-3 text-blue-400 font-medium hover:bg-slate-800 rounded-xl transition-colors",
  },

  // Spending by Category Card
  categories: {
    title: "text-lg md:text-xl lg:text-xl xl:text-xl font-bold text-slate-100 mb-6 flex items-center gap-3",
    titleIcon: "w-6 h-6 text-blue-400",
    list: "space-y-4",
    categoryItem: "flex items-center md:text-lg lg:text-sm xl:text-lg justify-between",
    categoryIconContainer: "bg-slate-800 p-2 rounded-lg",
    categoryIcon: "w-4 h-4 text-slate-300",
    categoryName: "font-medium text-slate-300",
    categoryAmount: "font-semibold text-slate-100",
    summaryContainer: "mt-6 pt-6 border-t border-slate-700",
    summaryGrid: "grid grid-cols-2 gap-4",
    summaryIncomeCard: "bg-gradient-to-br from-blue-900 to-violet-900 rounded-xl p-4",
    summaryExpenseCard: "bg-gradient-to-br from-orange-900 to-red-900 rounded-xl p-4",
    summaryTitle: "text-sm text-slate-300",
    summaryValue: "text-sm font-bold text-slate-100",
  },

  // Color Helpers
  colors: {
    transaction: {
      text: (type) => type === 'income' ? 'text-blue-400' : 'text-orange-400',
      bg: (type) => type === 'income' ? 'bg-blue-900 text-blue-400' : 'bg-orange-900 text-orange-400',
    },
    expenseChange: (change) => change > 0 ? 'text-orange-400' : 'text-green-400',
  },
};